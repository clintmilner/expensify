console.log('redux 101');

import {createStore} from 'redux';


// Action Generators
// create Action Objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy // this could be destructured more, but kept like this for clarity
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});


// this is a reducer in Redux world
// https://redux.js.org/basics/reducers

// 1) Reducers are pure functions -
//    a) output is determined by input (things outside of function scope aren't changed or used)
//    b) things outside of reducer scope aren't changed by reducer functions
// 2) Never change STATE or ACTION - (NO MUTATIONS ALLOWED)

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + action.incrementBy};
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {count: state.count - decrementBy};
        case 'SET':
            return {count: action.count};
        case 'RESET':
            return {count: 0};
        default:
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log('store changed', store.getState());
});

store.dispatch(incrementCount()); // 1
store.dispatch(incrementCount({incrementBy: 5})); // 6

store.dispatch(resetCount()); // 0

store.dispatch(decrementCount()); // -1
store.dispatch(decrementCount({decrementBy: 10})); // -11

store.dispatch(setCount({count: 311})); // 311