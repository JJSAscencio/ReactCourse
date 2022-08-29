import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  //event is what happends then we select the event.target.value to know the year
  const dropdownChangeHandler = (event) => {
    // console.log(event.target.value); //logs value on selected filter
    props.onChangeFilter(event.target.value); //calls function from expenses.js
  }

  // on change has to go on select NOT in option, on select we can set now value with selected prop from expeses line 19
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;