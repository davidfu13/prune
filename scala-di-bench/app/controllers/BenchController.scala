package controllers

import akka.stream.scaladsl.Source
import akka.util.ByteString
import javax.inject.{Inject, Singleton}
import play.api._
import play.api.http.{HttpChunk, HttpEntity}
import play.api.mvc._
import play.api.libs.json.Json
import scala.collection.mutable.ArrayBuffer
import scala.concurrent.{ExecutionContext, Future}

@Singleton
class BenchController @Inject() (
    action: DefaultActionBuilder,
    parsers: PlayBodyParsers
  )(implicit
    ec: ExecutionContext
  ) extends Controller {

  def simple = action { request =>
    Ok("Hello world.")
  }

  def download(length: Int) = action { request =>
    Ok(new Array[Byte](length))
  }

  def downloadChunked(length: Int) = action { request =>
    assert(length < 100 * 1024, "Chunked download creates all arrays in memory so size is limited to 100,000 bytes")

    // Cap each chunk at 4k
    val maxArraySize = 4 * 1024

    // Create all the chunks and put them in a buffer. It would
    // be better to do this lazily, but it's simpler to do it eagerly. :)
    val chunkBuffer = new ArrayBuffer[HttpChunk.Chunk](length / maxArraySize + 1)
    var remaining = length
    while (remaining > 0) {
      val chunkSize = Math.min(remaining, maxArraySize)
      val chunk = HttpChunk.Chunk(ByteString(new Array[Byte](chunkSize)))
      chunkBuffer += chunk
      remaining -= chunkSize
    }

    Result(
      header = ResponseHeader(200),
      body = HttpEntity.Chunked(
        chunks = Source.fromIterator(() => chunkBuffer.iterator),
        contentType = None
      )
    )
  }

  def upload = action(parsers.raw) { request =>
    Ok("upload")
  }

  def templateSimple = action { request =>
    Ok(views.html.simple("simple"))
  }

  def templateLang = action { request =>
    Ok(views.html.lang())
  }

  def jsonEncode = action { request =>
    Ok(Json.obj("message" -> "Hello, World!"))
  }

}