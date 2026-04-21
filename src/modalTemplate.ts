let modalTemplate = `
  <view id="modal" class="modal">
    <view class="modalContent">
    
      <view class="avatarSection">
      
        <view class="modalAvatarBorder">
          <image class="modalAvatarImg" src="https://wx.qlogo.cn/mmopen/vi_32/yctGCWkz1jKPjEeR8ic5RXXxn0sExT4JrPjIpPvscuS1FBZssIEp2Ry5URlT4eY7mM0akiaRHgdntryUDOicxbVh7Fo2gLVQCNzVchuwSZY9LI/132"></image>
        </view>
      
        <view class="modalAvatarRightArea">
          <text class="modalNickName" value="小明"></text>
          <view class="modalLeague">
            <text class="modalLeagueText" value="段位："></text>
            <text class="modalLeagueValue" value="钻石"></text>
          </view>
          
          <view class="modalLevel">
             <text class="modalLevelText" value="等级："></text>
             <text class="modalLevelValue" value="Lv. 9999999"></text>
          </view>
        </view>
        
      </view>
       
      
      <view class="stageSection">
        <view class="modalStageLeft">
          <text class="modalStageLeftTitle" value="当前关卡"></text>
          <text class="modalStageLeftValue" value="第 9999999 关"></text>
        </view>
        <image class="modalStageRightFlagImg" src="https://i.ibb.co/yBpc8Rbb/flag.png"></image>
      </view>
      
      <view class="recordSection">
      
        <view class="modalRecordTitle">
            <text class="modalRecordTitle1" value="战绩统计"></text>
            <text class="modalRecordTitle2" value="历史•累计"></text>
        </view>
        
        <view class="modalRecord1">
            <view class="modalRecord1Block">
                <view class="modalRecord1BlockTitle">
                    <image class="modalRecord1BlockTitleImg" src="https://wx.qlogo.cn/mmopen/vi_32/yctGCWkz1jKPjEeR8ic5RXXxn0sExT4JrPjIpPvscuS1FBZssIEp2Ry5URlT4eY7mM0akiaRHgdntryUDOicxbVh7Fo2gLVQCNzVchuwSZY9LI/132"></image>
                    <text class="modalRecord1BlockTitleText" value="方块数"></text>
                </view>
                <view class="modalRecord1BlockValue">
                    <text class="modalRecord1BlockValueNumber" value="9999999"></text>
                    <text class="modalRecord1BlockValueText" value="块"></text>
                </view>
            </view>
            <view class="modalRecord1Combo">
                <view class="modalRecord1ComboTitle">
                    <image class="modalRecord1ComboTitleImg" src="https://wx.qlogo.cn/mmopen/vi_32/yctGCWkz1jKPjEeR8ic5RXXxn0sExT4JrPjIpPvscuS1FBZssIEp2Ry5URlT4eY7mM0akiaRHgdntryUDOicxbVh7Fo2gLVQCNzVchuwSZY9LI/132"></image>
                    <text class="modalRecord1ComboTitleText" value="连消"></text>
                </view>
                <view class="modalRecord1ComboTotalMax">
                    <view class="modalRecord1ComboTotal">
                        <text class="modalRecord1ComboTotalValue" value="99999"></text>
                        <text class="modalRecord1ComboTotalText" value="总数"></text>
                    </view>
                    <view class="modalRecord1ComboMax">
                        <text class="modalRecord1ComboMaxValue" value="99"></text>
                        <text class="modalRecord1ComboMaxText" value="最高"></text>
                    </view>
                </view>
            </view>
        </view>
        
        <view class="modalRecordME">
            <view class="modalRecordMETitle">
              <image class="modalRecordMETitleImg" src="https://i.ibb.co/gFDLP525/Podium3.png"></image>
              <text class="modalRecordMETitleText" value="多消数"></text>
            </view>
            <view class="modalRecordMETop">
                <view class="modalRecordM5">
                    <text class="modalRecordM5Text" value="5消"></text>
                    <text class="modalRecordM5Value" value="9"></text>
                </view>
                <view class="modalRecordM4">
                    <text class="modalRecordM4Text" value="4消"></text>
                    <text class="modalRecordM4Value" value="999999"></text>
                </view>
            </view>
            <view class="modalRecordMEBottom">
                <view class="modalRecordM3">
                    <text class="modalRecordM3Text" value="3消"></text>
                    <text class="modalRecordM3Value" value="999999"></text>
                </view>
                <view class="modalRecordM2">
                    <text class="modalRecordM2Text" value="2消"></text>
                    <text class="modalRecordM2Value" value="999999"></text>
                </view>
            </view>
        </view>
        
      </view>
      
      <view id="modalButtonSection" class="buttonSection">
        <image class="modalBtnSectionImg" src="https://i.ibb.co/FkY7jzkK/btn-icon.png">
          <text class="modalBtnSectionText" value="关闭"></text>
        </image>
      </view>
    
    </view>
  </view>
`;