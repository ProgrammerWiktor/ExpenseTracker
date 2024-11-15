import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Tytuł</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Kwota</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Data</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Anuluj</button>
                <button type='submit'>Dodaj wydatek</button>
            </div>
        </form>
    );
}

export default ExpenseForm;