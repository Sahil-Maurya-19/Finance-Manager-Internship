import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import TransactionTable from './TransactionTable';
import BillsTable from './BillsTable';

function Dashboard() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const revenueChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Revenue',
      data: [120000, 150000, 170000, 200000, 220000, 250000],
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
      borderColor: 'red',
      borderWidth: 2,
      fill: true,
    }],
  };

  return (
    <div className="content">
      <h1>Welcome to Your Dashboard</h1>
      <div className="cards">
        <div className="card">
          <h3>Total Revenue</h3>
          <p>${totalIncome}</p>
        </div>
        <div className="card">
          <h3>Total Expenses</h3>
          <p>${totalExpenses}</p>
        </div>
        <div className="card">
          <h3>Net Profit</h3>
          <p>${(totalIncome - totalExpenses).toFixed(2)}</p>
        </div>
      </div>

      <div className="charts">
        <h2>Financial Trends</h2>
        <Line data={revenueChartData} />
      </div>

      <TransactionTable 
        setTotalIncome={setTotalIncome} 
        setTotalExpenses={setTotalExpenses} 
      />
      
      <BillsTable />
    </div>
  );
}

export default Dashboard;
