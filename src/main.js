import Layout from 'minigame-canvas-engine';
import { template } from './template';
import { style } from './style';

// 渲染
const canvas = document.getElementById('canvas');
canvas.width = 400;
canvas.height = 200;

Layout.init(template, style);
Layout.updateViewPort({ x: 0, y: 0, width: 400, height: 200 });
Layout.layout(canvas.getContext('2d'));

// 事件绑定
const text = Layout.getElementsById('text')[0];
text.on('click', () => alert('hello canvas!'));

console.log('渲染成功');