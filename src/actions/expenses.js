import database from '../firebase/firebase';

// how this works...
// component calls these action generators
// action generators return an object
// the component dispatches the object
// redux store changes


// using middleware (thunk)
// component calls these action generators
// action generators return an function
// the component dispatches the function
// function runs (has the ability to dispatch an object which changes the redux store)


// ==== ACTION GENERATORS ==== \\
/*
    ADD_EXPENSE
    REMOVE_EXPENSE
    EDIT_EXPENSE
*/
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});
export const startAddExpense = (expenseData = {}) => {
    // this function is only returned because of the thunk middleware...
    return (dispatch) => {
        const {description = '', note = '', amount = 0, createdAt = 0} = expenseData;
        const expense = {description, note, amount, createdAt:createdAt.valueOf()};
        return database
            .ref('expenses')
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            });
    };
};
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});