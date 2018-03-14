import React from 'react';

const ExpenseListItem = (props) => {
    const {key, description, amount, createdAt} = props.expense;
    return (
        <div key={key}>
            <h3>{description}</h3>
            <p>{amount} - {createdAt}</p>
        </div>
    );
};

export default ExpenseListItem;