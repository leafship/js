import Layout from 'minigame-canvas-engine';
import { template } from './template';
import { style } from './style';

// 渲染
const canvas = document.getElementById('canvas');
canvas.width = 720;
canvas.height = 1030;

Layout.init(template, style);
Layout.updateViewPort({ x: 0, y: 0, width: 720, height: 1030 });
Layout.layout(canvas.getContext('2d'));

// 事件绑定
const text = Layout.getElementsById('text')[0];
text.on('click', () => alert('画布尺寸: 720x1030'));

console.log('渲染成功 - 画布尺寸: 720x1030');