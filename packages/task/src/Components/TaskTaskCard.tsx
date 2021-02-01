import {Actions, IActionConfig, ITabRoute, TabsRouter} from '@pragmatic/ui-core';
import {PageHeader} from 'antd';
import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {TaskTaskDetailsForm} from './TaskTaskDetailsForm';
import {TaskTaskStatusList} from './TaskTaskStatusList';

/**
 * @generated
 */
interface IRouteProps {
    id: string;
}

/**
 * @generated
 */
interface IOwnProps extends RouteComponentProps<IRouteProps> {}

/**
 * @generated
 */
const getActions = (props: IOwnProps): IActionConfig[] => [
    {
        action: () => {
            props.history.push(`/task/task/${props.match.params.id}/edit`);
        },
        enabled: () => true,
        key: 'edit',
        label: 'Edit',
    },
    {
        action: () => {
            console.log('Not implemented');
        },
        confirm: true,
        confirmLabel: 'Are you sure?',
        enabled: () => true,
        key: 'delete',
        label: 'Delete',
    },
];

/**
 * @generated
 */
export const getRoutes = (id: string): ITabRoute[] => [
    {
        component: TaskTaskDetailsForm,
        key: `/task/task/${id}/info`,
        label: 'Info',
        path: '/task/task/:id/info',
    },
    {
        component: TaskTaskStatusList,
        key: `/task/task/${id}/history`,
        label: 'History',
        path: '/task/task/:id/history',
    },
];

/**
 * @generated
 */
export const TaskTaskCard: React.FC<IOwnProps> = (props) => {
    const {
        match: {
            params: {id},
        },
    } = props;

    return (
        <PageHeader
            extra={<Actions actions={getActions(props)} />}
            ghost={false}
            onBack={() => window.history.back()}
            title={`Task ${id}`}
        >
            <TabsRouter routes={getRoutes(id)} />
        </PageHeader>
    );
};
