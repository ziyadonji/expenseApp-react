import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle]=useState("");
    const [enteredDate, setEnteredDate]=useState("");
    const [enteredAmount, setEnteredAmount]=useState("");

    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
        // console.log(enteredAmount)
    }
    const titleChangeHandler =(event)=>{
        setEnteredTitle(event.target.value);
    }

    const dateChangeHandler =(event)=>{
        setEnteredDate(event.target.value);
    }
     
    const submitHandler=(event)=>{
       props.onCancel();
        event.preventDefault();
        const expenseData={
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date( enteredDate)
        }
        props.onExpenseDataSave(expenseData);
        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle("");
       console.log(expenseData);
    }
    return(<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
          { console.log(enteredAmount)}
            <label> Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
          </div>
          <div className="new-expense__control">
            <label> Date</label>
            <input type="date" value={enteredDate} min="2022-09-02" max="2023-01-05" onChange={dateChangeHandler}></input>
          </div>
          <div className="new-expense__control">
            <label> amount</label>
           
            <input type="number" value={ enteredAmount} onChange={amountChangeHandler}></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
        </div>
      </form>);
  
};

export default ExpenseForm;
