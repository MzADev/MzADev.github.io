'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b48ac4ef85b4b5ef43f6d1b8f6b572a9",
"assets/FontManifest.json": "ffece8df1a600eb2e2205254104682b3",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/assets/fonts/NotoSans-Bold.ttf": "98f0cacc6bb63b64b98aac7cac082d27",
"assets/lib/assets/fonts/NotoSans-Regular.ttf": "5a87cce84010f7cea085ae218d44a64b",
"assets/lib/assets/images/bird.png": "a75e07fe59a6dc999abd2ef540bc991a",
"assets/lib/assets/images/lamp_customer/1.jpg": "c411114cb13f2066eba7c5e316848054",
"assets/lib/assets/images/lamp_customer/2.jpg": "e8014328f83b654d7f30450b4ff63230",
"assets/lib/assets/images/lamp_customer/3.jpg": "c26b813743804cff308301eefb1b473d",
"assets/lib/assets/images/lamp_customer/4.jpg": "b5d0a377a95e5d0d35835959615c5987",
"assets/lib/assets/images/lamp_customer/5.jpg": "42be7a123f53d1ef6ba07428ad9c3aee",
"assets/lib/assets/images/lamp_customer/6.jpg": "6f636c4838649e6a30bd596bc297b024",
"assets/lib/assets/images/lamp_customer/7.jpg": "e43abe728ec14e204536422c95fecaa7",
"assets/lib/assets/images/lamp_customer/8.jpg": "0ba502f85d1e62af476ad86270529315",
"assets/lib/assets/images/lamp_customer/logo.png": "b91ccd71c1420c2ee0b85ce6c8ea556f",
"assets/lib/assets/images/lamp_seller/1.jpg": "6e4068f7f186459324b520d3d5d0dd7e",
"assets/lib/assets/images/lamp_seller/2.jpg": "d988829493c87943685e70067bff16f5",
"assets/lib/assets/images/lamp_seller/3.jpg": "d794d9659f8458357b38714edbf04d59",
"assets/lib/assets/images/lamp_seller/4.jpg": "527b184bb597a40d9fbb1b08fa00d172",
"assets/lib/assets/images/lamp_seller/5.jpg": "81b79692d6e8e403ad196f2c65cea4c3",
"assets/lib/assets/images/lamp_seller/logo.png": "85c0723f9ce9f4edd595d07434ca0999",
"assets/lib/assets/images/payatam/1.png": "697658003698830986e432a0e46d5c84",
"assets/lib/assets/images/payatam/2.png": "1257a571a2a2d799464a4303f98c42a0",
"assets/lib/assets/images/payatam/3.png": "614c0d5c3c2d2fb0107c7db05791329b",
"assets/lib/assets/images/payatam/4.png": "d7000dfa5ad1c86f505f28e7d40b7d11",
"assets/lib/assets/images/payatam/5.png": "e267e60e57c3eb52d6c63afc360dfe85",
"assets/lib/assets/images/payatam/6.png": "135a2ecb21699504b7fbf1cc544eab66",
"assets/lib/assets/images/payatam/7.png": "f25444809fcbedc98a1ba89d239c7962",
"assets/lib/assets/images/payatam/8.png": "63c622965f928003374740fc98006cc0",
"assets/lib/assets/images/payatam/9.png": "c02aadd353b81dd9c5c75a988a0afd9c",
"assets/lib/assets/images/payatam/logo.png": "594f3ff0a38fae42c32a80617bae05ed",
"assets/lib/assets/images/therapy/1.jpg": "8c085e150431f62f5d61fab42c67bbf7",
"assets/lib/assets/images/therapy/2.jpg": "7e62c522e408737d6c3ec240cc6e8a8f",
"assets/lib/assets/images/therapy/3.jpg": "4441c4bc814230377ea9a6981d36b62a",
"assets/lib/assets/images/therapy/4.jpg": "1dc84886232119f2987716ce6a820347",
"assets/lib/assets/images/therapy/5.jpg": "e25639c1e6b8a8557b42a3fc2df748ee",
"assets/lib/assets/images/therapy/6.jpg": "3b3a7149d401a9cf66cc5defe1343e2b",
"assets/lib/assets/images/therapy/logo.png": "5c19936080960f40752cfb75b0a9bc86",
"assets/lib/assets/images/timeset/1.jpg": "873f430436c0549f35057468995e0a87",
"assets/lib/assets/images/timeset/2.jpg": "4e997892aef9931f5990f70ddcdd9017",
"assets/lib/assets/images/timeset/3.jpg": "82b1728195567670b945d7c72fe0137f",
"assets/lib/assets/images/timeset/4.jpg": "3950e1bff205de224d6a30c51c84afa6",
"assets/lib/assets/images/timeset/5.jpg": "0a7d1f04e0470cf8165c52cae3494b89",
"assets/lib/assets/images/timeset/logo.png": "72f61caff9d80b65c3da32ef78c5c2e5",
"assets/NOTICES": "ae7ed21faa0cf2fb79ba02ce52360ff2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "85f81bf065aa2b43ff4cc631217f83dd",
"/": "85f81bf065aa2b43ff4cc631217f83dd",
"main.dart.js": "adf464a71e05e76c03b3aed1b843b260",
"manifest.json": "0debb0bff975cbd20944a10d32763e5c",
"version.json": "25bec006ec3bd897d7c772417da2d8ca"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
