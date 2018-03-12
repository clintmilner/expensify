console.log( 'redux 101' );

import { createStore } from 'redux';



// Action Generators
// create Action Objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy : incrementBy // this could be destructured more, but kept like this for clarity
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


const store = createStore( (state={ count:0 }, action) => {

    switch (action.type){
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return { count: state.count - decrementBy };
        case 'SET':
            return { count: action.count };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
});


store.subscribe( () => {
    console.log( 'store changed', store.getState() );
});

store.dispatch( incrementCount() ); // 1
store.dispatch( incrementCount({ incrementBy: 5 })); // 6

store.dispatch( resetCount() ); // 0

store.dispatch( decrementCount()); // -1
store.dispatch( decrementCount({ decrementBy: 10 })); // -11

store.dispatch( setCount({ count: 311 })); // 311