<template>
  <Chart :options="options" :class="$attrs.class" />
</template>

<script setup>
import Chart from "./Chart.vue";
import barChartOptionCreator from "../charts/barChart.js";
import useMovieData from "../composables/useMovieData";
import {
  computed,
  defineProps,
  isRef,
  onMounted,
  ref,
  toRefs,
  watch,
  watchEffect,
} from "vue";

const props = defineProps({
  boxOfficeData: Array,
});

const { boxOfficeData } = toRefs(props);

const options = computed(() => {
  const { names, boxOffices } = useMovieData(boxOfficeData.value);
  return barChartOptionCreator(names, boxOffices);
});
</script>

<style module></style>
