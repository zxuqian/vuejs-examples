<template>
  <!-- 如果只有一个顶层标签，:class=$attrs.class 可以省略 -->
  <Chart :options="options" :class="$attrs.class" />
</template>

<script setup>
import Chart from "./Chart.vue";
import barChartOptionCreator from "../charts/barChart.js";
import { computed, defineProps, toRefs } from "vue";

const props = defineProps({
  boxOfficeData: Array,
});

const { boxOfficeData } = toRefs(props);

const options = computed(() => {
  const { names, boxOffices } = populateMovieData(boxOfficeData.value);
  return barChartOptionCreator(names, boxOffices);
});

function populateMovieData(rawData) {
  let names = [];
  let boxOffices = [];
  rawData.forEach((movie) => {
    names.push(movie?.name);
    boxOffices.push(movie?.boxOffice);
  });

  return { names, boxOffices };
}
</script>

<style scoped></style>
