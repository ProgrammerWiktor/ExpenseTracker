import React from 'react';
import './ExpensesFilter.css';

const ExpenseFilter = props => {
    const dropdownChangeHandler = event => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filtruj przez rok</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option vaule='2023'>2023</option>
                    <option vaule='2022'>2022</option>
                    <option vaule='2021'>2021</option>
                    <option vaule='2020'>2020</option>
                    <option vaule='2019'>2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;