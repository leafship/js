/**
 * 图片加载结果
 */
interface ImageLoadResult {
  success: string[];
  failed: string[];
  successCount: number;
  failedCount: number;
  total: number;
  isAllSuccess: boolean;
}


interface ImageLoadDetail {
  url: string;
  success: boolean;
}

interface LayoutLike {
  loadImgs(urls: string[]): Promise<unknown>;
}

const LOAD_TIMEOUT = 4000;
const CACHE_MAX_SIZE = 100;

const failedImageCache: string[] = [];

function addToFailedCache(url: string) {
  const index = failedImageCache.indexOf(url);
  if (index !== -1) {
    failedImageCache.splice(index, 1);
  }
  failedImageCache.push(url);
  if (failedImageCache.length > CACHE_MAX_SIZE) {
    failedImageCache.shift();
  }
}

function loadWithTimeout(url: string, loadPromise: Promise<unknown>, timeout: number): Promise<ImageLoadDetail> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve({ url, success: false });  // 超时返回失败，但不加入缓存
    }, timeout);
    
    loadPromise
      .then(() => {
        clearTimeout(timer);
        resolve({ url, success: true });
      })
      .catch(() => {
        clearTimeout(timer);
        addToFailedCache(url);  // 只有真正加载失败才加入缓存
        resolve({ url, success: false });
      });
  });
}

async function preloadImages(layout: LayoutLike, imageUrls: string[]): Promise<ImageLoadResult> {
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

  const urlsToLoad: string[] = [];
  const cachedFailed: string[] = [];
  
  imageUrls.forEach(url => {
    if (failedImageCache.includes(url)) {
      cachedFailed.push(url);
    } else {
      urlsToLoad.push(url);
    }
  });

  let results: ImageLoadDetail[] = [];
  
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
export type { ImageLoadResult, ImageLoadDetail, LayoutLike };