import {IButtonConfig, ITabRoute, TabsRouter} from '@pragmatic/ui-core';
import {Button, PageHeader, Tabs} from 'antd';
import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {TaskDetailsForm} from './TaskDetailsForm';
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
const getButtons = (props: IOwnProps): IButtonConfig[] => [
    {
        action: () => {
            props.history.push(`/tasks/${props.match.params.id}/edit`);
        },
        enabled: () => true,
        htmlType: 'button',
        key: 'edit',
        label: 'Edit',
        type: 'primary',
    },
    {
        action: () => {
            console.log('Not implemented');
        },
        enabled: () => true,
        htmlType: 'button',
        key: 'delete',
        label: 'Delete',
        type: 'default',
    },
];

/**
 * @generated
 */
export const getRoutes = (id: string): ITabRoute[] => [
    {
        component: TaskDetailsForm,
        key: `/tasks/${id}/info`,
        label: 'Info',
        path: '/tasks/:id/info',
    },
    {
        component: TaskTaskStatusList,
        key: `/tasks/${id}/history`,
        label: 'History',
        path: '/tasks/:id/history',
    },
];

/**
 * @generated
 */
export const TaskCard: React.FC<IOwnProps> = (props) => {
    const {
        match: {
            params: {id},
        },
    } = props;

    return (
        <PageHeader
            extra={getButtons(props)
                .filter((btn) => btn.enabled())
                .map(({action, htmlType, key, label, type}) => (
                    <Button htmlType={htmlType} key={key} onClick={action} type={type}>
                        {label}
                    </Button>
                ))}
            ghost={false}
            onBack={() => window.history.back()}
            // tags={<TaskTaskStatusLookupLabel id={id} />} TODO: нужен компонент, который по id таска фетчит детали и по id статуса резолвит лейбл статуса.
            title={`Task ${id}`}
        >
            <TabsRouter routes={getRoutes(id)} />
        </PageHeader>
    );
};
