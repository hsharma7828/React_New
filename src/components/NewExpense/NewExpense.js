import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, isSetEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    isSetEditing(false);
  };

  const startEditingHandler = () => {
    isSetEditing(true);
  };

  const stopEditingHandler = () => {
    isSetEditing(false);
  };

  return (
    <div className="new-expense">
      <div className="new-expense__actions">
        {!isEditing && (
          <button type="button" onClick={startEditingHandler}>
            Add New Expense
          </button>
        )}
      </div>
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
