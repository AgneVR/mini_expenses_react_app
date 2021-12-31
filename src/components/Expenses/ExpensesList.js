import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h3 className='expenses-list__fallback'>No expenses found</h3>;
  }
  return (
    <ul className='expenses-list'>
      {expenses.map((el, i) => (
        <ExpenseItem key={i} title={el.title} amount={el.amount} date={el.date} />
      ))}
    </ul>
  );
};

export default ExpensesList;
