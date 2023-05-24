
import { useContext } from "react"
import { ExpensesContext } from "../Context/ExpenseContext"

const TransactionList = () => {

    const { transactions, deleteTransaction } = useContext(ExpensesContext)

    // console.log(transactions)
    return (
        <section className="history">
            <ul className="transaction__list">
                {
                    transactions.map(transact =>
                        <li className={`transaction ${transact.amount > 0 ? 'income__li' : 'expense__li'} `}
                            key={transact.id}>
                            <h4>{transact.text}</h4>
                            <h4 className={`${transact.amount > 0 ? 'green' : 'red'}`}>

                                {transact.amount < 0 ? '-' : '+'}
                                {Math.abs(transact.amount)}</h4>

                            <span  >
                                <button className="del-btn"
                                    onClick={() => deleteTransaction(transactions.id)
                                        // dispatch({ type: 'DELETE_TRANSACTION', payload: transactions.id })
                                        // console.log(transactions.id)
                                    }
                                // className="del-span"
                                >X</button>
                            </span>
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

export default TransactionList;