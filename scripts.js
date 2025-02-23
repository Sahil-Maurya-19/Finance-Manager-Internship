const ctx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Revenue',
            data: [120000, 150000, 170000, 200000, 220000, 250000],
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderColor: 'red',
            borderWidth: 2,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: 'white' // Change this to your desired color for x-axis labels
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white' // Change this to your desired color for y-axis labels
                }
            }
        }
    }
});

    const transactionForm = document.getElementById("transactionForm");
    const billForm = document.getElementById("billForm");
    const transactionTableBody = document.querySelector("#transactionTable tbody");
    const billsTableBody = document.querySelector("#billsTable tbody");
    const totalIncomeElement = document.getElementById("totalIncome");
    const totalExpensesElement = document.getElementById("totalExpenses");
    const netBalanceElement = document.getElementById("netBalance");

    let totalIncome = 0;
    let totalExpenses = 0;

    // Add Transaction
    transactionForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const date = document.getElementById("transactionDate").value;
        const description = document.getElementById("transactionDescription").value;
        const amount = parseFloat(document.getElementById("transactionAmount").value);
        const type = document.getElementById("transactionType").value;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${date}</td>
            <td>${description}</td>
            <td>$${amount.toFixed(2)}</td>
            <td>${type}</td>
            <td><button class="deleteTransaction">Delete</button></td>
        `;
        transactionTableBody.appendChild(row);

        // Update totals
        if (type === "Income") {
            totalIncome += amount;
        } else {
            totalExpenses += amount;
        }
        updateTotals();

        // Clear form
        transactionForm.reset();
    });

    // Add Bill
    billForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const dueDate = document.getElementById("billDueDate").value;
        const description = document.getElementById("billDescription").value;
        const amount = parseFloat(document.getElementById("billAmount").value);
        const status = document.getElementById("billStatus").value;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${dueDate}</td>
            <td>${description}</td>
            <td>$${amount.toFixed(2)}</td>
            <td>${status}</td>
            <td><button class="deleteBill">Delete</button></td>
        `;
        billsTableBody.appendChild(row);

        // Clear form
        billForm.reset();
    });

    // Delete Transaction
    transactionTableBody.addEventListener("click", function (e) {
        if (e.target.classList.contains("deleteTransaction")) {
            const row = e.target.closest("tr");
            const amount = parseFloat(row.cells[3].innerText.replace('$', ''));
            const type = row.cells[4].innerText;

            if (type === "Income") {
                totalIncome -= amount;
            } else {
                totalExpenses -= amount;
            }
            updateTotals();
            row.remove();
        }
    });

    // Delete Bill
    billsTableBody.addEventListener("click", function (e) {
        if (e.target.classList.contains("deleteBill")) {
            const row = e.target.closest("tr");
            row.remove();
        }
    });

    function updateTotals() {
        totalIncomeElement.innerText = totalIncome.toFixed(2);
        totalExpensesElement.innerText = totalExpenses.toFixed(2);
        netBalanceElement.innerText = (totalIncome - totalExpenses).toFixed(2);
    }