import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper)
        .toMatchSnapshot();
});

test('should render ExpenseForm with expense data correctly', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper)
        .toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { /* empty on purpose */
        }
    });
    expect(wrapper.state('error').length)
        .toBeGreaterThan(0);
    expect(wrapper)
        .toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'The New Description';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('description'))
        .toBe(value);
});

test('should set the note on textarea change', () => {
    const value = 'The New Note';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note'))
        .toBe(value);
});

test('should set amount if valid amount', () => {
    const value = '13.58';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });

    expect(wrapper.state('amount'))
        .toBe(value);
});

test('should not set amount if invalid amount', () => {
    const value = '153.2.34';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount'))
        .toBe('');
});

test('should call onSubmit prop on valid form submit', () => {
    const onSubmitSpy = jest.fn();
    const {description, amount, note, createdAt} = expenses[0];
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { /* empty on purpose */
        }
    });

    expect(wrapper.state('error'))
        .toBe('');

    expect(onSubmitSpy)
        .toHaveBeenLastCalledWith({description, amount, note, createdAt});
});

test('should set new date onDateChange', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(moment(now));

    expect(wrapper.state('createdAt'))
        .toEqual(now);
});

test('should set calendarFocused to true', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});

    expect(wrapper.state('calendarFocused'))
        .toEqual(focused);
});