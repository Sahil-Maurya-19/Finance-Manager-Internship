import React from "react";

const Cards = ({ totalIncome, totalExpenses }) => {
  return (
    <div className="cards">
      <div className="card">
        <h3>Total Revenue</h3>
        <p>${totalIncome.toFixed(2)}</p>
      </div>
      <div className="card">
        <h3>Total Expenses</h3>
        <p>${totalExpenses.toFixed(2)}</p>
      </div>
      <div className="card">
        <h3>Net Profit</h3>
        <p>${(totalIncome - totalExpenses).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cards;
