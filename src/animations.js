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

const goldBounce = new GoldBounce();

class AnimationManager {
  constructor() {
    this.tickerCallback = null;
    this.blinkTweens = [];
    this.isRunning = false;
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;

    this.tickerCallback = () => {
      TWEEN.update();
    };
    Layout.ticker.add(this.tickerCallback);

    const blinkElements = [
      'top1NobodyAvatar',
      'top1NobodyName',
      'top2NobodyAvatar',
      'top2NobodyName',
      'top3NobodyAvatar',
      'top3NobodyName'
    ];

    blinkElements.forEach(id => {
      const el = Layout.getElementById(id);
      if (el) {
        el.style.opacity = 0.3;
        const tween = new TWEEN.Tween(el.style)
          .to({ opacity: 1.0 }, 1000)
          .repeat(300)
          .yoyo(true)
          .start();
        this.blinkTweens.push(tween);
      }
    });

    goldBounce.start();

  }

  stop() {
    if (!this.isRunning) return;

    if (this.tickerCallback) {
      Layout.ticker.remove(this.tickerCallback);
      this.tickerCallback = null;
    }

    this.blinkTweens.forEach(tween => {
      if (tween) {
        tween.stop();
      }
    });
    this.blinkTweens = [];

    goldBounce.stop();

    this.isRunning = false;
  }
}

const animationManager = new AnimationManager();

export function startAnimations() {
  animationManager.start();
}

export function stopAnimations() {
  animationManager.stop();
}