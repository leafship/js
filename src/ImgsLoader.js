const LOAD_TIMEOUT = 4000;
const CACHE_MAX_SIZE = 100;

const failedImageCache = [];

function addToFailedCache(url) {
  const index = failedImageCache.indexOf(url);
  if (index !== -1) {
    failedImageCache.splice(index, 1);
  }
  failedImageCache.push(url);
  if (failedImageCache.length > CACHE_MAX_SIZE) {
    failedImageCache.shift();
  }
}

function loadWithTimeout(url, loadPromise, timeout) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve({ url, success: false });
    }, timeout);
    
    loadPromise
      .then(() => {
        clearTimeout(timer);
        resolve({ url, success: true });
      })
      .catch(() => {
        clearTimeout(timer);
        addToFailedCache(url);
        resolve({ url, success: false });
      });
  });
}

async function preloadImages(layout, imageUrls) {
  if (!imageUrls || imageUrls.length === 0) {
    return {
      success: [],
      failed: [],
      successCount: 0,
      failedCount: 0,
      total: 0,
      isAllSuccess: true
    };
  }

  const urlsToLoad = [];
  const cachedFailed = [];
  
  imageUrls.forEach(url => {
    if (failedImageCache.indexOf(url) !== -1) {
      cachedFailed.push(url);
    } else {
      urlsToLoad.push(url);
    }
  });

  let results = [];
  
  if (urlsToLoad.length > 0) {
    const promises = urlsToLoad.map(url => 
      loadWithTimeout(url, layout.loadImgs([url]), LOAD_TIMEOUT)
    );

    results = await Promise.all(promises);
  }

  const successList = results.filter(r => r.success).map(r => r.url);
  const failedList = [...cachedFailed, ...results.filter(r => !r.success).map(r => r.url)];

  return {
    success: successList,
    failed: failedList,
    successCount: successList.length,
    failedCount: failedList.length,
    total: imageUrls.length,
    isAllSuccess: failedList.length === 0
  };
}

export { preloadImages };