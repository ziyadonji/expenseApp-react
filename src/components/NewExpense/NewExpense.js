import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const expenseDataSaveHandler=(enteredData)=>{
    const expenseData={
        ...enteredData,
        id : Math.random()
    }
    props.onAddExpense(expenseData)
    console.log(expenseData);
  }
  const editingHandler = () => {
    setIsEditing(true);
  }
  const cancelHandler = () => {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing&&<button onClick={editingHandler}> Add New Expense</button>}
      {isEditing&&<ExpenseForm onCancel={cancelHandler} onExpenseDataSave={expenseDataSaveHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
