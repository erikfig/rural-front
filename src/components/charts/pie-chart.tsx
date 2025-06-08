import ReactECharts from "echarts-for-react";

export const PieChart = () => {
  const option = {
    color: ["#7f9356", "#50e3c2", "#f5a623", "#9b9b9b", "#ff6f61"],
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access Source",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Agricultura" },
          { value: 735, name: "Pecuária" },
          { value: 580, name: "Silvicultura" },
          { value: 484, name: "Aquicultura" },
          { value: 300, name: "Agroindústria" },
        ],
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />;
};
