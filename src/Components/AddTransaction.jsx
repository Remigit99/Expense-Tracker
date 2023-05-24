import { useState } from "react"


const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    return (
        <section className="add__transaction">
            <h3>Add new transaction</h3>
            <form >
                <div className="transact__text">
                    <h3>Text</h3>
                    <input type="text" name="" id="" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
                </div>

                <div className="amount">
                    <h3>Amount</h3>
                    <p>(Nevative - Expense, Positive - Income)</p>
                    <input type="number" name="" id="" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>

                <button type="submit" className="add"> Add transaction</button>
            </form>
        </section>
    )
}

export default AddTransaction