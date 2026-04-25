const template = `

<view id="container" class="container">

  <!-- 列表 -->
  <scrollview id="scrollview" class="scrollview" scrollY="true">
  
    <view class="top3Section">
    <view class="refreshHintContainer">
      <image class="refreshHintIcon" src="pic/alarm-clock.png"></image>
      <text class="refreshHint" value="每3分钟 刷新榜单"></text>
    </view>
    
    
     <view class="topXContainer">
     
     {{? !it.top2RankItem }}
        <image id="top2NobodyAvatar" class="top2NobodyAvatar" src="pic/avatar2_nobody.png">
        </image>
        <text id="top2NobodyName" class="top2NobodyName" value="此时此刻"></text>
     {{?}}
     {{? it.top2RankItem }}
     <view class="top2AvatarBorder" >
        <view class="top2AvatarBg">
            <image id="top2Avatar" class="top2Avatar clickItem" data-index="-2" src="{{= it.top2RankItem.avatarUrl }}"></image>
        </view>
        
    </view>
    <text id="top2Name" class="top2Name" value="{{= it.top2RankItem.nickname }}"></text>
     {{?}}

        <image class="top2Podium" src="pic/Podium2.png">
        </image> 
     </view>
     
     <view class="topXContainer">
     {{? !it.top1RankItem }}
        <image id="top1NobodyAvatar" class="top1NobodyAvatar" src="pic/avatar1_nobody.png">
        </image>
        <text id="top1NobodyName" class="top1NobodyName" value="舍我其谁"></text>
      {{?}}
      {{? it.top1RankItem }}
        <image id="top1Gold" class="top1Gold" src="pic/gold_medal_icon.png">
        </image>
        <view class="top1AvatarBorder" >
          <view class="top1AvatarBg">
            <image id="top1Avatar" class="top1Avatar clickItem" data-index="-1" src="{{= it.top1RankItem.avatarUrl }}"></image>
          </view>
        </view>
        <text id="top1Name" class="top1Name" value="{{= it.top1RankItem.nickname }}"></text>
      {{?}}
        <image class="top1Podium" src="pic/Podium1.png">
        </image>
     </view>
     
     <view class="topXContainer">
     {{? !it.top3RankItem }}
        <image id="top3NobodyAvatar" class="top3NobodyAvatar" src="pic/avatar3_nobody.png">
        </image>
        <text id="top3NobodyName" class="top3NobodyName" value="虚位以待"></text>
      {{?}}
      {{? it.top3RankItem }}
      <view class="top3AvatarBorder" >
        <view class="top3AvatarBg">
            <image id="top3Avatar" class="top3Avatar clickItem" data-index="-3" src="{{= it.top3RankItem.avatarUrl }}"></image>
        </view>
      </view>
        <text id="top3Name" class="top3Name" value="{{= it.top3RankItem.nickname }}"></text>
      
      {{?}}
        <image class="top3Podium" src="pic/Podium3.png">
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
    <view  class="item item0BgColor clickItem" data-index="{{=index}}" data-avatarUrl="{{=item.avatarUrl}}">
  {{?}}
  {{? index % 2 === 1 }}
    <view  class="item item1BgColor clickItem" data-index="{{=index}}" data-avatarUrl="{{=item.avatarUrl}}">
  {{?}}
    
        <text class="rank" value="{{=item.rank}}"></text>
        <image class="avatar" src="{{=item.avatarUrl}}"></image>
     {{? it.rankType === "MultiEliRank"}}
        <text class="name" value="{{=item.nickname}}"></text>
        <text class="me" value="{{=item.elim5}}"></text>
        <text class="me" value="{{=item.elim4}}"></text>
        <text class="me" value="{{=item.elim3}}"></text>
        <text class="me" value="{{=item.elim2}}"></text>
     {{?}}
     {{? it.rankType === "BlockRank"}}
        <text class="namew250" value="{{=item.nickname}}"></text>
        <text class="itemBlockAndCombo" value="{{=item.tbcnt}}"></text>
     {{?}}
     {{? it.rankType === "ComboRank"}}
        <text class="namew250" value="{{=item.nickname}}"></text>
        <text class="itemBlockAndCombo" value="{{=item.totalCombo}}"></text>
     {{?}}
    </view>
  {{~}}
  
  //如果列表没有人，显示暂无更多...
  {{? it.listRankItem.length === 0 && !it.isAuthDeny && !it.isUnknownErr }}
    <text class="noMoreListItem" value="暂无更多..."></text>
  {{?}}
  //未授权
  {{? it.isAuthDeny }}
    <text class="authDenyText1" value="未授权！无法获取数据！"></text>
    <text class="authDenyText2" value="去开启授权：右上角[···] - 底部[设置] - 开启[微信朋友信息]"></text>
    <text class="noMoreListItem" value="授权后 下拉刷新"></text>
  {{?}}
  //未知错误
  {{? it.isUnknownErr }}
    <text class="authDenyText1" value="网络错误！请稍后再试！"></text>
    <text class="noMoreListItem" value="下拉刷新"></text>
  {{?}}
  
  </scrollview>
   
      <view class="myRank clickItem" data-index="-4">
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
          <image class="myRankAvatarIconBorder" src="pic/round_bg_icon.png">
          
          <view class="myRankAvatarBg">
           {{? it.myRankItem.avatarUrl}}
              <image class="myRankAvatarIcon" src="{{= it.myRankItem.avatarUrl }}"></image>
           {{?}}
           </view>
           
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