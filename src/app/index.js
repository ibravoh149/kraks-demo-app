import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import  Routes from './Routes';


ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <Routes />
    </Router>
    , document.getElementById('root'));
