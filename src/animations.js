import * as TWEEN from 'https://cdn.skypack.dev/@tweenjs/tween.js@18.6.4';
import Layout from 'minigame-canvas-engine';

class GoldBounce {
  constructor() {
    this.upTween = null;
    this.downTween = null;
    this.goldNode = null;
  }

  static getInstance() {
    if (!GoldBounce.instance) {
      GoldBounce.instance = new GoldBounce();
    }
    return GoldBounce.instance;
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
      TWEEN.remove(this.upTween);
      this.upTween = null;
    }
    if (this.downTween) {
      this.downTween.stop();
      TWEEN.remove(this.downTween);
      this.downTween = null;
    }
  }

}

class AnimationManager {
  constructor() {
    this.tickerCallback = null;
    this.blinkTweens = [];
    this.isRunning = false;
  }

  static getInstance() {
    if (!AnimationManager.instance) {
      AnimationManager.instance = new AnimationManager();
    }
    return AnimationManager.instance;
  }

  start() {
    if (this.isRunning) return;

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

    GoldBounce.getInstance().start();

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
        TWEEN.remove(tween);
      }
    });
    this.blinkTweens = [];

    GoldBounce.getInstance().stop();

    this.isRunning = false;
  }
}

export { AnimationManager };