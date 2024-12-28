export const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
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