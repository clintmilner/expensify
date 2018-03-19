import {addExpense, editExpense, removeExpense} from "../../actions/expenses";


test('should set-up removeExpense action object', () => {
    const action = removeExpense( {id: '123-abc'} );

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expense: '123-abc'
    });
});


test('should set-up editExpense action object', () => {
    const action = editExpense('123-abc', {
                description: 'New description added',
                note: 'New note added',
                amount: 311,
                createdAt: 0
            });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123-abc',
        updates: {
            description: 'New description added',
            note: 'New note added',
            amount: 311,
            createdAt: 0
        }
    });
});


test('should set-up addExpense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: '311',
        createdAt: 1000,
        note: 'This was last month payment'
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});


test('should set-up addExpense action object with default values', () => {

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description:'',
            note:'',
            amount:0,
            createdAt:0,
            id: expect.any(String)
        }
    });
});
