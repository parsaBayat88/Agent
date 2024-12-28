import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Leads Generated',
      data: [18, 25, 23, 30, 28, 15, 23],
      backgroundColor: 'rgba(124, 58, 237, 0.8)',
      borderRadius: 8,
    },
    {
      label: 'Successful Contacts',
      data: [12, 19, 15, 22, 20, 10, 11],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderRadius: 8,
    },
  ],
};

export default function AchievementChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Weekly Performance</h2>
      <div className="h-[300px]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}