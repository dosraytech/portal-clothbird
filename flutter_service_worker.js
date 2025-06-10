'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a13204f5a04bde598180013fc14b3cc6",
"version.json": "c3ca3f56d28002c83ec125fce3a15835",
"index.html": "bd2cfe540ae92b635591c9945eb5ea32",
"/": "bd2cfe540ae92b635591c9945eb5ea32",
"main.dart.js": "33bd8bdba073325181e6ba363e40c64f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.wasm.map": "a3a09bea4130066efe25d09ed5c2efaa",
"favicon.png": "baf632b51fb7c2a0f3630243ed039774",
"main.dart.mjs": "22c3d25cc56f99ee1d65621ad4e9d386",
"icons/Icon-192.png": "a22778b10062c15002531d6220f1ecee",
"icons/Icon-maskable-192.png": "a22778b10062c15002531d6220f1ecee",
"icons/Icon-maskable-512.png": "573c42b60bd4cf18829849115b9baa6b",
"icons/Icon-512.png": "573c42b60bd4cf18829849115b9baa6b",
"manifest.json": "dec2f85795a0db923ac548b1d9b417fd",
"main.dart.wasm": "1906169faec91bf97788050a2490decc",
"assets/AssetManifest.json": "c5f5a2e3b4d0bcca7a35bf476ccd9399",
"assets/NOTICES": "6c46212e0da42fc4243368e863108335",
"assets/FontManifest.json": "c245333b161ce5123c490f55241988d7",
"assets/AssetManifest.bin.json": "8137a4800ecafd0b206edcb1b0ad422e",
"assets/packages/esc_pos_utils_plus/resources/capabilities.json": "cfcc98d389d1ee4358f773efe8a9cdac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "99f0fcc13283bde6e94c87dca189ac5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-thin-100.ttf": "59a77ebab2351ab477852ae9e82b4dac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "63f4b3d713fe0fded587ba99c94cae07",
"assets/packages/font_awesome_flutter/lib/fonts/fa-light-300.ttf": "429215340cf935988859b79c73956740",
"assets/packages/font_awesome_flutter/lib/fonts/fa-duotone-900.ttf": "0f6e1cda5d98807d8677ee997c098b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2bb8400a2fe86e5943adeb7fc176755c",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/win_ble/assets/BLEServer.exe": "28aa0e2566083c860f029ff4bc32c4ce",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8b8514618f8a87cf655b41e8fd326f7e",
"assets/fonts/MaterialIcons-Regular.otf": "640bf75e1f5982fb738ef7600988d21c",
"assets/assets/svg/otp.svg": "cc1c29c94b01984987f67a9e8f26bd8c",
"assets/assets/svg/register.svg": "dd031b9110dcbb9cfb166d4c98ca751e",
"assets/assets/svg/login.svg": "8f6da028aa6268861fe37e791a85a21c",
"assets/assets/svg/maintainance.svg": "cef68c6d92589449a035e9698b68d320",
"assets/assets/svg/password.svg": "8395fb32039bc22bc6b15ffbdb524dc4",
"assets/assets/svg/history.svg": "75a6f66de364e673dd7ac548053b80ec",
"assets/assets/launcher/ic_logo_rectangle.png": "834b001a56db3616686e2b2f298fbe74",
"assets/assets/launcher/ic_logo_round.png": "cde4ab9a7a722b20a7c31164661552ba",
"assets/assets/launcher/ic_black_white.png": "f24827ae1c183ec6e25b9c9ff89b7a19",
"assets/assets/launcher/ic_background.png": "5dfd9843af7c477fca2c1ba836bfebad",
"assets/assets/launcher/ic_logo_radius.png": "24e719096477cfe453410328f804aa2b",
"assets/assets/launcher/ic_foreground.png": "9a5c9af186da79b1ad1842e6e30b67f3",
"assets/assets/splash/color.png": "52eae9adb017a09b7c15c90e1b6adbf6",
"assets/assets/images/acleda.png": "69b670ff179418c3226c4faaf9fcb011",
"assets/assets/images/cod.png": "9aa7b93730ca8f45b8bbd5c15cb77594",
"assets/assets/images/status/status04.png": "cae3e070b1103c9877aa54ed26573e57",
"assets/assets/images/status/status01.png": "aee1f4e93039b6a7768648f36bf2aa03",
"assets/assets/images/status/status03.png": "cb20b853f13a77c48f6fde18bf1912da",
"assets/assets/images/status/status02.png": "63eeab7757f63553a8f2df2549955026",
"assets/assets/images/aba.jpeg": "a0c69df3c4266d3e7880aa4ca4cef7aa",
"assets/assets/images/placeholder.png": "dcf15c43968e2a1c81fff2c30ca951dd",
"assets/assets/images/logo.png": "cb59443d6967a5c1312138906b4f7072",
"assets/assets/images/profile.jpg": "bc23fb0699920e699baeb3298eb6eb9c",
"assets/assets/images/fav.png": "125e421fe77d025045033a935ef2db62",
"assets/assets/fonts/km/KantumruyPro-Regular.ttf": "307a9d5d3eef890236589b986ffd9cf1",
"assets/assets/fonts/km/KantumruyPro-Thin.ttf": "c70b60b036aeacc715b521d25ea0f076",
"assets/assets/fonts/km/KantumruyPro-Bold.ttf": "a00945eaa49d658793e32a0fc5e99fd9",
"assets/assets/fonts/km/KantumruyPro-Medium.ttf": "717768b0de691bb654b8fd869ea70658",
"assets/assets/fonts/km/KantumruyPro-ExtraLight.ttf": "45516d01e18e9f416d9e620fe7d8c9e8",
"assets/assets/fonts/km/KantumruyPro-SemiBold.ttf": "1c5de94a9951d07fa2585ce34b1db159",
"assets/assets/fonts/km/KantumruyPro-Light.ttf": "32b89deca03ca45cb3dc293452c83033",
"assets/assets/fonts/en/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/en/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/en/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/en/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/en/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/en/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/en/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
