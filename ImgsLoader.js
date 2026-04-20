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
    const promises = imageUrls.map(url => layout.loadImgs([url])
        .then(() => ({ url, success: true }))
        .catch(() => ({ url, success: false })));
    const results = await Promise.all(promises);
    const successList = results.filter((r) => r.success).map((r) => r.url);
    const failedList = results.filter((r) => !r.success).map((r) => r.url);
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
