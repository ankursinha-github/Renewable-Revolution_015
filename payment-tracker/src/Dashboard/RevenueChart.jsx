import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

function RevenueChart() {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Monthly labels
        datasets: [
          {
            label: "Revenue ($)",
            data: [3000, 4000, 3500, 5000, 7000, 6000, 8000], // Revenue data
            backgroundColor: "rgba(20, 184, 166, 0.6)",
            borderColor: "rgba(255, 255, 255, 0.8)",
            borderWidth: 2,
            borderRadius: 10,
          },
          {
            label: "Income ($)",
            data: [2000, 3000, 2500, 4000, 6000, 5500, 7000], // Income data
            backgroundColor: "rgba(34, 197, 94, 0.6)", // Green for income
            borderColor: "rgba(255, 255, 255, 0.8)",
            borderWidth: 2,
            borderRadius: 10,
          },
          {
            label: "Expenses ($)",
            data: [1000, 1000, 1000, 1000, 1000, 500, 1000], // Expenses data
            backgroundColor: "rgba(239, 68, 68, 0.6)", // Red for expenses
            borderColor: "rgba(255, 255, 255, 0.8)",
            borderWidth: 2,
            borderRadius: 10,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: "#e5e7eb" },
          },
          x: {
            ticks: { color: "#e5e7eb" },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#e5e7eb",
            },
          },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
}

export default RevenueChart;
