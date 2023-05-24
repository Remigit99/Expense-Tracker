
import { createContext, useReducer } from "react";
import { ExpenseReducer } from "./ExpenseReducer";

const initialState = {
    transactions: [
        { id: 1, text: 'Course', amount: -120 },
        { id: 2, text: 'Payment', amount: +1500 },
        { id: 3, text: 'Novel', amount: -100 },
        { id: 4, text: 'Novel', amount: -100 },
        { id: 5, text: 'sent', amount: 20 },
        { id: 6, text: 'buy', amount: -200 },
        { id: 7, text: 'pay1', amount: -20 },
        { id: 8, text: 'pay2', amount: -10 },
        { id: 9, text: 'pay3', amount: +200 },
        { id: 10, text: 'pay4', amount: -30 },
        { id: 11, text: 'pay5', amount: -5 },
        { id: 12, text: 'pay6', amount: +10 },
    ]
}

// const { transactions } = initialState

export const ExpensesContext = createContext(initialState)

export const ExpenseProvider = (prop) => {

    const [state, dispatch] = useReducer(ExpenseReducer, initialState)

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    // console.log(deleteTransaction);

    return (
        <ExpensesContext.Provider value={{ transactions: state.transactions, deleteTransaction }} >
            {prop.children}
        </ExpensesContext.Provider>
    )
}
