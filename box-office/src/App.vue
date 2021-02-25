<template>
  <div class="wrapper">
    <BarChart :boxOfficeData="boxOfficeData" class="chart" />
    <DoughnutChart :boxOfficeData="boxOfficeData" class="chart" />
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import BarChart from "./components/BarChart.vue";
import DoughnutChart from "./components/DoughnutChart.vue";

const boxOfficeData = ref([]);

const fetchData = async () => {
  const res = await fetch("/boxOffice.json");
  const data = await res.json();
  boxOfficeData.value = data;
};

onMounted(() => {
  fetchData();
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: hsl(210deg, 20%, 10%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-items: center;
}
.wrapper .chart {
  width: 80%;
  height: 400px;
}
</style>
