import { useState } from "react";
import Card from "../UI/Cards";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear; 
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses = {filterExpenses}/>
      <ExpenseList item={filterExpenses}/>
    </Card>
  );
};

export default Expenses;
