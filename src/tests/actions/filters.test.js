import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters";
import moment from "moment";

test('should generate setTextFilter action object with text value', () => {
    const query = 'Clint';
    const action = setTextFilter(query);

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: query
    });
});

test('should generate setTextFilter action object with default values', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sortByAmount action object', () => {
    const action = sortByAmount('AMOUNT');

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'AMOUNT'
    });
});

test('should generate sortByDate action object', () => {
    const action = sortByDate('DATE');

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'DATE'
    });
});

test('should generate sortByAmount action object with defaults', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: ''
    });
});

test('should generate sortByDate action object with defaults', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: ''
    });
});

test('should generate setStartDate action object', () => {
    const action = setStartDate( moment(0) );

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate setEndDate action object', () => {
    const action = setEndDate( moment(0) );

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});