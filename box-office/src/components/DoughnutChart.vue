<template>
  <Chart :options="doughnutChartCreator()" />
</template>

<script setup>
import Chart from "./Chart.vue";
import doughnutChartCreator from "../charts/doughnutChart.js";
</script>

<style module></style>
