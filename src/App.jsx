
import Balance from "./Components/Balance"
import IncomeExpense from "./Components/IncomeExpense"
import TransactionList from "./Components/TransactionList"
import AddTransaction from "./Components/AddTransaction"


const App = () => {
  return (


    <main>
      <div className="container">
        <h1>My Expense Tracker</h1>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </main>


  )
}

export default App
