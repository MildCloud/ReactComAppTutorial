import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString
        };
        props.onAddExpense(expenseData);
    };

    const clickNewHandler = () => {
        setShowExpenseForm(true);
    };

    const onCompleteNewHandler = () => {
        setShowExpenseForm(false);
    };

    let expenseFormContext = <button onClick={clickNewHandler}>Add New Expense</button>;

    if (showExpenseForm) {
        expenseFormContext = <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={onCompleteNewHandler}/>;
    }


    return (
        <div className="new-expense">
            {expenseFormContext}
        </div>
    );
};

export default NewExpense;
