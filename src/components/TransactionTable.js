import React, { useState } from 'react';

function TransactionTable({ setTotalIncome, setTotalExpenses }) {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (e) => {
    e.preventDefault();
    const date = e.target.transactionDate.value;
    const description = e.target.transactionDescription.value;
    const amount = parseFloat(e.target.transactionAmount.value);
    const type = e.target.transactionType.value;

    const newTransaction = { date, description, amount, type };
    setTransactions([...transactions, newTransaction]);

    if (type === "Income") {
      setTotalIncome(prev => prev + amount);
    } else {
      setTotalExpenses(prev => prev + amount);
    }

    e.target.reset();
  };

  const deleteTransaction = (index, amount, type) => {
    setTransactions(transactions.filter((_, i) => i !== index));

    if (type === "Income") {
      setTotalIncome(prev => prev - amount);
    } else {
      setTotalExpenses(prev => prev - amount);
    }
  };

  return (
    <section id="transactions">
      <h2>Transaction Table</h2>
      <table id="transactionTable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{transaction.type}</td>
              <td>
                <button 
                  onClick={() => deleteTransaction(index, transaction.amount, transaction.type)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Transaction</h3>
      <form onSubmit={addTransaction}>
        <input type="date" name="transactionDate" required />
        <input type="text" name="transactionDescription" placeholder="Description" required />
        <input type="number" name="transactionAmount" placeholder="Amount" required />
        <select name="transactionType" required>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>
    </section>
  );
}

export default TransactionTable;
