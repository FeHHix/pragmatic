import {IRoute} from '@pragmatic/ui-core';
import {TaskEditForm} from './Components/TaskEditForm';
import {TaskList} from './Components/TaskList';

/**
 * @generated
 */
export const Routes: IRoute[] = [
    {
        component: TaskList,
        exact: true,
        label: 'Tasks',
        path: '/tasks',
    },
    {
        component: TaskEditForm,
        label: 'Create Task',
        path: '/tasks/create',
    },
    {
        component: TaskEditForm,
        label: 'Edit Task',
        path: '/tasks/edit/:id',
    },
];
