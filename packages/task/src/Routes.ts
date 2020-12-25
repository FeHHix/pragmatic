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
        label: 'Create Task',
        path: '/tasks/create',
    },
    {
        component: TaskEditForm,
        label: 'Edit Task',
        path: '/tasks/edit/:id',
    },
    {
        component: TaskTaskStatusList,
        label: 'Task Statuses',
        path: '/tasks/taskStatuses',
    },
    {
        component: TaskDetailsForm,
        label: 'Task Details',
        path: '/tasks/:id',
    },
];
