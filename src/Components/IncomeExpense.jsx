
import { useContext } from "react";

import { ExpensesContext } from "../Context/ExpenseContext";

const IncomeExpense = () => {

    const { transactions } = useContext(ExpensesContext)

    const incomeAmounts = transactions.map(transaction => transaction.amount > 0 ? transaction.amount : 0)
    const expenseAmounts = transactions.map(transaction => transaction.amount < 0 ? Math.abs(transaction.amount) : 0)
    // console.log(incomeAmounts)
    const incomeTotal = incomeAmounts.reduce((acc, item) => (acc += item), 0)
    const expenseTotal = expenseAmounts.reduce((acc, item) => (acc += item), 0)
    // console.log(typeof incomeTotal)

    return (
        <section className="income__expense">
            <div className="income">
                <h4>INCOME</h4>
                <h2 className="green">${incomeTotal}</h2>

            </div>
            <div className="expense">
                <h4>EXPENSE</h4>
                <h2 className="red">${expenseTotal}</h2>
            </div>
        </section>
    )
}

export default IncomeExpense