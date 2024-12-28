import React from 'react';
import StatsCard from '../components/Dashboard/Stats/StatsCard';
import LeadsTable from '../components/Dashboard/LeadsTable';
import PerformanceChart from '../components/Dashboard/Charts/PerformanceChart';
import { dashboardStats } from '../components/Dashboard/Stats/statsData';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>
        <div className="lg:col-span-1">
          <LeadsTable />
        </div>
      </div>
    </div>
  );
}