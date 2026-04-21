const modalStyle = {
  modal: {
    width: 720,
    height: 1030,
    borderRadius: 0,
    position: 'absolute',
    backgroundColor: '#000000C7',
    top: 0,
    left: 0
  },
  modalContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 600,
    height: 1000,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FFFFFF63',
    backgroundColor: '#05071D',
    top: 15,
    left: 60
  },
  avatarSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 600,
    height: 170,
    borderRadius: 0
  },
  modalAvatarBorder: {
    marginLeft: 50,
    width: 138,
    height: 138,
    borderRadius: 69,
    backgroundColor: '#8FFE7F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalAvatarImg: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  modalAvatarRightArea: {
    marginLeft: 30,
    width: 350,
    height: 170,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  modalNickName: {
    width: 350,
    fontSize: 35,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    verticalAlign: 'middle',
    textAlign: 'left',
    color: '#8FFE7F'
  },
  modalLeague: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  modalLeagueText: {
    textAlign: 'left',
    verticalAlign: 'middle',
    width: 80,
    fontSize: 25,
    color: '#B0B0CC',
  },
  modalLeagueValue: {
    textAlign: 'left',
    verticalAlign: 'middle',
    width: 250,
    fontSize: 25,
    color: '#8FFE7F',
  },
  modalLevel: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  modalLevelText: {
    textAlign: 'left',
    verticalAlign: 'middle',
    width: 80,
    fontSize: 25,
    color: '#B0B0CC',
  },
  modalLevelValue: {
    textAlign: 'left',
    verticalAlign: 'middle',
    width: 250,
    fontSize: 25,
    color: '#8FFE7F',
    whiteSpace: 'normal',
  },
  
  
  stageSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 600,
    height: 120,
    borderRadius: 50
  },
  modalStageLeft: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 400,
    height: 120
  },
  modalStageLeftTitle: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 25,
    color: '#B0B0CC',
  },
  modalStageLeftValue: {
    marginLeft: 30,
    marginTop: 15,
    fontSize: 30,
    color: '#00F2FF',
  },
  modalStageRightFlagImg: {
    marginLeft: 130,
    width: 30,
    height: 34
  },
  
  
  recordSection: {
    width: 600,
    height: 550
  },
  modalRecordTitle: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  modalRecordTitle1: {
    fontSize: 25,
    marginLeft: 20,
    color: '#B0B0CC',
    textAlign: 'left',
    verticalAlign: 'middle'
  },
  modalRecordTitle2: {
    fontSize: 20,
    marginLeft: 15,
    color: '#B0B0CC',
    textAlign: 'left',
    verticalAlign: 'middle'
  },
  modalRecord1: {
    width: 600,
    height: 120,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  modalRecord1Block: {
    marginLeft: 20,
    width: 270,
    height: 120,
    backgroundColor: '#0E123A',
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  modalRecord1BlockTitle: {
    width: 270,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalRecord1BlockTitleImg: {
    marginLeft: 20,
    width: 20,
    height: 20,
  },
  modalRecord1BlockTitleText: {
    marginLeft: 10,
    fontSize: 25,
    textAlign: 'left',
    verticalAlign: 'middle',
    color: '#9BA4FF'
  },
  modalRecord1BlockValue: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalRecord1BlockValueNumber: {
    marginLeft: 20,
    fontSize: 35,
    color: '#00F2FF',
  },
  modalRecord1BlockValueText: {
    marginLeft: 5,
    fontSize: 20,
    color: '#9BA4FF',
  },
  modalRecord1Combo: {
    marginLeft: 20,
    width: 270,
    height: 120,
    backgroundColor: '#0E123A',
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  modalRecord1ComboTitle: {
    width: 270,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalRecord1ComboTitleImg: {
    marginLeft: 20,
    width: 20,
    height: 20,
  },
  modalRecord1ComboTitleText: {
    marginLeft: 10,
    fontSize: 25,
    textAlign: 'left',
    verticalAlign: 'middle',
    color: '#9BA4FF'
  },
  modalRecord1ComboTotalMax: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalRecord1ComboTotal: {
    width: 160,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalRecord1ComboTotalValue: {
    fontSize: 35,
    color: '#00F2FF'
  },
  modalRecord1ComboTotalText: {
    marginLeft: 2,
    fontSize: 20,
    color: '#9BA4FF'
  },
  modalRecord1ComboMax: {
    width: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalRecord1ComboMaxValue: {
    fontSize: 35,
    color: '#00F2FF'
  },
  modalRecord1ComboMaxText: {
    marginLeft: 2,
    fontSize: 20,
    color: '#9BA4FF'
  },
  modalRecordME: {
    width: 560,
    height: 320,
    backgroundColor: '#0E123A',
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 20
  },
  modalRecordMETitle: {
    width: 560,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalRecordMETitleImg: {
    marginLeft: 20,
    width: 22,
    height: 22
  },
  modalRecordMETitleText: {
    fontSize: 25,
    marginLeft: 10,
    width: 100,
    verticalAlign: 'middle',
    textAlign: 'left',
    color: '#9BA4FF'
  },
  modalRecordMETop: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    width: 560,
    height: 100
  },
  modalRecordM5: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
    width: 245,
    height: 100,
    backgroundColor: '#12184D',
    borderRadius: 15
  },
  modalRecordM5Text: {
    verticalAlign: 'middle',
    fontSize: 23,
    color: '#9BA4FF',
    marginLeft: 20
  },
  modalRecordM5Value: {
    width: 170,
    fontSize: 35,
    textAlign: 'right',
    verticalAlign: 'middle',
    color: '#00F2FF',
    marginLeft: 0
  },
  modalRecordM4: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 30,
    width: 245,
    height: 100,
    backgroundColor: '#12184D',
    borderRadius: 15
  },
  modalRecordM4Text: {
    verticalAlign: 'middle',
    fontSize: 23,
    color: '#9BA4FF',
    marginLeft: 20
  },
  modalRecordM4Value: {
    width: 170,
    fontSize: 35,
    textAlign: 'right',
    verticalAlign: 'middle',
    color: '#00F2FF',
    marginLeft: 0
  },
  modalRecordMEBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    width: 560,
    height: 100
  },
  modalRecordM3: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
    width: 245,
    height: 100,
    backgroundColor: '#12184D',
    borderRadius: 15
  },
  modalRecordM3Text: {
    verticalAlign: 'middle',
    fontSize: 23,
    color: '#9BA4FF',
    marginLeft: 20
  },
  modalRecordM3Value: {
    width: 170,
    fontSize: 35,
    textAlign: 'right',
    verticalAlign: 'middle',
    color: '#00F2FF',
    marginLeft: 0
  },
  modalRecordM2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 30,
    width: 245,
    height: 100,
    backgroundColor: '#12184D',
    borderRadius: 15
  },
  modalRecordM2Text: {
    verticalAlign: 'middle',
    fontSize: 23,
    color: '#9BA4FF',
    marginLeft: 20
  },
  modalRecordM2Value: {
    width: 170,
    fontSize: 35,
    textAlign: 'right',
    verticalAlign: 'middle',
    color: '#00F2FF',
    marginLeft: 0
  },
  
  
  buttonSection: {
    width: 600,
    height: 160,
    borderRadius: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalBtnSectionImg: {
    imageType: 'sliced',
    imageInset: '35 31 35 31',
    width: 550,
    height: 120,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalBtnSectionText: {
    width: 300,
    fontSize: 30,
    verticalAlign: 'middle',
    textAlign: 'center',
    color: '#8FFE7FC8',
  },
};