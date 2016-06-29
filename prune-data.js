var report = {"start":1456839584965,"end":1467207584965,"branches":{"master":[{"commit":"09af8240138b9dbea477d815c64f08494d329f83","time":1455152255000}],"2.4.x":[{"commit":"8ca96a90c1f3eff0f0a3a0de6ee5e160fff44d4a","time":1454704912000}],"2.3.x":[{"commit":"04ba3aacdf64aef229bb5f27f4136db2f2ac7eb9","time":1449969635000}]},"tests":{"scala-download-chunked-50k":"Serve an empty 50K response in 4K chunks","java-di-download-50k":"Serve an empty 50K response","java-di-template-lang":"Serve a template that takes a language argument","scala-di-json-encode":"Serve a small JSON message","scala-simple":"Serve a small plain text response","scala-di-template-lang":"Serve a template that takes a language argument","scala-di-download-chunked-50k":"Serve an empty 50K response in 4K chunks","java-di-json-encode-streaming":"Serve a small JSON message using Jackson's Streaming API","java-download-chunked-50k":"Serve an empty 50K response in 4K chunks","java-di-simple":"Serve a small plain text response","scala-template-lang":"Serve a template that takes a language argument","scala-template-simple":"Serve a template that takes a title argument","scala-download-50k":"Serve an empty 50K response","scala-di-template-simple":"Serve a template that takes a title argument","scala-di-simple":"Serve a small plain text response","scala-json-encode":"Serve a small JSON message","java-template-simple":"Serve a template that takes a title argument","java-simple":"Serve a small plain text response","java-json-encode":"Serve a small JSON message","java-template-lang":"Serve a template that takes a language argument","scala-di-download-50k":"Serve an empty 50K response","java-json-encode-streaming":"Serve a small JSON message using Jackson's Streaming API","java-di-json-encode":"Serve a small JSON message","java-di-download-chunked-50k":"Serve an empty 50K response in 4K chunks","java-di-template-simple":"Serve a template that takes a title argument","java-download-50k":"Serve an empty 50K response"},"results":{"09af8240138b9dbea477d815c64f08494d329f83":{"java-di-download-50k":{"run":"617bc9c6-956c-4b35-aa8c-95a7e4e8a3c8","req/s":31970.3142778646,"latMean":1.03043,"lat95":2.442},"java-di-template-lang":{"run":"e3ceb1da-5a2a-4cc7-bfaa-d95f1f199ef8","req/s":47527.47172615836,"latMean":2.62401,"lat95":1.748},"scala-di-json-encode":{"run":"03e8e8fc-806f-40b5-a44f-a215b85e7c77","req/s":50928.2403009574,"latMean":0.682716,"lat95":1.814},"scala-di-template-lang":{"run":"53574269-8983-4e82-adfb-3dbcfac0d6f3","req/s":52265.74957038196,"latMean":1.5577699999999999,"lat95":1.824},"scala-di-download-chunked-50k":{"run":"35b9c67b-17f4-4d02-a1d9-89a4c0b4ec05","req/s":7604.950587372041,"latMean":8.13195,"lat95":9.008},"java-di-simple":{"run":"bfe4a66f-419e-4379-9407-74c33cc4258f","req/s":49570.99559963394,"latMean":0.75881,"lat95":1.854},"scala-di-template-simple":{"run":"b01f66db-0eff-4784-8343-e65bf2222ae3","req/s":54107.24895554792,"latMean":0.6204109999999999,"lat95":1.732},"scala-di-simple":{"run":"f97206c7-4bdd-4b85-9c94-178fd925d13c","req/s":60972.22027653409,"latMean":1.4912100000000001,"lat95":1.709},"scala-di-download-50k":{"run":"b092db19-0a98-4f0c-b5ce-3388c0421458","req/s":34042.72114192745,"latMean":1.00072,"lat95":2.373},"java-di-json-encode":{"run":"e1d1b01d-b99a-423d-98ab-74a2637e9226","req/s":48786.58259702729,"latMean":0.658194,"lat95":1.722},"java-di-download-chunked-50k":{"run":"4ff63252-dd66-4a26-a9da-3f42dad36d3a","req/s":6957.358523847148,"latMean":5.69166,"lat95":9.629},"java-di-template-simple":{"run":"95ab7afd-c924-4b43-b3db-e0e886387e4f","req/s":49601.44631084513,"latMean":0.669243,"lat95":1.782}},"04ba3aacdf64aef229bb5f27f4136db2f2ac7eb9":{"scala-download-chunked-50k":{"run":"d4d2fce5-ec32-463f-bc08-5a0f0af6e88c","req/s":799.5569628085511,"latMean":39.982,"lat95":39.991},"scala-simple":{"run":"f6b64687-8e0d-487f-a51a-458308bb2620","req/s":54607.116508128536,"latMean":0.580144,"lat95":1.498},"java-download-chunked-50k":{"run":"acbcf4db-4d3a-48ae-b7f2-f14069c26eb5","req/s":799.505657112503,"latMean":39.9751,"lat95":39.988},"scala-template-lang":{"run":"5b1461dc-d113-4437-b661-36e7d31cbdcc","req/s":52366.38879660444,"latMean":0.59669,"lat95":1.463},"scala-template-simple":{"run":"ba6b00c4-9107-4f14-9f6e-8a06d29c50d3","req/s":52518.7908105377,"latMean":3.44922,"lat95":1.494},"scala-download-50k":{"run":"734bb19b-ac9d-4f5e-8192-81631ad5e005","req/s":43105.40373163112,"latMean":6.175520000000001,"lat95":1.79},"scala-json-encode":{"run":"6ae9c479-1010-4b7e-bc87-acccc6907acf","req/s":53543.59438198714,"latMean":0.5979289999999999,"lat95":1.512},"java-template-simple":{"run":"64320179-8a81-41a3-8993-d5b1a1b4451e","req/s":45049.61955921171,"latMean":0.724092,"lat95":1.804},"java-simple":{"run":"37bcc0ed-f7cd-4ae4-8cdc-2f12c08bc98e","req/s":45765.99745955023,"latMean":0.6858289999999999,"lat95":1.699},"java-json-encode":{"run":"cfb64abb-b2f3-40b0-8401-bd58b04a958c","req/s":52175.881223468146,"latMean":0.618216,"lat95":1.532},"java-template-lang":{"run":"2c2d2548-3e09-4d19-9326-c663d179f817","req/s":38610.15711482188,"latMean":0.8401839999999999,"lat95":1.548},"java-download-50k":{"run":"9bf51ee0-ed0e-41d6-9ea0-9d85ac50c779","req/s":38845.76601142042,"latMean":5.44804,"lat95":1.916}}}};