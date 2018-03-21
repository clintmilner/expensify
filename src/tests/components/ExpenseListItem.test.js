import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render an instance of ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});