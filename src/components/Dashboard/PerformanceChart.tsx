import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
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

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const data = {
  labels,
  datasets: [
    {
      label: 'Leads',
      data: [65, 78, 90, 85, 95, 110],
      borderColor: '#7c3aed',
      backgroundColor: 'rgba(124, 58, 237, 0.1)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Conversions',
      data: [25, 35, 40, 45, 50, 55],
      borderColor: '#06b6d4',
      backgroundColor: 'rgba(6, 182, 212, 0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};

export default function PerformanceChart() {
  return (
    <div className="glass-card rounded-2xl p-6 shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
      <div className="h-[300px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}