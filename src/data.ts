const data = {
  isAuthDeny: true,
  rankType: 'MultiEliRank',
  // 当前用户自己的排名数据
  myRankItem: {
    openId: 'self_001',
    rank: 5,
    nickname: '我自己',
    avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/yctGCWkz1jKPjEeR8ic5RXXxn0sExT4JrPjIpPvscuS1FBZssIEp2Ry5URlT4eY7mM0akiaRHgdntryUDOicxbVh7Fo2gLVQCNzVchuwSZY9LI/132',
    stage: 3,
    tbcnt: 65,
    totalCombo: 130,
    maxCombo: 42,
    elim5: 5,
    elim4: 5,
    elim3: 8,
    elim2: 10
  },
  // 第1名数据
  top1RankItem: {
    openId: 'user_001',
    rank: 1,
    nickname: '巅峰战神',
    avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/yctGCWkz1jKPjEeR8ic5RXXxn0sExT4JrPjIpPvscuS1FBZssIEp2Ry5URlT4eY7mM0akiaRHgdntryUDOicxbVh7Fo2gLVQCNzVchuwSZY9LI/132',
    stage: 5,
    tbcnt: 128,
    totalCombo: 256,
    maxCombo: 89,
    elim5: 12,
    elim4: 8,
    elim3: 15,
    elim2: 20
  },
  // 第2名数据（无头像）
  top2RankItem: {
    openId: 'user_002',
    rank: 2,
    nickname: '火神降临',
    avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/yctGCWkz1jKPjEeR8ic5RXXxn0sExT4JrPjIpPvscuS1FBZssIEp2Ry5URlT4eY7mM0akiaRHgdntryUDOicxbVh7Fo2gLVQCNzVchuwSZY9LI/132',
    stage: 5,
    tbcnt: 115,
    totalCombo: 230,
    maxCombo: 78,
    elim5: 10,
    elim4: 9,
    elim3: 14,
    elim2: 18
  },
  // 第3名数据
  top3RankItem: null,
  // 排行榜列表（只需要2条数据，从第4名开始）
  listRankItem: [
    {
      openId: 'user_004',
      rank: 4,
      nickname: '雷霆一击',
      avatarUrl: 'https://error/', //无效头像示例
      stage: 4,
      tbcnt: 87,
      totalCombo: 174,
      maxCombo: 58,
      elim5: 7,
      elim4: 6,
      elim3: 10,
      elim2: 14
    },
    {
      openId: 'user_005',
      rank: 5,
      nickname: '雷霆5击',
      avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/yctGCWkz1jKPjEeR8ic5RXXxn0sExT4JrPjIpPvscuS1FBZssIEp2Ry5URlT4eY7mM0akiaRHgdntryUDOicxbVh7Fo2gLVQCNzVchuwSZY9LI/132',
      stage: 4,
      tbcnt: 87,
      totalCombo: 174,
      maxCombo: 58,
      elim5: 7,
      elim4: 6,
      elim3: 10,
      elim2: 14
    },
    {
      openId: 'user_006',  
      rank: 6,
      nickname: '不败神话',
      avatarUrl: '',  // 无头像示例
      stage: 3,
      tbcnt: 65,
      totalCombo: 130,
      maxCombo: 42,
      elim5: 5,
      elim4: 5,
      elim3: 8,
      elim2: 10
    }
  ]
};

export { data };