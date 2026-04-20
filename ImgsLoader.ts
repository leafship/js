import Layout from "https://cdn.skypack.dev/minigame-canvas-engine";


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


/**
 * 批量预加载图片，可追踪每张图片的加载状态
 * @param imageUrls - 图片URL数组
 * @returns Promise<ImageLoadResult> 返回包含成功和失败列表的结果对象
 * 
 * @example
 * ```typescript
 * const images = ['img1.png', 'img2.png', 'img3.png'];
 * const result = await preloadImages(images);
 * 
 * if (result.isAllSuccess) {
 *   console.log('所有图片加载成功');
 *   Layout.layout(ctx);
 * } else {
 *   console.warn('部分图片加载失败:', result.failed);
 *   // 仍然可以渲染
 *   Layout.layout(ctx);
 * }
 * ```
 */
async function preloadImages(imageUrls: string[]): Promise<ImageLoadResult> {
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
    Layout.loadImgs([url])
      .then((): ImageLoadDetail => ({ url, success: true }))
      .catch((): ImageLoadDetail => ({ url, success: false }))
  );

  const results = await Promise.all(promises);
  
  const successList = results.filter(r => r.success).map(r => r.url);
  const failedList = results.filter(r => !r.success).map(r => r.url);

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
export type { ImageLoadResult, ImageLoadDetail };
