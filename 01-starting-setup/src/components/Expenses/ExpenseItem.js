import React, { useState } from "react";

import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // REACT HOOK STARTS WITH 'use' need to be called inside componnet functions 
  //first element on array is a pointer to props.title, second element is a function to set new title
  const [title, setTitle] = useState(props.title)

  console.log('ExpenseItem evaluated by react');

  const clickHandler = () => {
    setTitle('Updated!') //asign new value to function
    console.log(title);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'> ${props.amount} </div>
      </div>
      <button onClick={clickHandler} >Change Title</button>
    </Card >
  )
}

export default ExpenseItem;
