import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {TaskCreateForm, TaskList} from '@pragmatic/tasks';

ReactDOM.render(
    <>
        <TaskList />
        <TaskCreateForm />
    </>,
    document.getElementById('root')
);
