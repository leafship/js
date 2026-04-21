const VALID_AVATAR = 'https://wx.qlogo.cn/mmopen/vi_32/yctGCWkz1jKPjEeR8ic5RXXxn0sExT4JrPjIpPvscuS1FBZssIEp2Ry5URlT4eY7mM0akiaRHgdntryUDOicxbVh7Fo2gLVQCNzVchuwSZY9LI/132';
const INVALID_AVATAR = 'https://error/';
const EMPTY_AVATAR = '';
const NULL_AVATAR = null;

function createRankItem(openId: string, rank: number, nickname: string, avatarUrl: string | null) {
  return {
    openId,
    rank,
    nickname,
    avatarUrl,
    stage: 3,
    tbcnt: 65,
    totalCombo: 130,
    maxCombo: 42,
    elim5: 5,
    elim4: 5,
    elim3: 8,
    elim2: 10
  };
}

const case1 = {
  isAuthDeny: true,
  rankType: 'MultiEliRank',
  myRankItem: createRankItem('self_001', 5, '我自己', VALID_AVATAR),
  top1RankItem: createRankItem('user_001', 1, '巅峰战神', VALID_AVATAR),
  top2RankItem: createRankItem('user_002', 2, '火神降临', VALID_AVATAR),
  top3RankItem: createRankItem('user_003', 3, '第三名', VALID_AVATAR),
  listRankItem: [
    createRankItem('user_004', 4, '雷霆一击', VALID_AVATAR),
    createRankItem('user_005', 5, '第五名', VALID_AVATAR)
  ]
};

const case2 = {
  isAuthDeny: false,
  rankType: 'BlockRank',
  myRankItem: createRankItem('self_001', 3, '我自己', VALID_AVATAR),
  top1RankItem: createRankItem('user_001', 1, '第一名', INVALID_AVATAR),
  top2RankItem: createRankItem('user_002', 2, '第二名', EMPTY_AVATAR),
  top3RankItem: createRankItem('user_003', 3, '第三名', NULL_AVATAR),
  listRankItem: [
    createRankItem('user_004', 4, '第四名', INVALID_AVATAR),
    createRankItem('user_005', 5, '第五名', VALID_AVATAR),
    createRankItem('user_006', 6, '第六名', EMPTY_AVATAR)
  ]
};

const case3 = {
  isAuthDeny: true,
  rankType: 'MultiEliRank',
  myRankItem: createRankItem('self_001', 1, '我自己', VALID_AVATAR),
  top1RankItem: null,
  top2RankItem: null,
  top3RankItem: null,
  listRankItem: []
};

const case4 = {
  isAuthDeny: false,
  rankType: 'ComboRank',
  myRankItem: createRankItem('self_001', 8, '我自己', INVALID_AVATAR),
  top1RankItem: createRankItem('user_001', 1, '玩家A', 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9474353441508872424%22%7D&n_type=-1&p_from=-1'),
  top2RankItem: createRankItem('user_002', 2, '玩家B', INVALID_AVATAR),
  top3RankItem: createRankItem('user_003', 3, '玩家C', EMPTY_AVATAR),
  listRankItem: [
    createRankItem('user_004', 4, '玩家D', VALID_AVATAR),
    createRankItem('user_005', 5, '玩家E', INVALID_AVATAR),
    createRankItem('user_006', 6, '玩家F', NULL_AVATAR),
    createRankItem('user_007', 7, '玩家G', VALID_AVATAR)
  ]
};

const cases = [case1, case2, case3, case4];
let currentIndex = 0;

export function getNextData() {
  currentIndex = (currentIndex + 1) % cases.length;
  return cases[currentIndex];
}

export function getCurrentData() {
  return cases[currentIndex];
}