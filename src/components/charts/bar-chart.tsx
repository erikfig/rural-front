import ReactECharts from "echarts-for-react";

export const BarChart = () => {
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
        data: [120, 200, 150, 80, 70, 110],
        type: "bar",
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />;
};
