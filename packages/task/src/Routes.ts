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
        path: '/task/tasks',
    },
    {
        component: TaskEditForm,
        exact: true,
        label: 'Create Task',
        path: '/task/task/create',
    },
    {
        component: TaskEditForm,
        label: 'Edit Task',
        path: '/task/task/:id/edit',
    },
    {
        component: TaskCard,
        label: 'Task Details',
        path: '/task/task/:id',
    },
];
