export let modalTemplate = `
  <view id="modal" class="modal">
    <view class="modalContent">
    
      <view class="avatarSection">
      
        <view class="modalAvatarBorder">
          <image class="modalAvatarImg" src="{{= it.avatarUrl }}"></image>
        </view>
      
        <view class="modalAvatarRightArea">
          <text class="modalNickName" value="{{= it.nickname }}"></text>
          <view class="modalLeague">
            <text class="modalLeagueText" value="段位："></text>
            <text class="modalLeagueValue" value="{{= it.leagueName }}"></text>
          </view>
          
          <view class="modalLevel">
             <text class="modalLevelText" value="等级："></text>
             <text class="modalLevelValue" value="{{= it.levelValue }}"></text>
          </view>
        </view>
        
      </view>
       
      
      <view class="stageSection">
        <view class="modalStageLeft">
          <text class="modalStageLeftTitle" value="当前关卡"></text>
          <text class="modalStageLeftValue" value="{{= it.stageValue }}"></text>
        </view>
        <image class="modalStageRightFlagImg" src="pic/flag.png"></image>
      </view>
      
      <view class="recordSection">
      
        <view class="modalRecordTitle">
            <text class="modalRecordTitle1" value="战绩统计"></text>
            <text class="modalRecordTitle2" value="历史•累计"></text>
        </view>
        
        <view class="modalRecord1">
            <view class="modalRecord1Block">
                <view class="modalRecord1BlockTitle">
                    <image class="modalRecord1BlockTitleImg" src="pic/rank_block_cnt_icon.png"></image>
                    <text class="modalRecord1BlockTitleText" value="方块数"></text>
                </view>
                <view class="modalRecord1BlockValue">
                    <text class="modalRecord1BlockValueNumber" value="{{= it.tbcnt }}"></text>
                    <text class="modalRecord1BlockValueText" value="块"></text>
                </view>
            </view>
            <view class="modalRecord1Combo">
                <view class="modalRecord1ComboTitle">
                    <image class="modalRecord1ComboTitleImg" src="pic/rank_combo_icon.png"></image>
                    <text class="modalRecord1ComboTitleText" value="连消"></text>
                </view>
                <view class="modalRecord1ComboTotalMax">
                    <view class="modalRecord1ComboTotal">
                        <text class="modalRecord1ComboTotalValue" value="{{= it.totalCombo }}"></text>
                        <text class="modalRecord1ComboTotalText" value="总数"></text>
                    </view>
                    <view class="modalRecord1ComboMax">
                        <text class="modalRecord1ComboMaxValue" value="{{= it.maxCombo }}"></text>
                        <text class="modalRecord1ComboMaxText" value="最高"></text>
                    </view>
                </view>
            </view>
        </view>
        
        <view class="modalRecordME">
            <view class="modalRecordMETitle">
              <image class="modalRecordMETitleImg" src="pic/rank_me_icon.png"></image>
              <text class="modalRecordMETitleText" value="多消数"></text>
            </view>
            <view class="modalRecordMETop">
                <view class="modalRecordM5">
                    <text class="modalRecordM5Text" value="5消"></text>
                    <text class="modalRecordM5Value" value="{{= it.elim5 }}"></text>
                </view>
                <view class="modalRecordM4">
                    <text class="modalRecordM4Text" value="4消"></text>
                    <text class="modalRecordM4Value" value="{{= it.elim4 }}"></text>
                </view>
            </view>
            <view class="modalRecordMEBottom">
                <view class="modalRecordM3">
                    <text class="modalRecordM3Text" value="3消"></text>
                    <text class="modalRecordM3Value" value="{{= it.elim3 }}"></text>
                </view>
                <view class="modalRecordM2">
                    <text class="modalRecordM2Text" value="2消"></text>
                    <text class="modalRecordM2Value" value="{{= it.elim2 }}"></text>
                </view>
            </view>
        </view>
        
      </view>
      
      <view id="modalButtonSection" class="buttonSection">
        <image class="modalBtnSectionImg" src="pic/btn_icon.png">
          <text class="modalBtnSectionText" value="关闭"></text>
        </image>
      </view>
    
    </view>
  </view>
`;