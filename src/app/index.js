import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import  Routes from './Routes';


// window.store= store;

// ReactDOM.render(
// <Provider store={store}>
// <Router basename={process.env.PUBLIC_URL}>
//     <Routes />
// </Router>
// </Provider>
// , document.getElementById('root'));

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <Routes />
    </Router>
    , document.getElementById('root'));
