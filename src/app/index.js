import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './helpers/store';
import { BrowserRouter as Router} from 'react-router-dom';
import  Routes from './Routes';


window.store= store;

ReactDOM.render(
<Provider store={store}>
<Router>
    <Routes />
</Router>
</Provider>
, document.getElementById('root'));
