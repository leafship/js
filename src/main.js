import Layout from 'minigame-canvas-engine';
import { template } from './template';
import { style } from './style';
import { getNextData } from './data';
import { AnimationManager } from './animations';
import { processDataWithImageCheck } from './dataProcessor';
import { modalTemplate } from './modalTemplate';
import { modalStyle } from './modalStyle';
import { LeagueManager } from './LeagueManager';

async function render() {
  const data = getNextData();
  
  const processedData = await processDataWithImageCheck(Layout, data);

  var tempFn = doT.template(template);
  var resultText = tempFn(processedData);

  AnimationManager.getInstance().stop();

  Layout.clear();
  Layout.init(resultText, style);
  Layout.layout(context);

  bindClickEvent(processedData);

  AnimationManager.getInstance().start();
}

function bindClickEvent(processedData) {  
  const list = Layout.getElementsByClassName('clickItem'); 
  const container = Layout.getElementById('container'); 
 
  list.forEach((item, index) => { 
    item.on('click', (e) => { 
      const listIndex = parseInt(item.dataset.index, 10);
      let itemData = null;

      if (!isNaN(listIndex) && processedData) {
        if (listIndex >= 0 && processedData.listRankItem) {
          itemData = processedData.listRankItem[listIndex];
        } else if (listIndex === -1 && processedData.top1RankItem) {
          itemData = processedData.top1RankItem;
        } else if (listIndex === -2 && processedData.top2RankItem) {
          itemData = processedData.top2RankItem;
        } else if (listIndex === -3 && processedData.top3RankItem) {
          itemData = processedData.top3RankItem;
        } else if (listIndex === -4 && processedData.myRankItem) {
          itemData = processedData.myRankItem;
        }
      }

      if (!itemData) return;

      const totalBlockCount = itemData.tbcnt || 0;
      const leagueName = LeagueManager.getLeagueName(totalBlockCount);
      const levelValue = `Lv. ${Math.floor(totalBlockCount / 100)}`;
      const stageValue = `第 ${itemData.stage || 1} 关`;

      const modalData = {
        avatarUrl: itemData.avatarUrl || 'pic/avatar_default_icon.png',
        nickname: itemData.nickname || '微信用户',
        leagueName: leagueName,
        levelValue: levelValue,
        stageValue: stageValue,
        tbcnt: itemData.tbcnt || 0,
        totalCombo: itemData.totalCombo || 0,
        maxCombo: itemData.maxCombo || 0,
        elim5: itemData.elim5 || 0,
        elim4: itemData.elim4 || 0,
        elim3: itemData.elim3 || 0,
        elim2: itemData.elim2 || 0,
      };

      const tempFn = doT.template(modalTemplate);
      const renderedHtml = tempFn(modalData);
       
      Layout.insertElement(renderedHtml, modalStyle, container); 
       
      const modal = Layout.getElementById('modal'); 
      const modalButtonSection = Layout.getElementById('modalButtonSection'); 
       
      if (modalButtonSection) { 
        modalButtonSection.on('click', (e) => { 
          if (modal) { 
            modal.remove();  
          } 
        }); 
      } 
    }); 
  }); 
}

Layout.updateViewPort({ x: 0, y: 0, width: 720, height: 1030 });

let canvas = document.getElementById("canvas");
canvas.width = 720;
canvas.height = 1030;

canvas.style.width = 720 + "px";
canvas.style.height = 1030 + "px";

let context = canvas.getContext("2d");

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  render();
});

render();