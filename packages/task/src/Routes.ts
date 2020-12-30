import {IRoute} from '@pragmatic/ui-core';
import {TaskEditForm} from './Components/TaskEditForm';
import {TaskTaskList} from './Components/TaskTaskList';
import {TaskCard} from './Components/TaskCard';

/**
 * @generated
 */
export const Routes: IRoute[] = [
    {
        component: TaskTaskList,
        exact: true,
        label: 'Tasks',
        path: '/tasks',
    },
    {
        component: TaskEditForm,
        exact: true,
        label: 'Create Task',
        path: '/tasks/create',
    },
    {
        component: TaskCard,
        label: 'Task Details',
        path: '/tasks/:id',
    },
    {
        component: TaskEditForm,
        exact: true,
        label: 'Edit Task',
        path: '/tasks/:id/edit',
    },
];
