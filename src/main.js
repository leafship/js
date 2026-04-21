import Layout from 'minigame-canvas-engine';
import { template } from './template';
import { style } from './style';
import { data } from './data';
import { AnimationManager } from './animations';
import { processDataWithImageCheck } from './dataProcessor';

async function init() {
  Layout.updateViewPort({ x: 0, y: 0, width: 720, height: 1030 });

  let canvas = document.getElementById("canvas");
  canvas.width = 720;
  canvas.height = 1030;

  canvas.style.width = 720 + "px";
  canvas.style.height = 1030 + "px";

  let context = canvas.getContext("2d");

  const processedData = await processDataWithImageCheck(Layout, data);

  var tempFn = doT.template(template);
  var resultText = tempFn(processedData);

  AnimationManager.getInstance().stop();

  Layout.clear();
  Layout.init(resultText, style);
  Layout.layout(context);

  AnimationManager.getInstance().start();
}

init();