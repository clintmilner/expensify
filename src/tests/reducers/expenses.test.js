import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import uuid from "uuid";
import moment from "moment";

test('should set default state', () => {
    const state = expensesReducer( undefined, { type: '@@INIT' } );
    expect(state).toEqual([]);
});

test ('should remove expense by ID', () => {
    const action = { type: 'REMOVE_EXPENSE', expense: { id: expenses[1].id} };
    const state = expensesReducer( expenses, action );

    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test ('should NOT remove expense if ID is not found', () => {
    const action = { type: 'REMOVE_EXPENSE', expense: { id: '-1'} };
    const state = expensesReducer( expenses, action );

    expect(state).toEqual(expenses);
});

test('should add a new expense', () => {
    const expense = { id: '4', description: '311 Day Tickets', note: '', amount: 3113311, createdAt: moment(0).add(5, 'days').valueOf() };
    const action = { type: 'ADD_EXPENSE', expense };
    const state = expensesReducer( expenses, action );

    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const expense = expenses[2];
    expense.description = 'Credit Card Bill Payment';
    const action = { type: 'EDIT_EXPENSE',  expense };
    const state = expensesReducer( expenses, action );

    expect(state).toEqual([ expenses[0], expenses[1], expense ]);
});

test('should NOT edit an expense if ID is not found', () => {
    const expense = {
        id: '-1',
        description: 'NEW',
        note: '',
        amount: 1,
        createdAt: moment(0).valueOf()
    };

    const action = { type: 'EDIT_EXPENSE', expense };
    const state = expensesReducer( expenses, action );

    expect(state).toEqual(expenses);

});