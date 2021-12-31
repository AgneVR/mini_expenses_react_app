import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = ({ items }) => {
  const [getSelectedValue, setSelectedValue] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setSelectedValue(selectedYear);
  };

  const filteredExpenses = items.filter((el) => {
    return el.date.getFullYear().toString() === getSelectedValue;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={getSelectedValue} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
