// 导出一个函数，方便未来添加自定义属性
export default (categories = [], data = []) => {
  return {
    title: {
      text: "电影当日综合票房排行",
      subtext: "数据来自猫眼电影（非实时）",
      textStyle: {
        fontSize: 24,
        color: "hsl(0deg, 100%, 100%)",
      },
      subtextStyle: {
        fontSize: 14,
        color: "hsl(0deg, 20%, 75%)",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: 80,
      containLabel: true,
    },

    xAxis: {
      type: "value",
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#333",
        },
      },
      axisLabel: {
        fontWeight: "bold",
        color: "#eee",
        fontSize: 14,
        fontFamily: "Raleway",
        margin: 24,
      },
    },
    yAxis: {
      type: "category",
      data: categories,
      inverse: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontWeight: "bold",
        color: "hsl(0deg, 100%, 98%)",
        fontSize: 14,
        margin: 24,
      },
    },
    series: [
      {
        name: "综合票房",
        type: "bar",
        data: data,
        barMaxWidth: 14,
        emphasis: {
          focus: "self",
          label: {
            show: true,
            position: "right",
            color: "hsl(0deg, 100%, 60%)",
            fontSize: 14,
            fontWeight: "bold",
          },
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "hsl(0deg, 100%, 60%)",
                },
                {
                  offset: 1,
                  color: "hsl(0deg, 80%, 60%)",
                },
              ],
            },
            shadowBlur: 24,
          },
        },
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "hsl(0deg, 80%, 50%)",
              },
              {
                offset: 1,
                color: "hsl(0deg, 100%, 60%)",
              },
            ],
          },
          borderRadius: [0, 4, 4, 0],
          shadowBlur: 8,
          shadowColor: "hsl(0deg, 100%, 50%, 0.3)",
        },
      },
    ],
    backgroundColor: "transparent",
    visualMap: [
      {
        show: false,
        min: 0,
        max: 3600,
        dimension: 0,
        inRange: {
          opacity: [0.3, 1],
        },
      },
    ],
  };
};
