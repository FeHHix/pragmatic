import {IRoute} from '@pragmatic/ui-core';
import {TaskTaskEditForm} from './Components/TaskTaskEditForm';
import {TaskTaskList} from './Components/TaskTaskList';
import {TaskTaskCard} from './Components/TaskTaskCard';

/**
 * @generated
 */
export const Routes: IRoute[] = [
    {
        component: TaskTaskList,
        exact: true,
        label: 'Tasks',
        path: '/task/tasks',
    },
    {
        component: TaskTaskEditForm,
        exact: true,
        label: 'Create Task',
        path: '/task/task/create',
    },
    {
        component: TaskTaskEditForm,
        label: 'Edit Task',
        path: '/task/task/:id/edit',
    },
    {
        component: TaskTaskCard,
        label: 'Task Details',
        path: '/task/task/:id',
    },
];
