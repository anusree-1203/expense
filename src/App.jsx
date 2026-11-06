
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  function addExpense() {
    if (name.trim() !== "" && amount !== "" && Number(amount) > 0) {
      setExpenses([
        ...expenses,
        { name: name, amount: Number(amount) }
      ]);
      setName("");
      setAmount("");
    }
  }

  function deleteExpense(index) {
    setExpenses(expenses.filter((_, i) => i !== index));
  }

  const total = expenses.reduce(
    (sum, item) => sum + item.amount, 0
  );

  return (
    <div className="container">
      <h1>💰 Expense Tracker</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={addExpense}>Add Expense</button>
      </div>

      <h2>Expense List</h2>

      <div className="expense-list">
        {expenses.length === 0 ? (
          <p className="empty">No expenses added yet!</p>
        ) : (
          expenses.map((item, index) => (
            <div className="expense-item" key={index}>
              <span>{item.name}</span>
              <span>₹{item.amount}</span>
              <button
                className="delete"
                onClick={() => deleteExpense(index)}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      <div className="total">
        <h2>Total Amount: ₹{total}</h2>
      </div>
    </div>
  );
}

export default App;
