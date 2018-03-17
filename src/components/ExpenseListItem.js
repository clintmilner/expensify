import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = (props) => {
    const {key, id, description, amount, createdAt} = props.expense;
    return (
        <div key={key}>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>{amount}</p>
        </div>
    );
};

export default ExpenseListItem;