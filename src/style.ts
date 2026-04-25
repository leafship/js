const style = {
  container: {
    width: 720,
    height: 1030,
    backgroundColor: '#000341',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  },
  
  scrollview: {
    width: 720,
    height: 920,
    backgroundColor: '#000341',
    alignItems: 'center'
  },
  
  clickItem: {
    
  },
  
  top3Section: {
    width: 720,
    height: 360,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  refreshHintContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    left: 20,
    top: 20,
  },
  refreshHintIcon: {
    width: 25,
    height: 25,
    marginRight: 5
  },
  refreshHint: {
    fontSize: 20,
    color: '#E3E3FF99'
  },
  topXContainer: {
    width: 200,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  top2NobodyAvatar: {
    width: 90,
    height: 90,
    marginBottom: 20,
    borderRadius: 45,
    opacity: 1,
    bottom: -25
  },
  top2NobodyName: {
    width: 180,
    marginLeft: 10,
    marginBottom: 0,
    fontSize: 23,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    verticalAlign: 'middle',
    textAlign: 'center',
    color: '#FF7351',
    opacity: 1,
    bottom: -15
  },
  top2Avatar: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  top2AvatarBg: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#000341',
  },
  top2AvatarBorder: {
    width: 106,
    height: 106,
    backgroundColor: '#FF7351',
    marginBottom: 20,
    borderRadius: 53,
    opacity: 1,
    bottom: -25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  top2Name: {
    width: 180,
    marginLeft: 10,
    marginBottom: 0,
    fontSize: 23,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    verticalAlign: 'middle',
    textAlign: 'center',
    color: '#FF7351',
    opacity: 1,
    bottom: -15
  },
  top2Podium: {
    width: 218,
    height: 120,
    bottom: -13
  },
  top1NobodyAvatar: {
    width: 120,
    height: 120,
    marginBottom: 0,
    borderRadius: 60,
    opacity: 1,
    bottom: -40
  },
  top1NobodyName: {
    width: 180,
    marginLeft: 10,
    marginBottom: 0,
    fontSize: 23,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    verticalAlign: 'middle',
    textAlign: 'center',
    color: '#FFD709',
    opacity: 1,
    bottom: -50
  },
  top1Gold: {
    width: 45.6,
    height: 53.6,
    marginBottom: 0,
    opacity: 1,
    bottom: -45,
    right: -25
  },
  top1Avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  top1AvatarBg: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#000341',
  },
  top1AvatarBorder: {
    width: 136,
    height: 136,
    backgroundColor: '#FFD709',
    marginBottom: 0,
    borderRadius: 68,
    bottom: -40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  top1Name: {
    width: 180,
    marginLeft: 10,
    marginBottom: 0,
    fontSize: 23,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    verticalAlign: 'middle',
    textAlign: 'center',
    color: '#FFD709',
    opacity: 1,
    bottom: -50
  },
  top1Podium: {
    width: 257,
    height: 170,
    bottom: -30
  },
  top3NobodyAvatar: {
    width: 90,
    height: 90,
    marginBottom: 0,
    borderRadius: 45,
    opacity: 1,
    bottom: 0
  },
  top3NobodyName: {
    width: 180,
    marginLeft: 10,
    marginBottom: 0,
    fontSize: 23,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    verticalAlign: 'middle',
    textAlign: 'center',
    color: '#6AD6FF',
    opacity: 1,
    bottom: -10
  },
  top3Avatar: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  top3AvatarBg: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#000341',
  },
  top3AvatarBorder: {
    width: 106,
    height: 106,
    backgroundColor: '#6AD6FF',
    marginBottom: 0,
    borderRadius: 53,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  top3Name: {
    width: 180,
    marginLeft: 10,
    marginBottom: 0,
    fontSize: 23,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    verticalAlign: 'middle',
    textAlign: 'center',
    color: '#00F2FF',
    opacity: 1,
    bottom: -10
  },
  top3Podium: {
    width: 213,
    height: 100,
    bottom: -10,
    left: -3
  },
  
  listHeader: {
    width: 690,
    height: 55,
    backgroundColor: '#000450',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listHeaderRank: {
    width: 70,
    fontSize: 23,
    textAlign: 'center',
    color: '#E3E3FF99',
  },
  listHeaderPlayer: {
    width: 280,
    fontSize: 23,
    textAlign: 'center',
    color: '#E3E3FF99',
  },
  listHeaderMe: {
    width: 85,
    fontSize: 23,
    textAlign: 'right',
    color: '#E3E3FF99',
  },
  listHeaderBlock: {
    width: 330,
    fontSize: 23,
    textAlign: 'right',
    color: '#E3E3FF99',
  },
  listHeaderCombo: {
    width: 330,
    fontSize: 23,
    textAlign: 'right',
    color: '#E3E3FF99',
  },
  
  
  item: {
    width: 690,
    height: 76,
    marginTop: 2,
    marginBottom: 2,
    backgroundColor: '#000873',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  item0BgColor: {
    backgroundColor: '#000873'
  },
  item1BgColor: {
    backgroundColor: '#000450'
  },
  rank: {
    width: 70,
    fontSize: 30,
    color: '#E3E3FF',
    textAlign: 'right',
    verticalAlign: 'middle',
    fontWeight: 'bold'
  },
  avatar: {
    width: 60,
    height: 60,
    marginLeft: 30
  },
  name: {
    width: 180,
    marginLeft: 10,
    fontSize: 23,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    verticalAlign: 'middle',
    color: '#6AD6FF'
  },
  me: {
    width: 85,
    fontSize: 26,
    color: '#E3E3FFAF',
    textAlign: 'right'
  },
  itemBlockAndCombo: {
    width: 330,
    fontSize: 26,
    color: '#E3E3FFAF',
    textAlign: 'right'
  },
  
  noMoreListItem: {
    width: 690,
    color: '#E3E3FF99',
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  
  authDenyText1: {
    width: 690,
    color: '#FFD709',
    fontSize: 25,
    marginTop: 30,
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  authDenyText2: {
    width: 690,
    color: '#8FFE7F',
    fontSize: 22,
    marginTop: 30,
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  
  
  myRank: {
    flexDirection: 'row',
    width: 700,
    height: 110,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: '#E3E3FF64',
    backgroundColor: '#000E96'
  },
  
  myRankNumber: {
    flexDirection: 'column',
    width: 100,
    height: 110,
    marginLeft: 40,
    alignItems: 'center'
  },
  myRankNumberText: {
    width: 100,
    color: '#9BA4FF',
    fontSize: 20,
    marginTop: 20,
    marginBotton: 0,
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  myRankNumberValue: {
    width: 100,
    color: '#8FFE7F',
    fontSize: 40,
    marginTop: 5,
    textAlign: 'center',
    verticalAlign: 'middle',
    fontWeight: 'bold'
  },
  
  myRankAvatar: {
    width: 200,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  myRankAvatarIconBorder: {
    width: 114,
    height: 114,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center'
  },
  myRankAvatarIcon: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  myRankAvatarBg: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000E96',
  },
  
  myRankME: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 80,
    height: 110
  },
  myRankMEText: {
    width: 80,
    color: '#E3E3FF99',
    fontSize: 20,
    marginTop: 20,
    marginBotton: 0,
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  myRankMEValue: {
    width: 80,
    color: '#E3E3FF',
    fontSize: 30,
    marginTop: 10,
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  myRankCombo: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: 320,
    height: 110
  },
  myRankBlock: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: 320,
    height: 110
  },
  myRankTitleText: {
    width: 200,
    color: '#E3E3FF99',
    fontSize: 20,
    marginTop: 20,
    marginBotton: 0,
    textAlign: 'right',
    verticalAlign: 'middle'
  },
  myRankValue: {
    width: 200,
    color: '#E3E3FF',
    fontSize: 30,
    marginTop: 10,
    textAlign: 'right',
    verticalAlign: 'middle'
  }
  
};

export { style };