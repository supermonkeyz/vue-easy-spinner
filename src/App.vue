<template>
  <div>
    <h1>Vue Easy Spinner</h1>
    <h2 class="box-inner">
      <label for="changeColor">Color:</label>
      <input
        type="color"
        class="color-picker"
        v-model="state.color"
        id="changeColor"
      />
      <label for="changeSize">Size:</label>
      <input
        type="range"
        id="changeSize"
        name="size"
        min="20"
        max="100"
        v-model="state.size"
      />
    </h2>
    <main class="sample-box">
      <section v-for="item in state.types" :key="item.type" class="box-item">
        <h3 class="box-title">{{ item.type }}</h3>
        <div class="box-inner">
          <Spinner :type="item.type" :color="state.color" :size="state.size" />
        </div>
      </section>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, watchEffect, PropType } from 'vue';

interface state {
  color: string;
  size?: number;
  types: any;
}

export default defineComponent({
  setup() {
    let state = reactive({
      color: '#fb8500',
      size: 60,
      types: [{ type: 'spins' }, { type: 'circular' }, { type: 'dots' }],
    });
    return {
      state,
    };
  },
});
</script>

<style>
h1 {
  font-family: 'Sansita Swashed', 'Helvetica Neue';
  font-size: 10vw;
  background: linear-gradient(90deg, #41b883, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 5vh 0;
}

.sample-box {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  font-size: 2.5vmax;
  color: #333;
}

.box-item {
  flex: 0 0 33.33%;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 5vh;
}

.box-title {
  font-size: 4vmax;
  font-style: oblique;
}

.item-text {
  margin-left: 3%;
}

.box-inner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.color-picker {
  width: 4vmax;
  height: 4vmax;
  clip-path: circle(calc(2vmax - 6px) at 2vmax 2vmax);
  vertical-align: top;
  box-sizing: border-box;
  border: none;
}
</style>
