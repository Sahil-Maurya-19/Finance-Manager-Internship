import React from 'react';
import { Progress } from "antd";

// total transaction
const Analytics = ({ allTransaction }) => {
    const totalTransaction = allTransaction.length;
    const totalIncomeTransactions = allTransaction.filter(transaction => transaction.type === 'income');
    const totalExpenseTransactions = allTransaction.filter(transaction => transaction.type === 'expense');
    const totalIncomePercent = (totalIncomeTransactions.length / totalTransaction) * 100;
    const totalExpensePercent = (totalExpenseTransactions.length / totalTransaction) * 100;

    // total turnover
    const totalTurnover = allTransaction.reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalIncomeTurnover = allTransaction.filter((transaction) => transaction.type === "income").reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalExpenseTurnover = allTransaction.filter((transaction) => transaction.type === "expense").reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalIncomeTurnoverPercent = (totalIncomeTurnover/totalTurnover)*100;
    const totalExpenseTurnoverPercent = (totalExpenseTurnover/totalTurnover)*100;
    return (
        <>
            <div className='row m-3'>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-header'>
                            TotalTransactions : {totalTransaction}
                        </div>
                        <div className='card-body'>
                            <h5 className='text-success'>Income : {totalIncomeTransactions.length}</h5>
                            <h5 className='text-danger'>Expense : {totalExpenseTransactions.length} </h5>
                        </div>
                        <Progress type='circle' strokeColor={'green'} className='mx-2' percent={totalIncomePercent.toFixed(0)} />

                        <Progress type='circle' strokeColor={'red'} className='mx-2' percent={totalExpensePercent.toFixed(0)} />
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-header'>
                            Total Turnover : {totalTurnover}
                        </div>
                        <div className='card-body'>
                            <h5 className='text-success'>Income : {totalIncomeTurnover}</h5>
                            <h5 className='text-danger'>Expense : {totalExpenseTurnover} </h5>
                        </div>
                        <Progress type='circle' strokeColor={'green'} className='mx-2' percent={totalIncomeTurnoverPercent.toFixed(0)} />

                        <Progress type='circle' strokeColor={'red'} className='mx-2' percent={totalExpenseTurnoverPercent.toFixed(0)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics