import ReactECharts from "echarts-for-react";

export const RadarChart = () => {
  const option = {
    color: ["#7f9356", "#50e3c2", "#f5a623", "#9b9b9b", "#ff6f61"],
    tooltip: {},
    radar: {
      indicator: [
        { name: "Sales", max: 6500 },
        { name: "Administration", max: 16000 },
        { name: "Information Technology", max: 30000 },
        { name: "Customer Support", max: 38000 },
        { name: "Development", max: 52000 },
        { name: "Marketing", max: 25000 },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: "Allocated Budget",
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: "Actual Spending",
          },
        ],
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />;
};
