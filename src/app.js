import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


console.log('Section 12 Lecture 124 - Jest Testing');

const store = configureStore();
store.subscribe(() => {
    const {expenses, filters} = store.getState();
    const visibleExpenses = getVisibleExpenses(expenses, filters);

    console.log(visibleExpenses);
});


// addExpense
store.dispatch(
    addExpense({
        description: 'Water Bill',
        amount: 1,
        createdAt: 3
    })
);

store.dispatch(
    addExpense({
        description: 'Gas Bill',
        amount: 2,
        createdAt: 2
    })
);

store.dispatch(
    addExpense({
        description: 'iPhone Bill',
        amount: 3,
        createdAt: 1
    })
);

store.dispatch(setTextFilter('gas'));


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));