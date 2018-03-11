import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
        <NavLink to='/edit/311' activeClassName='is-active'>Edit Expense</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help Desk</NavLink>
    </header>
);

export default Header;