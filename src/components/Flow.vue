<template>
<canvas id="flow" />
</template>

<script>
export default {
  name: "FLOW",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const s = window.screen;
      const f = document.getElementById("flow");
      const w = (f.width = s.width);
      const h = (f.height = s.height);
      const ctx = f.getContext("2d");
      const p = Array(Math.floor(w / 10) + 1).fill(0);
      const random = items => items[Math.floor(Math.random() * items.length)];
      const hex = "0123456789ZSH".split("");
      setInterval(() => {
        ctx.fillStyle = "rgba(0,0,0,.05)";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "#0f0";
        p.map((v, i) => {
          ctx.fillText(random(hex), i * 10, v);
          p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
        });
      }, 1000 / 10);
    }
  },
  props: {
  }
};
</script>

<style scoped>

body {
  margin: 0;
  overflow: hidden;
}
#flow{
  z-index:-1;
}
</style>
