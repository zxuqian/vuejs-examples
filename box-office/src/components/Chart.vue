<template>
  <div class="container" ref="container"></div>
</template>

<script setup>
import { defineProps, onMounted, ref, toRefs, watch, watchEffect } from "vue";
import * as echarts from "echarts";

const { options } = defineProps({
  options: {},
});

const container = ref(null);
const chart = ref(null);

onMounted(() => {
  chart.value = echarts.init(container.value);
  chart.value.setOption(options);
});

watch(
  options,
  () => {
    if (chart) {
      chart.value.setOption(options);
    }
  },
  { deep: true }
);
</script>

<style module>
.container {
  width: 100%;
  height: 100%;
}
</style>
