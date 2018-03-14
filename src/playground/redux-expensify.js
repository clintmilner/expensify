console.log( 'redux-expensify loaded and running' );


import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';



// ==== ACTION GENERATORS ==== \\
/*
    ADD_EXPENSE
    REMOVE_EXPENSE
    EDIT_EXPENSE
    SET_TEXT_FILTER
    SORT_BY_AMOUNT
    SORT_BY_DATE
    SET_START_DATE
    SET_END_DATE
*/

const addExpense = ({description='', note='', amount=0, createdAt=0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {id}
});
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
const sortByAmount = (sortBy = '') => ({
    type: 'SORT_BY_AMOUNT',
    sortBy
});
const sortByDate = (sortBy = '') => ({
    type: 'SORT_BY_DATE',
    sortBy
});
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// creating 2 reducers for each part of STATE,
// then using combineReducer to combine them

// EXPENSES ARRAY REDUCER
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [ ...state, action.expense ];
        case 'REMOVE_EXPENSE':
            return state.filter( (expense) => (expense.id !== action.expense.id));
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                if(expense.id === action.id)
                {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

// FILTERS OBJ REDUCER
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};


// Get Visible Expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter( (expense) => {
        const startDateMatch    = typeof startDate !== 'number' || expense.createdAt >= startDate,
              endDateMatch      = typeof endDate !== 'number'   || expense.createdAt <= endDate,
              textMatch         =                                  expense.description.toLowerCase().includes( text.toLowerCase() );

        return startDateMatch && endDateMatch && textMatch;
    })
    .sort( (a,b) => {
        if( sortBy === 'date' ){
            return a.createdAt < b.createdAt ? 1 : -1; // sortBy DESC
        }
        else if( sortBy === 'amount' ){
            return a.amount < b.amount ? 1 : -1 // sortBy High->Low
        }
    });
};


// Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);


store.subscribe(() => {
    const {expenses, filters} = store.getState();
    const visibleExpenses = getVisibleExpenses( expenses, filters );

    console.log( visibleExpenses );
});

const e1 = store.dispatch( addExpense({ description:'Rent', amount:1, createdAt: 1 }) );
const e2 = store.dispatch( addExpense({ description:'Redbull', amount:2, createdAt: 2 }) );
const e3 = store.dispatch( addExpense({ description:'Lunch', amount:3, createdAt: 3 }) );

// store.dispatch( removeExpense({ id: e1.expense.id }) ); // remove rent

// store.dispatch( editExpense( e2.expense.id, {amount: 311} ) );


// store.dispatch( setTextFilter('lunch') );
// store.dispatch( setTextFilter('') );

store.dispatch( sortByAmount() );
// store.dispatch( sortByDate() );

// store.dispatch( setStartDate(0) );
// store.dispatch( setEndDate(10) );

// store.dispatch( setStartDate() );
// store.dispatch( setEndDate() );

const demoState = {
    expenses: [{
        id: 'my-id-here',
        description: 'rent for january',
        note: 'this was the final payment for Clint because he used to live there, etc',
        amount: 31100,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};