<template>
  <div class="container" ref="container"></div>
</template>

<script setup>
import { defineProps, onMounted, ref, toRefs, watch } from "vue";
import * as echarts from "echarts";

const props = defineProps({
  options: {
    type: Object,
    default: {},
    required: true,
  },
});

const { options } = toRefs(props);

const container = ref(null);
const chart = ref(null);

onMounted(() => {
  if (props.options) {
    chart.value = echarts.init(container.value, "dark");
    chart.value.setOption(props.options);
  }
});

watch(
  options,
  () => {
    chart.value.setOption(props.options);
  },
  { deep: true }
);
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
