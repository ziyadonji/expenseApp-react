import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFIlter";

function Expenses(props) {
  const [expenses, setExpenses] = useState(props.expenses);
  const [label, setLabel] = useState("2020");
  const selectLabelHandler = (labelValue) => {
    setLabel(labelValue);
    const newexpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear() === parseInt(labelValue);
    });
    setExpenses(newexpenses);
  };

  return (
    <ul>
      <Card className="expenses">
        <ExpensesFilter
          selected={label}
          onSelectLabel={selectLabelHandler}
        ></ExpensesFilter>
        <ExpensesList expenses={expenses}></ExpensesList>
      </Card>
    </ul>
  );
}

export default Expenses;
