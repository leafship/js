import Layout from 'minigame-canvas-engine';
import { template } from './template';
import { style } from './style';
import { getNextData } from './data';
import { AnimationManager } from './animations';
import { processDataWithImageCheck } from './dataProcessor';
import modalTemplate from './modalTemplate';
import modalStyle from './modalStyle';

async function render() {
  const data = getNextData();
  
  const processedData = await processDataWithImageCheck(Layout, data);

  var tempFn = doT.template(template);
  var resultText = tempFn(processedData);

  AnimationManager.getInstance().stop();

  Layout.clear();
  Layout.init(resultText, style);
  Layout.layout(context);

  bindClickEvent();

  AnimationManager.getInstance().start();
}

function bindClickEvent() {  
  const list = Layout.getElementsByClassName('clickItem'); 
  const container = Layout.getElementById('container'); 
 
  list.forEach(item => { 
    item.on('click', (e) => { 
      Layout.insertElement(modalTemplate, modalStyle, container); 
       
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