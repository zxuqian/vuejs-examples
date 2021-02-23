<template>
  <Chart :options="options" :class="$attrs.class" />
  <button @click="changeTitle">点我</button>
</template>

<script setup>
import Chart from "./Chart.vue";
import barChartOptionCreator from "../charts/barChart.js";
import { ref } from "vue";

const options = ref(barChartOptionCreator());

function changeTitle() {
  options.value.title = {
    text: "test",
  };
}
</script>

<style module></style>
