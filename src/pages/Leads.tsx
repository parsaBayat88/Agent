import React from 'react';
import LeadsTable from '../components/Leads/LeadsTable';

export default function Leads() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Lead Management</h1>
      <LeadsTable showAllLeads={true} />
    </div>
  );
}