import Layout from 'minigame-canvas-engine';
import { template } from './template';
import { style } from './style';

// 渲染
const canvas = document.getElementById('canvas');
canvas.width = 720;
canvas.height = 1030;

Layout.updateViewPort({ x: 0, y: 0, width: 720, height: 1030 });

Layout.clear();
Layout.init(template, style);
Layout.layout(canvas.getContext('2d'));