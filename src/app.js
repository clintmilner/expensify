import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log('Section 10 Lecture 87 - app.js has loaded and is running and loading via webpack-dev-server');

ReactDOM.render(<AppRouter/>, document.getElementById('app'));