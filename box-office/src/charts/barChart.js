// 导出一个函数，方便未来添加自定义属性
export default (categories = [], data = []) => {
  return {
    title: {
      text: "电影票房排行",
      subtext: "数据来自猫眼电影（非实时）",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: categories,
    },
    series: [
      {
        name: "2011年",
        type: "bar",
        data: data,
      },
    ],
  };
};
