const VALID_AVATAR = 'https://wx.qlogo.cn/mmopen/vi_32/yctGCWkz1jKPjEeR8ic5RXXxn0sExT4JrPjIpPvscuS1FBZssIEp2Ry5URlT4eY7mM0akiaRHgdntryUDOicxbVh7Fo2gLVQCNzVchuwSZY9LI/132';
const INVALID_AVATAR = 'https://error/';
const EMPTY_AVATAR = '';

const case1 = {
  isAuthDeny: true,
  rankType: 'MultiEliRank',
  myRankItem: {
    openId: 'self_001',
    rank: 5,
    nickname: '我自己',
    avatarUrl: VALID_AVATAR,
    stage: 3,
    tbcnt: 65,
    totalCombo: 130,
    maxCombo: 42,
    elim5: 5,
    elim4: 5,
    elim3: 8,
    elim2: 10
  },
  top1RankItem: {
    openId: 'user_001',
    rank: 1,
    nickname: '巅峰战神',
    avatarUrl: VALID_AVATAR,
    stage: 5,
    tbcnt: 128,
    totalCombo: 256,
    maxCombo: 89,
    elim5: 12,
    elim4: 8,
    elim3: 15,
    elim2: 20
  },
  top2RankItem: {
    openId: 'user_002',
    rank: 2,
    nickname: '火神降临',
    avatarUrl: VALID_AVATAR,
    stage: 5,
    tbcnt: 115,
    totalCombo: 230,
    maxCombo: 78,
    elim5: 10,
    elim4: 9,
    elim3: 14,
    elim2: 18
  },
  top3RankItem: null,
  listRankItem: [
    {
      openId: 'user_004',
      rank: 4,
      nickname: '雷霆一击',
      avatarUrl: VALID_AVATAR,
      stage: 4,
      tbcnt: 87,
      totalCombo: 174,
      maxCombo: 58,
      elim5: 7,
      elim4: 6,
      elim3: 10,
      elim2: 14
    }
  ]
};

const case2 = {
  isAuthDeny: false,
  rankType: 'SingleEliRank',
  myRankItem: null,
  top1RankItem: {
    openId: 'user_001',
    rank: 1,
    nickname: '第一名',
    avatarUrl: INVALID_AVATAR,
    stage: 5,
    tbcnt: 100,
    totalCombo: 200,
    maxCombo: 80,
    elim5: 10,
    elim4: 10,
    elim3: 10,
    elim2: 10
  },
  top2RankItem: {
    openId: 'user_002',
    rank: 2,
    nickname: '第二名',
    avatarUrl: EMPTY_AVATAR,
    stage: 4,
    tbcnt: 90,
    totalCombo: 180,
    maxCombo: 70,
    elim5: 8,
    elim4: 8,
    elim3: 12,
    elim2: 12
  },
  top3RankItem: {
    openId: 'user_003',
    rank: 3,
    nickname: '第三名',
    avatarUrl: VALID_AVATAR,
    stage: 3,
    tbcnt: 80,
    totalCombo: 160,
    maxCombo: 60,
    elim5: 6,
    elim4: 6,
    elim3: 14,
    elim2: 14
  },
  listRankItem: [
    {
      openId: 'user_004',
      rank: 4,
      nickname: '第四名',
      avatarUrl: INVALID_AVATAR,
      stage: 3,
      tbcnt: 70,
      totalCombo: 140,
      maxCombo: 50,
      elim5: 5,
      elim4: 5,
      elim3: 15,
      elim2: 15
    },
    {
      openId: 'user_005',
      rank: 5,
      nickname: '第五名',
      avatarUrl: VALID_AVATAR,
      stage: 2,
      tbcnt: 60,
      totalCombo: 120,
      maxCombo: 40,
      elim5: 4,
      elim4: 4,
      elim3: 16,
      elim2: 16
    }
  ]
};

const case3 = {
  isAuthDeny: true,
  rankType: 'MultiEliRank',
  myRankItem: {
    openId: 'self_001',
    rank: 1,
    nickname: '我自己',
    avatarUrl: VALID_AVATAR,
    stage: 5,
    tbcnt: 150,
    totalCombo: 300,
    maxCombo: 100,
    elim5: 15,
    elim4: 15,
    elim3: 15,
    elim2: 15
  },
  top1RankItem: null,
  top2RankItem: null,
  top3RankItem: null,
  listRankItem: []
};

const case4 = {
  isAuthDeny: false,
  rankType: 'SingleEliRank',
  myRankItem: null,
  top1RankItem: {
    openId: 'user_001',
    rank: 1,
    nickname: '玩家A',
    avatarUrl: 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9474353441508872424%22%7D&n_type=-1&p_from=-1',
    stage: 5,
    tbcnt: 200,
    totalCombo: 400,
    maxCombo: 150,
    elim5: 20,
    elim4: 20,
    elim3: 20,
    elim2: 20
  },
  top2RankItem: {
    openId: 'user_002',
    rank: 2,
    nickname: '玩家B',
    avatarUrl: INVALID_AVATAR,
    stage: 4,
    tbcnt: 180,
    totalCombo: 360,
    maxCombo: 120,
    elim5: 18,
    elim4: 18,
    elim3: 18,
    elim2: 18
  },
  top3RankItem: {
    openId: 'user_003',
    rank: 3,
    nickname: '玩家C',
    avatarUrl: EMPTY_AVATAR,
    stage: 3,
    tbcnt: 160,
    totalCombo: 320,
    maxCombo: 100,
    elim5: 16,
    elim4: 16,
    elim3: 16,
    elim2: 16
  },
  listRankItem: [
    {
      openId: 'user_004',
      rank: 4,
      nickname: '玩家D',
      avatarUrl: VALID_AVATAR,
      stage: 5,
      tbcnt: 140,
      totalCombo: 280,
      maxCombo: 90,
      elim5: 14,
      elim4: 14,
      elim3: 14,
      elim2: 14
    },
    {
      openId: 'user_005',
      rank: 5,
      nickname: '玩家E',
      avatarUrl: INVALID_AVATAR,
      stage: 4,
      tbcnt: 120,
      totalCombo: 240,
      maxCombo: 80,
      elim5: 12,
      elim4: 12,
      elim3: 12,
      elim2: 12
    },
    {
      openId: 'user_006',
      rank: 6,
      nickname: '玩家F',
      avatarUrl: EMPTY_AVATAR,
      stage: 3,
      tbcnt: 100,
      totalCombo: 200,
      maxCombo: 70,
      elim5: 10,
      elim4: 10,
      elim3: 10,
      elim2: 10
    },
    {
      openId: 'user_007',
      rank: 7,
      nickname: '玩家G',
      avatarUrl: VALID_AVATAR,
      stage: 2,
      tbcnt: 80,
      totalCombo: 160,
      maxCombo: 60,
      elim5: 8,
      elim4: 8,
      elim3: 8,
      elim2: 8
    }
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