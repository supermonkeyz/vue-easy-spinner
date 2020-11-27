<template>
  <component :is="type" :class="$style.main" :style="allStyles"> </component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import Spins from './components/spins.vue';
import Circular from './components/circular.vue';
import Dots from './components/dots.vue';

export default defineComponent({
  name: 'spinner',
  components: { Spins, Circular, Dots },
  props: {
    type: {
      type: String,
      default: 'spins',
    },
    size: {
      type: [Number, String] as PropType<number | string>,
    },
    color: {
      type: String,
    },
  },
  setup(props) {
    const allStyles = computed(() => {
      const { color, size: fontSize } = props;
      return {
        color,
        fontSize,
      };
    });
    return {
      allStyles,
    };
  },
});
</script>

<style module>
.main {
  width: 1em;
  height: 1em;
}
</style>
