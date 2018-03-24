import React from 'react';
import { shallow } from 'enzyme';
import AddExpensePage from '../../components/AddExpensePage';

test('should render AddExpensePage', () => {

    // spies
    const onSubmit = jest.fn();
    const history = { push: jest.fn() };

    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);

    expect(wrapper).toMatchSnapshot();
});