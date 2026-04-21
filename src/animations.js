import * as TWEEN from 'https://cdn.skypack.dev/@tweenjs/tween.js@18.6.4';
import Layout from 'minigame-canvas-engine';

class GoldBounce {
  constructor() {
    this.upTween = null;
    this.downTween = null;
    this.goldNode = null;
  }

  start() {
    this.goldNode = Layout.getElementById('top1Gold');
    if (!this.goldNode) return;

    const originalBottom = parseFloat(this.goldNode.style.bottom) || -45;
    const targetBottom = originalBottom + 15;
    const halfDuration = 500;

    this.goldNode.style.bottom = originalBottom;

    this.upTween = new TWEEN.Tween(this.goldNode.style)
      .to({ bottom: targetBottom }, halfDuration)
      .easing(TWEEN.Easing.Sinusoidal.Out);

    this.downTween = new TWEEN.Tween(this.goldNode.style)
      .to({ bottom: originalBottom }, halfDuration)
      .easing(TWEEN.Easing.Sinusoidal.In);

    this.upTween.chain(this.downTween);
    this.downTween.chain(this.upTween);

    this.upTween.start();
  }

  stop() {
    if (this.upTween) {
      this.upTween.stop();
      this.upTween = null;
    }
    if (this.downTween) {
      this.downTween.stop();
      this.downTween = null;
    }
  }
}

function createBlinkAnimation(elementId) {
  const el = Layout.getElementById(elementId);
  if (el) {
    el.style.opacity = 0.3;
    new TWEEN.Tween(el.style)
      .to({ opacity: 1.0 }, 1000)
      .repeat(300)
      .yoyo(true)
      .start();
  }
}

export function initAnimations() {
  Layout.ticker.add(() => {
    TWEEN.update();
  });

  const blinkElements = [
    'top1NobodyAvatar',
    'top1NobodyName',
    'top2NobodyAvatar',
    'top2NobodyName',
    'top3NobodyAvatar',
    'top3NobodyName'
  ];

  blinkElements.forEach(id => createBlinkAnimation(id));

  const goldBounce = new GoldBounce();
  goldBounce.start();
}