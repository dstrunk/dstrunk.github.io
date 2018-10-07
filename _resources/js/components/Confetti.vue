<template>
    <canvas :width="width" :height="height" :style="inlineStyle" ref="canvas" />
</template>

<script>
import confetti from './libraries/confetti';

export default {
  data() {
    return {
      inlineStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        WebkitPointerEvents: 'none',
        MozPointerEvents: 'none',
        background: 'transparent',
      },
      width: 200,
      height: 200,
      numberOfPieces: 200,
      friction: 0.99,
      wind: 0,
      gravity: 0.1,
      confettiSource: {},
      colors: [
        '#f44336',
        '#e91e63',
        '#9c27b0',
        '#673ab7',
        '#3f51b5',
        '#2196f3',
        '#03a9f4',
        '#00bcd4',
        '#009688',
        '#4caf50',
        '#8bc34a',
        '#cddc39',
        '#ffeb3b',
        '#ffc107',
        '#ff9800',
        '#ff5722',
        '#795548',
      ],
      opacity: 1.0,
      recycle: true,
      run: true,
    };
  },
  mounted() {
    confetti(this.$refs.canvas)
      .numberOfPieces(this.numberOfPieces)
      .friction(this.friction)
      .wind(this.wind)
      .gravity(this.gravity)
      .colors(this.colors)
      .opacity(this.opacity)
      .recycle(this.recycle)
      .run(this.run)();
  },
};
</script>
