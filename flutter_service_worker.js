'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b1f0fbb4d74bf41b1c13d8f8f6eb49d9",
"assets/AssetManifest.bin.json": "2c06600ba3811476dd29293811ea591b",
"assets/AssetManifest.json": "4f4e84eed458e29f5c9eb9c1f26994c3",
"assets/assets/images/Bok.png": "9ec37a7bf6f44f701dfd0381f5561d0f",
"assets/assets/images/carrykind.png": "1f4bb222eceb6449c5a0660c113e1653",
"assets/assets/images/facebook.png": "14955f77faa7dcc492daf87b97d17755",
"assets/assets/images/github.png": "b1dd376647549c8aa32f18564466eb99",
"assets/assets/images/linkedin.png": "a8c88457d36dda46bef819853f70f6df",
"assets/assets/images/profile%2520image.png": "c3ccb8a091fe8099fa9500feade698c6",
"assets/assets/mockups/alnoor/1.png": "9833b09b62fd50e4d862809ccfcf8a5b",
"assets/assets/mockups/alnoor/10.png": "dc147a50b96fa5ef370b927458ea675e",
"assets/assets/mockups/alnoor/11.png": "72b2a4333d9a6176f45904c3d559efbe",
"assets/assets/mockups/alnoor/2.png": "1fe45d6cec37ab92b51ad77dcc868951",
"assets/assets/mockups/alnoor/3.png": "093af5e8625a2d79738eba69fe8e7ceb",
"assets/assets/mockups/alnoor/4.png": "94afab0516d443ac5a4fa6ddea9f1e60",
"assets/assets/mockups/alnoor/5.png": "cae8aa1595198ca4fc4dee0c1d50d5c7",
"assets/assets/mockups/alnoor/6.png": "253e27c748491e6ba6637e3da0e07a91",
"assets/assets/mockups/alnoor/7.png": "d64eb878f064bb567a1bb31471100022",
"assets/assets/mockups/alnoor/8.png": "d48422542acfe864c82092ba7c7ba9a0",
"assets/assets/mockups/alnoor/9.png": "03a338f44f933ccaf5ed8859bbe6564a",
"assets/assets/mockups/alnoor/show.png": "72b2a4333d9a6176f45904c3d559efbe",
"assets/assets/mockups/B%2520ok/1.png": "31e3a9b6f5c41613bffa723608270ecb",
"assets/assets/mockups/B%2520ok/2.png": "6394befa965e0a89d4624ecd65a7f42d",
"assets/assets/mockups/B%2520ok/3.png": "1cb31b4cc735ff6cb9786a3ba8dc1cb0",
"assets/assets/mockups/B%2520ok/4.png": "1e7d65857e89d417f623fb1082b2c0ba",
"assets/assets/mockups/B%2520ok/5.png": "2232287a5e2e64e201963d5695bccade",
"assets/assets/mockups/B%2520ok/show.png": "1cb31b4cc735ff6cb9786a3ba8dc1cb0",
"assets/assets/mockups/carry%2520kind/1.png": "81a4834abce96fdeae951387879f4482",
"assets/assets/mockups/carry%2520kind/10.png": "baea51e932b2e030a15dd927fa25db56",
"assets/assets/mockups/carry%2520kind/11.png": "0eb5fc3e1a18489169069c93a5cde3ad",
"assets/assets/mockups/carry%2520kind/12.png": "3349e374d605abcea1f6ac3d058fcf8c",
"assets/assets/mockups/carry%2520kind/13.png": "065856c9b73651dba9d7ff450fd2f372",
"assets/assets/mockups/carry%2520kind/14.png": "bfb4a6bbd7f753ebcb26d53f171ff1c5",
"assets/assets/mockups/carry%2520kind/15.png": "8871ee5f6c88c729d8b63af2a1657474",
"assets/assets/mockups/carry%2520kind/16.png": "6916e857073996e79042267d8d21e382",
"assets/assets/mockups/carry%2520kind/2.png": "f5aa6906ecb4028c7ecfa9f81439e330",
"assets/assets/mockups/carry%2520kind/3.png": "7abf4a2a5a6cc142f81e509f0afb40fe",
"assets/assets/mockups/carry%2520kind/4.png": "f46ab76e9b411d38112167987e10a8f9",
"assets/assets/mockups/carry%2520kind/5.png": "50beb5a461bcf09392bfa25f1a9a8983",
"assets/assets/mockups/carry%2520kind/6.png": "79b567b5d1f017a3bb2f3aa79211663d",
"assets/assets/mockups/carry%2520kind/7.png": "33b6749a65a7e944e5acd1726798e0ae",
"assets/assets/mockups/carry%2520kind/8.png": "7203389ca8026044c65ed9badcd82503",
"assets/assets/mockups/carry%2520kind/9.png": "c9de0161ec3b35f99a2be420c8e68cad",
"assets/assets/mockups/carry%2520kind/show.png": "79b567b5d1f017a3bb2f3aa79211663d",
"assets/assets/mockups/doorway/1.png": "5041492a0465debf545a9179bf7574fb",
"assets/assets/mockups/doorway/10.png": "29b95d08638f4db9eb598ea683b55e97",
"assets/assets/mockups/doorway/11.png": "18fad6dc5d7bd9d004c34d379fd7c5a8",
"assets/assets/mockups/doorway/12.png": "2d5440f601814989e7c9575922823371",
"assets/assets/mockups/doorway/13.png": "093e970df0d05258beec4f407aea43d6",
"assets/assets/mockups/doorway/14.png": "bb83487d6bbe23782fc61a3db9ddf5c1",
"assets/assets/mockups/doorway/15.png": "8ad1fe634f2a07848bf6a45c4d13c218",
"assets/assets/mockups/doorway/16.png": "c54d48d56ef4690e423d0851e014dc8e",
"assets/assets/mockups/doorway/17.png": "f2c006783f28c0d144083d468fa793e2",
"assets/assets/mockups/doorway/18.png": "fa9384d1e6238399594b93787646b2da",
"assets/assets/mockups/doorway/19.png": "0860066dffbc670945f28c8b1525fddf",
"assets/assets/mockups/doorway/2.png": "2fbfd29faf7f5c21c402371f963da12d",
"assets/assets/mockups/doorway/20.png": "0bbcfbdf204a15ff03a605d4f327be09",
"assets/assets/mockups/doorway/21.png": "3944fc7ee4eb94c0463596f5c53822b0",
"assets/assets/mockups/doorway/22.png": "4b420a276d9b6373450ae07e9c2e750c",
"assets/assets/mockups/doorway/23.png": "865b4f904cd04a14d41a06831ee48ab0",
"assets/assets/mockups/doorway/24.png": "21dc7ec1413f27d593bec349059f8fce",
"assets/assets/mockups/doorway/25.png": "6c5448653f858bfbbb3a25f23bc5fc39",
"assets/assets/mockups/doorway/26.png": "472450154fbf313cb445df9fd1715d3b",
"assets/assets/mockups/doorway/27.png": "f95f94e881a626c7f8802c33e61d698c",
"assets/assets/mockups/doorway/28.png": "9b6a8aaf59f873ed22b86dc501c51548",
"assets/assets/mockups/doorway/29.png": "1d534e2980c89c82c025bc2978509df4",
"assets/assets/mockups/doorway/3.png": "663d130cbdd5e330cd7757387628c8c2",
"assets/assets/mockups/doorway/30.png": "f089c2d784889bc07d7a5845d23b9cad",
"assets/assets/mockups/doorway/31.png": "7ed5d17e1a90b2e9c7819793b7463641",
"assets/assets/mockups/doorway/4.png": "d97da25ee20785c2722926e7a0967d59",
"assets/assets/mockups/doorway/5.png": "591dd00de520ad66c1f13095a2fa01c9",
"assets/assets/mockups/doorway/6.png": "0a02694d52b418e0fc6d375a30745cea",
"assets/assets/mockups/doorway/7.png": "a2516599808fe43e7ff019741f88e383",
"assets/assets/mockups/doorway/8.png": "169a5a0de7b0df993e8b7a73722ea4e4",
"assets/assets/mockups/doorway/9.png": "d530b92aef9d87fe185c7c2f6ff120b0",
"assets/assets/mockups/doorway/show.png": "f2c006783f28c0d144083d468fa793e2",
"assets/assets/mockups/nebot/1.png": "85955e8b1a572169d4df7f3dbc579cb4",
"assets/assets/mockups/nebot/10.png": "08eb0386050075ba7999e8ecc311f624",
"assets/assets/mockups/nebot/11.png": "3f6402979eef70d234f7bdfd6f0041e8",
"assets/assets/mockups/nebot/12.png": "24aa8260b04d27730f5537bbdbaf5935",
"assets/assets/mockups/nebot/13.png": "c273489fb02349a4ce1b8142b3217191",
"assets/assets/mockups/nebot/14.png": "8fd74b73c821518924f3f14cea029a30",
"assets/assets/mockups/nebot/15.png": "76e4c018579edc7adcd6545be6a687b9",
"assets/assets/mockups/nebot/16.png": "cfbaeb1fef342c99e729c6655466fa74",
"assets/assets/mockups/nebot/17.png": "6385a5e8c6eaf59cbbfc58e2775b6dfb",
"assets/assets/mockups/nebot/18.png": "96893334d540d3d873eba3748da619ec",
"assets/assets/mockups/nebot/19.png": "55f878095562255f8aaadb3e962836bd",
"assets/assets/mockups/nebot/2.png": "82b9f41366088c78381281ac65209996",
"assets/assets/mockups/nebot/20.png": "49ae616ea1a476eed89cc0b5d7549345",
"assets/assets/mockups/nebot/21.png": "312d921483f6ff7510eebac63bb2f37e",
"assets/assets/mockups/nebot/22.png": "76fd4e5bded3de9ebc621d95e2e6100d",
"assets/assets/mockups/nebot/23.png": "9b75149d260eca341abd3dc45c3f0aea",
"assets/assets/mockups/nebot/24.png": "8f45d7a68ae6a6fd59319981fa25b97b",
"assets/assets/mockups/nebot/25.png": "cd9d09c6138fa960189d70910eed3a5d",
"assets/assets/mockups/nebot/26.png": "6c946ec6558e6f63c5e674dda137e441",
"assets/assets/mockups/nebot/27.png": "14ce2be332c1cb1103d4e1350de84c88",
"assets/assets/mockups/nebot/28.png": "f231ab45179adaa8f30e990230826207",
"assets/assets/mockups/nebot/29.png": "72d15bc164beafc4ff7e85facc412314",
"assets/assets/mockups/nebot/3.png": "94c233ab05a16fa5842ec280518b940c",
"assets/assets/mockups/nebot/30.png": "77699725c83e9f733a595c2c31012d60",
"assets/assets/mockups/nebot/31.png": "e5739b3349246e604d3a883c73315f9f",
"assets/assets/mockups/nebot/32.png": "aacb88d542fd7cf34ccffbf8a0035104",
"assets/assets/mockups/nebot/33.png": "1e8bdefd618d8ad63b0da7b53a41bd69",
"assets/assets/mockups/nebot/34.png": "d62094e6e04504733530614ac0b8eac0",
"assets/assets/mockups/nebot/35.png": "417d90ba57c20afc35b98a6fe253a808",
"assets/assets/mockups/nebot/36.png": "719c5fadb5296cd27958a7825344fb24",
"assets/assets/mockups/nebot/37.png": "b2ac72abdd0f88764e597a83e976f4fb",
"assets/assets/mockups/nebot/38.png": "9a5baaad954d35d116b43f891010917e",
"assets/assets/mockups/nebot/4.png": "c4178c5e2bf8e209dcafa7ed98a1630e",
"assets/assets/mockups/nebot/5.png": "71f2fabb150f232e822ed330e8d050b5",
"assets/assets/mockups/nebot/6.png": "65bed3d19c96701c8eda1a34940b5fc7",
"assets/assets/mockups/nebot/7.png": "1da890cbb04dd265bc82483a43b30a93",
"assets/assets/mockups/nebot/8.png": "69b20433ef5ff66e5bcd7dd46c986653",
"assets/assets/mockups/nebot/9.png": "669c52d0e9cf1763451afa1dbb3a0d90",
"assets/assets/mockups/nebot/show.png": "1da890cbb04dd265bc82483a43b30a93",
"assets/assets/pdf/kenan%2520qanas.pdf": "5dc4d1fd377764b71d81cbf87447534c",
"assets/assets/translations/ar.json": "479fc4372d6819f7f2bda853794e24d7",
"assets/assets/translations/en.json": "c11e9e9385195a764bf751b300245140",
"assets/FontManifest.json": "1b43e961ca39d9cd647a4a958f0dc806",
"assets/fonts/MaterialIcons-Regular.otf": "5a14214be90db8cb15b1fa650122284f",
"assets/NOTICES": "48bfbde8f32435d5a4be044adc16f95f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "457bb6c15808ade8de071e2965992722",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "e8364ba8fb630d4e29175d9a8ba9f9b8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4164956c97e7febe629d6960cb95e9b9",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "e3a28baf7b236db21c08f494c97f44aa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "a665a9357e77825a017dfa4c35b7f665",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "97cc50b7222bc1b43bcb58625002e060"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
