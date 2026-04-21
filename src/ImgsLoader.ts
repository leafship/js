
/**
 * 图片加载结果
 */
interface ImageLoadResult {
  /** 加载成功的图片URL列表 */
  success: string[];
  /** 加载失败的图片URL列表 */
  failed: string[];
  /** 成功加载的数量 */
  successCount: number;
  /** 失败的数量 */
  failedCount: number;
  /** 总数 */
  total: number;
  /** 是否全部加载成功 */
  isAllSuccess: boolean;
}


/**
 * 单个图片的加载状态
 */
interface ImageLoadDetail {
  url: string;
  success: boolean;
}

interface LayoutLike {
  loadImgs(urls: string[]): Promise<unknown>;
}


/**
 * 批量预加载图片，可追踪每张图片的加载状态
 * @param layout - 提供 loadImgs 方法的 Layout 对象
 * @param imageUrls - 图片URL数组
 * @returns Promise<ImageLoadResult> 返回包含成功和失败列表的结果对象
 * 
 * @example
 * ```typescript
 * import Layout from 'minigame-canvas-engine';
 * const images = ['img1.png', 'img2.png', 'img3.png'];
 * const result = await preloadImages(Layout, images);
 * 
 * if (result.isAllSuccess) {
 *   console.log('所有图片加载成功');
 * } else {
 *   console.warn('部分图片加载失败:', result.failed);
 * }
 * ```
 */
const LOAD_TIMEOUT = 4000;

function loadWithTimeout(loadPromise: Promise<unknown>, timeout: number): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Load timeout'));
    }, timeout);
    
    loadPromise
      .then(result => {
        clearTimeout(timer);
        resolve(result);
      })
      .catch(err => {
        clearTimeout(timer);
        reject(err);
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

  const promises = imageUrls.map(url => 
    loadWithTimeout(layout.loadImgs([url]), LOAD_TIMEOUT)
      .then((): ImageLoadDetail => ({ url, success: true }))
      .catch((): ImageLoadDetail => ({ url, success: false }))
  );

  const results = await Promise.all(promises);
  
  const successList = results.filter((r: ImageLoadDetail) => r.success).map((r: ImageLoadDetail) => r.url);
  const failedList = results.filter((r: ImageLoadDetail) => !r.success).map((r: ImageLoadDetail) => r.url);

  return {
    success: successList,
    failed: failedList,
    successCount: successList.length,
    failedCount: failedList.length,
    total: imageUrls.length,
    isAllSuccess: failedList.length === 0
  };
}

// 导出类型和函数
export { preloadImages };
export type { ImageLoadResult, ImageLoadDetail, LayoutLike };
