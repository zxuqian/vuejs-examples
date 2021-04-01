export default (data) => ({
  title: {
    text: "电影当日综合票房占比",
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
  tooltip: {
    trigger: "item",
    padding: [14, 24],
    borderWidth: 0,
    extraCssText: "box-shadow: 0 0 24px hsl(0, 100%, 50%, 0.2);",
    textStyle: {
      fontWeight: "bold",
      color: "hsl(0deg, 0%, 40%)",
    },
  },
  color: [
    "hsl(0deg, 100%, 70%)",
    "hsl(0deg, 90%, 60%)",
    "hsl(0deg, 80%, 50%)",
    "hsl(0deg, 70%, 45%)",
    "hsl(0deg, 60%, 40%)",
    "hsl(0deg, 50%, 35%)",
    "hsl(0deg, 40%, 30%)",
  ],
  series: [
    {
      type: "pie",
      radius: ["50%", "70%"],
      startAngle: 160,
      top: 60,
      label: {
        show: true,
        position: "outer",
        alignTo: "labelLine",
        edgeDistance: "3%",
        distanceToLabelLine: 20,
        color: "hsl(0deg, 100%, 98%)",
        fontSize: 14,
        fontWeight: "bold",
        formatter: "{b} {d|{d}%}",
        rich: {
          d: {
            backgroundColor: "hsl(0deg, 100%, 70%)",
            borderRadius: 4,
            padding: [4, 8],
            color: "white",
            fontWeight: "bold",
          },
        },
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 18,
          fontWeight: "bold",
        },
      },
      labelLine: {
        length: 10,
        length2: "10%",
        smooth: true,
        lineStyle: {
          type: "dashed",
          // opacity: 0.8,
        },
      },
      data: data,
    },
  ],
  backgroundColor: "transparent",
});
