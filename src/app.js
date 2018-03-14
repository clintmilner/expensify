import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


console.log('Section 11 Lecture 103');

const store = configureStore();
store.subscribe( () => {
    const {expenses, filters} = store.getState();
    const visibleExpenses = getVisibleExpenses( expenses, filters );

    console.log( visibleExpenses );
});


// addExpense
store.dispatch(
    addExpense({
        description: 'Water Bill',
        amount: 311,
        createdAt: 1
    })
);

store.dispatch(
    addExpense({
        description: 'Gas Bill',
        amount: 600,
        createdAt: 2
    })
);

store.dispatch( setTextFilter('bill') );



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));