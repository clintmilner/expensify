import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log('app.js has loaded and is running and loading via webpack-dev-server');

const ExpenseDashboardPage = () => (
    <div>
        This is the Expense Dashboard Page
    </div>
);

const AddExpensePage = () => (
    <div>
        This is the Add Expense Page
    </div>
);


const EditExpensePage = () => (
    <div>
        This is the Edit Expense Page
    </div>
);

const HelpPage = () => (
    <div>
        This is the Help Page
    </div>
);

const NotFoundPage = () => (
    <div>
        Page Not Found 404
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={ExpenseDashboardPage} exact={true} />
            <Route path='/create' component={AddExpensePage} />
            <Route path='/edit' component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));