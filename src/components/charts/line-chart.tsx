import ReactECharts from "echarts-for-react";

export const LineChart = () => {
  const option = {
    color: ["#7f9356", "#50e3c2", "#f5a623", "#9b9b9b", "#ff6f61"],
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330],
        type: "line",
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />;
};
