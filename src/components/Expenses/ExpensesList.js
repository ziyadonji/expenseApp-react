import react from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No items found</h2>
};
return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => {
        return <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount}></ExpenseItem>;
      })}
    </ul>
  );
}

export default ExpensesList;
