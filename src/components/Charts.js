import React, { useEffect } from "react";
import { Chart } from "chart.js";

const Charts = () => {
  useEffect(() => {
    const ctx = document.getElementById("revenueChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Revenue',
          data: [120000, 150000, 170000, 200000, 220000, 250000],
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          borderColor: 'red',
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            ticks: { color: 'white' }
          },
          y: {
            beginAtZero: true,
            ticks: { color: 'white' }
          }
        }
      }
    });
  }, []);

  return (
    <div className="charts">
      <h2>Financial Trends</h2>
      <canvas id="revenueChart"></canvas>
    </div>
  );
};

export default Charts;
