import Layout from 'minigame-canvas-engine';
import { template } from './template';
import { style } from './style';


Layout.updateViewPort({ x: 0, y: 0, width: 720, height: 1030 });

let canvas = document.getElementById("canvas");
canvas.width = 720;
canvas.height = 1030;

canvas.style.width = 720 + "px";
canvas.style.height = 1030 + "px";

let context = canvas.getContext("2d");





Layout.clear();
Layout.init(template, style);
Layout.layout(context);