import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";

interface PieChartProps {
  name: string;
  data?: { value: number; name: string }[];
  height?: string;
}

export const PieChart: React.FC<PieChartProps> = ({ name, data, height = '400px' }) => {
  const [series, setSeries] = React.useState({});

  useEffect(() => {
    if (!data) return;

    setSeries({
      name: name,
      type: "pie",
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
          show: false,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: data,
    });

  }, [data, name]);

  const option = {
    color: ["#7f9356", "#50e3c2", "#f5a623", "#9b9b9b", "#ff6f61"],
    tooltip: {
      trigger: "item",
    },
    legend: {
      show: true,
    },
    series,
  };

  return <ReactECharts option={option} style={{ height, width: "100%" }} />;
};
