
import { useContext } from "react";

import { ExpensesContext } from "../Context/ExpenseContext";

const Balance = () => {

    const { transactions } = useContext(ExpensesContext)
    const amounts = transactions.map(transaction => transaction.amount)
    // console.log(amounts)
    const total = amounts.reduce((acc, item) => (acc += item), 0)

    return (
        <section className="balance">
            <h4>YOUR BALANCE</h4>
            <h2>${total}</h2>
        </section>
    )
}

export default Balance