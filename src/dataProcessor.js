import { preloadImages } from './ImgsLoader';

const DEFAULT_AVATAR = './pic/avatar_default_icon.png';

function collectAvatarUrls(dataObj) {
  const urls = [];
  const items = [
    dataObj.myRankItem,
    dataObj.top1RankItem,
    dataObj.top2RankItem,
    dataObj.top3RankItem,
    ...(dataObj.listRankItem || [])
  ];
  items.forEach(item => {
    if (item && item.avatarUrl) {
      urls.push(item.avatarUrl);
    }
  });
  return urls;
}

function replaceFailedAvatars(dataObj, failedUrls) {
  const failedSet = new Set(failedUrls);
  const replaceData = JSON.parse(JSON.stringify(dataObj));
  
  const items = [
    replaceData.myRankItem,
    replaceData.top1RankItem,
    replaceData.top2RankItem,
    replaceData.top3RankItem,
    ...(replaceData.listRankItem || [])
  ];
  
  items.forEach(item => {
    if (item && item.avatarUrl && failedSet.has(item.avatarUrl)) {
      item.avatarUrl = DEFAULT_AVATAR;
    }
  });
  
  return replaceData;
}

export async function processDataWithImageCheck(layout, dataObj) {
  const avatarUrls = collectAvatarUrls(dataObj);
  const loadResult = await preloadImages(layout, avatarUrls);
  return replaceFailedAvatars(dataObj, loadResult.failed);
}