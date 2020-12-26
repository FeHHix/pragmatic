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
        component: TaskEditForm,
        label: 'Edit Task',
        path: '/tasks/:id/edit',
    },
    {
        component: TaskTaskStatusList,
        label: 'Task Status History',
        path: '/tasks/:id/history',
    },
    {
        component: TaskDetailsForm,
        label: 'Task Details',
        path: '/tasks/:id',
    },
    {
        component: TaskEditForm,
        label: 'Create Task',
        path: '/tasks/create',
    },
    {
        component: TaskTaskList,
        label: 'Tasks',
        path: '/tasks',
    },
];
