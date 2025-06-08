import ReactECharts from "echarts-for-react";

export const ScatterChart = () => {
  const option = {
    color: ["#7f9356", "#50e3c2", "#f5a623", "#9b9b9b", "#ff6f61"],
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: [
          [10, 8],
          [20, 15],
          [30, 25],
          [40, 35],
          [50, 45],
        ],
        type: "scatter",
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />;
};
