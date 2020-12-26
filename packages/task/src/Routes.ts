import {IRoute} from '@pragmatic/ui-core';
import {TaskEditForm} from './Components/TaskEditForm';
import {TaskTaskList} from './Components/TaskTaskList';
import {TaskDetailsForm} from './Components/TaskDetailsForm';
import {TaskTaskStatusList} from './Components/TaskTaskStatusList';

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
        component: TaskDetailsForm,
        exact: true,
        label: 'Task Details',
        path: '/tasks/:id',
    },
    {
        component: TaskEditForm,
        exact: true,
        label: 'Edit Task',
        path: '/tasks/:id/edit',
    },
    {
        component: TaskTaskStatusList,
        exact: true,
        label: 'Task Status History',
        path: '/tasks/:id/history',
    },
];
