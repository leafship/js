const template = `

<view id="container" class="container">

  <!-- 列表 -->
  <scrollview class="scrollview" scrollY="true">
  
    <view class="top3Section">
    
     <view class="topXContainer">
     
     {{? !it.top2RankItem }}
        <image id="top2NobodyAvatar" class="top2NobodyAvatar" src="https://i.ibb.co/TxKwH1RN/avatar2-nobody.png">
        </image>
        <text id="top2NobodyName" class="top2NobodyName" value="此时此刻"></text>
     {{?}}
     {{? it.top2RankItem }}
     <view class="top2AvatarBorder" >
        <image id="top2Avatar" class="top2Avatar clickItem" src="{{= it.top2RankItem.avatarUrl }}">
        </image>
    </view>
    <text id="top2Name" class="top2Name" value="{{= it.top2RankItem.nickname }}"></text>
     {{?}}

        <image class="top2Podium" src="https://i.ibb.co/Lm7Qw7m/Podium2.png">
        </image> 
     </view>
     
     <view class="topXContainer">
     {{? !it.top1RankItem }}
        <image id="top1NobodyAvatar" class="top1NobodyAvatar" src="https://i.ibb.co/N6rRgRd2/avatar1-nobody.png">
        </image>
        <text id="top1NobodyName" class="top1NobodyName" value="舍我其谁"></text>
      {{?}}
      {{? it.top1RankItem }}
        <image id="top1Gold" class="top1Gold" src="https://i.ibb.co/xbFG5kY/gold-medal-icon.png">
        </image>
        <view class="top1AvatarBorder" >
          <image id="top1Avatar" class="top1Avatar clickItem" src="{{= it.top1RankItem.avatarUrl }}">
          </image>
        </view>
        <text id="top1Name" class="top1Name" value="{{= it.top1RankItem.nickname }}"></text>
      {{?}}
        <image class="top1Podium" src="https://i.ibb.co/ynyBPhTV/Podium1.png">
        </image>
     </view>
     
     <view class="topXContainer">
     {{? !it.top3RankItem }}
        <image id="top3NobodyAvatar" class="top3NobodyAvatar" src="https://i.ibb.co/HT46vwKp/avatar3-nobody.png">
        </image>
        <text id="top3NobodyName" class="top3NobodyName" value="虚位以待"></text>
      {{?}}
      {{? it.top3RankItem }}
      <view class="top3AvatarBorder" >
        <image id="top3Avatar" class="top3Avatar clickItem" src="{{= it.top3RankItem.avatarUrl }}">
        </image>
      </view>
        <text id="top3Name" class="top3Name" value="{{= it.top3RankItem.nickname }}"></text>
      
      {{?}}
        <image class="top3Podium" src="https://i.ibb.co/gFDLP525/Podium3.png">
        </image>
    </view>
    
   </view>
   
   <view class="listHeader">
       <text class="listHeaderRank" value="排名"></text>
       <text class="listHeaderPlayer" value="玩家"></text>
    {{? it.rankType === "BlockRank"}}
       <text class="listHeaderBlock" value="方块数"></text>
    {{?}}
    {{? it.rankType === "MultiEliRank"}}
       <text class="listHeaderMe" value="5消"></text>
       <text class="listHeaderMe" value="4消"></text>
       <text class="listHeaderMe" value="3消"></text>
       <text class="listHeaderMe" value="2消"></text>
    {{?}}
    {{? it.rankType === "ComboRank"}}
       <text class="listHeaderCombo" value="连消数"></text>
    {{?}}
   </view>
  
  {{~ it.listRankItem : item : index}}
  {{? index % 2 === 0 }}
    <view  class="item item0BgColor clickItem" data-avatarUrl="{{=item.avatarUrl}}">
  {{?}}
  {{? index % 2 === 1 }}
    <view  class="item item1BgColor clickItem" data-avatarUrl="{{=item.avatarUrl}}">
  {{?}}
    
        <text class="rank" value="{{=item.rank}}"></text>
        <image class="avatar" src="{{=item.avatarUrl}}"></image>
        <text class="name" value="{{=item.nickname}}"></text>
     {{? it.rankType === "MultiEliRank"}}
        <text class="me" value="{{=item.elim5}}"></text>
        <text class="me" value="{{=item.elim4}}"></text>
        <text class="me" value="{{=item.elim3}}"></text>
        <text class="me" value="{{=item.elim2}}"></text>
     {{?}}
     {{? it.rankType === "BlockRank"}}
        <text class="itemBlockAndCombo" value="{{=item.tbcnt}}"></text>
     {{?}}
     {{? it.rankType === "ComboRank"}}
        <text class="itemBlockAndCombo" value="{{=item.totalCombo}}"></text>
     {{?}}
    </view>
  {{~}}
  
  //如果列表没有人，显示暂无更多...
  {{? it.listRankItem.length === 0 && !it.isAuthDeny }}
    <text class="noMoreListItem" value="暂无更多..."></text>
  {{?}}
  //未授权
  {{? it.isAuthDeny }}
    <text class="authDenyText1" value="未授权！无法查询数据！"></text>
    <text class="authDenyText2" value="去开启授权：右上角[⋯‌] - 底部[设置] - 开启[微信朋友信息]"></text>
  {{?}}
  
  </scrollview>
   
      <view class="myRank clickItem">
        <view class="myRankNumber">
          <text class="myRankNumberText" value="我的排名"></text>
          {{? it.myRankItem.rank }}
          <text class="myRankNumberValue" value="{{= it.myRankItem.rank }}"></text>
          {{?}}
          {{? !it.myRankItem.rank }}
          <text class="myRankNumberValue" value="0"></text>
          {{?}}
        </view>
        <view class="myRankAvatar">
          <image class="myRankAvatarIconBorder" src="https://i.ibb.co/v6y7rmvf/round-bg-icon.png">
          
           {{? it.myRankItem.avatarUrl}}
              <image class="myRankAvatarIcon" src="{{= it.myRankItem.avatarUrl }}"></image>
           {{?}}
           {{? !it.myRankItem.avatarUrl}}
              <image class="myRankAvatarIcon" src=""></image>
           {{?}}
           
          </image>
        </view>
    
      {{? it.rankType === "MultiEliRank" }}
        <view class="myRankME">
          <text class="myRankMEText" value="5消"></text>
          <text class="myRankMEValue" value="{{= it.myRankItem.elim5 }}"></text>
        </view>
        <view class="myRankME">
          <text class="myRankMEText" value="4消"></text>
          <text class="myRankMEValue" value="{{= it.myRankItem.elim4 }}"></text>
        </view>
        <view class="myRankME">
          <text class="myRankMEText" value="3消"></text>
          <text class="myRankMEValue" value="{{= it.myRankItem.elim3 }}"></text>
        </view>
        <view class="myRankME">
          <text class="myRankMEText" value="2消"></text>
          <text class="myRankMEValue" value="{{= it.myRankItem.elim2 }}"></text>
        </view>
      {{?}}
      {{? it.rankType === "BlockRank" }}
        <view class="myRankBlock">
          <text class="myRankTitleText" value="方块数"></text>
          <text class="myRankValue" value="{{= it.myRankItem.tbcnt }}"></text>
        </view>
      {{?}}
      
      {{? it.rankType === "ComboRank" }}
        <view class="myRankCombo">
          <text class="myRankTitleText" value="连消数"></text>
          <text class="myRankValue" value="{{= it.myRankItem.totalCombo }}"></text>
        </view>
      {{?}}
    
    </view>
  
 

</view>

`;

export { template };