import React from 'react';
import {Route} from 'react-router-dom';
import {TaskEditForm} from './Components/TaskEditForm';
import {TaskList} from './Components/TaskList';

/**
 * @generated
 */
export const Routes = () => (
    <>
        <Route component={TaskList} exact path="/tasks" />
        <Route component={TaskEditForm} path={["/tasks/create", "/tasks/edit/:id"]} />
    </>
);
