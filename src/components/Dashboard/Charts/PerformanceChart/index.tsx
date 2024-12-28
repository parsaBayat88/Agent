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
import { chartOptions } from './config';
import { chartData } from './data';

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

export default function PerformanceChart() {
  return (
    <div className="glass-card rounded-2xl p-6 shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
      <div className="h-[300px]">
        <Line options={chartOptions} data={chartData} />
      </div>
    </div>
  );
}