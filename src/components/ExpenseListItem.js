import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = (props) => {
    const {key, id, description, amount, createdAt} = props.expense;
    return (
        <div key={key}>
            <h3>{description}</h3>
            <p>{amount} - {createdAt}</p>
            <button onClick={() => {
                props.dispatch(removeExpense( {id} ));
            }}>Remove Expense</button>
        </div>
    );
};

export default connect()(ExpenseListItem); // we don't need state, so connect() can be empty!