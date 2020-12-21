import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppLayout} from './Components/AppLayout';
import 'antd/dist/antd.css';
import './styles.css';

ReactDOM.render(
    <Router>
        <AppLayout />
    </Router>,
    document.getElementById('root')
);
