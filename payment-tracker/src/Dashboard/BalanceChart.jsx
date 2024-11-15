import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

function BalanceChart() {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        datasets: [{
          data: [3500, 5000],
          backgroundColor: ["#1f2937", "#14b8a6"],
        }],
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: "#e5e7eb" } } },
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
}

export default BalanceChart;
