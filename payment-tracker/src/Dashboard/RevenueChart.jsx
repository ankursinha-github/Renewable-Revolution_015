import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import { getDatabase, ref, onValue } from "firebase/database";

function RevenueChart() {
  const chartRef = useRef();
  const [chartData, setChartData] = useState({ total: 0, paid: 0, unpaid: 0 });

  useEffect(() => {
    const db = getDatabase();
    const invoicesRef = ref(db, "invoices");

    // Fetch data from Firebase
    onValue(invoicesRef, (snapshot) => {
      const data = snapshot.val();
      let total = 0;
      let paid = 0;
      let unpaid = 0;

      for (const id in data) {
        const invoice = data[id];
        total += invoice.totalAmount || 0;
        paid += invoice.paid || 0;
        unpaid += invoice.due || 0;
      }

      setChartData({ total, paid, unpaid });
    });
  }, []);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart instance if it exists
    if (ctx.chart) {
      ctx.chart.destroy();
    }

    // Create new chart
    ctx.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Total Revenue", "Paid", "Unpaid"],
        datasets: [
          {
            label: "Amount ($)",
            data: [chartData.total, chartData.paid, chartData.unpaid],
            backgroundColor: [
              "rgba(59, 130, 246, 0.6)", // Blue for total
              "rgba(34, 197, 94, 0.6)", // Green for paid
              "rgba(239, 68, 68, 0.6)", // Red for unpaid
            ],
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
  }, [chartData]);

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl text-white font-bold mb-4">Revenue Overview</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default RevenueChart;
