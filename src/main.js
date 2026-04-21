import Layout from 'minigame-canvas-engine';
import * as TWEEN from 'https://cdn.skypack.dev/@tweenjs/tween.js@18.6.4';
import { template } from './template';
import { style } from './style';
import { data } from './data';

Layout.updateViewPort({ x: 0, y: 0, width: 720, height: 1030 });

let canvas = document.getElementById("canvas");
canvas.width = 720;
canvas.height = 1030;

canvas.style.width = 720 + "px";
canvas.style.height = 1030 + "px";

let context = canvas.getContext("2d");



// 编译模板
var tempFn = doT.template(template);
var resultText = tempFn(data);

Layout.clear();
Layout.init(resultText, style);
Layout.layout(context);