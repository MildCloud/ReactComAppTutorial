import React from 'react';

import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found</p>;

  if (props.items.length > 0) {
    expensesContent = props.items.map((item) => (
      <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
      />
    ));
  }

  return expensesContent;
};

export default ExpensesList
