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
declare function preloadImages(layout: LayoutLike, imageUrls: string[]): Promise<ImageLoadResult>;
export { preloadImages };
export type { ImageLoadResult, ImageLoadDetail, LayoutLike };
