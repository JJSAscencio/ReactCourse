import React from "react";

import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // REACT HOOK STARTS WITH 'use' need to be called inside componnet functions 
  //first element on array is a pointer to props.title, second element is a function to set new title

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'> ${props.amount} </div>
        </div>
      </Card >
    </li>
  )
}

export default ExpenseItem;
