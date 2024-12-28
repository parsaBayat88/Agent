import { ChartOptions } from 'chart.js';

export const chartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        boxWidth: 6,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      border: {
        dash: [5, 5],
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
      },
    },
  },
};