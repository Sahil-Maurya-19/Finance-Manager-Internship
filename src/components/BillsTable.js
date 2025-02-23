import React, { useState } from 'react';

function BillsTable() {
  const [bills, setBills] = useState([]);

  const addBill = (e) => {
    e.preventDefault();
    const dueDate = e.target.billDueDate.value;
    const description = e.target.billDescription.value;
    const amount = parseFloat(e.target.billAmount.value);
    const status = e.target.billStatus.value;

    const newBill = { dueDate, description, amount, status };
    setBills([...bills, newBill]);

    e.target.reset();
  };

  const deleteBill = (index) => {
    setBills(bills.filter((_, i) => i !== index));
  };

  return (
    <section id="upcomingBills">
      <h2>Upcoming Bills Table</h2>
      <table id="billsTable">
        <thead>
          <tr>
            <th>Due Date</th>
            <th>Bill Description</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, index) => (
            <tr key={index}>
              <td>{bill.dueDate}</td>
              <td>{bill.description}</td>
              <td>${bill.amount.toFixed(2)}</td>
              <td>{bill.status}</td>
              <td>
                <button onClick={() => deleteBill(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Bill</h3>
      <form onSubmit={addBill}>
        <input type="date" name="billDueDate" required />
        <input type="text" name="billDescription" placeholder="Description" required />
        <input type="number" name="billAmount" placeholder="Amount" required />
        <select name="billStatus" required>
          <option value="Unpaid">Unpaid</option>
          <option value="Paid">Paid</option>
        </select>
        <button type="submit">Add Bill</button>
      </form>
    </section>
  );
}

export default BillsTable;
