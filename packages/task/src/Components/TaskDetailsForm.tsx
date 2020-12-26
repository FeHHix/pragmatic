import {Form, FieldSet, FormInput, FormTextArea} from '@pragmatic/ui-core';
import type {IButtonConfig, IFieldConfig} from '@pragmatic/ui-core';
import {Button, Form as AntdForm, PageHeader, Skeleton, Tag} from 'antd';
import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {ITask} from '../Models';
import {getTask} from '../Service';
import {TaskUserAutoComplete} from './TaskUserAutoComplete';
import {TaskTaskStatusLookupLabel} from './TaskTaskStatusLookupLabel';

/**
 * @generated
 */
const layout = {
    labelCol: {span: 4},
    wrapperCol: {span: 14},
};

/**
 * @generated
 */
const buttonItemLayout = {
    wrapperCol: {span: 14, offset: 4},
};

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
export const fields: IFieldConfig[] = [
    {
        label: 'Assignee',
        name: 'assignee',
        render: () => <TaskUserAutoComplete />,
        rules: [{message: 'Please assignee task for user!', required: true}],
    },
    {
        label: 'Summary',
        name: 'summary',
        render: () => <FormInput />,
        rules: [{message: 'Please input summary!', required: true}],
    },
    {
        label: 'Content',
        name: 'content',
        render: () => <FormTextArea />,
        rules: [],
    },
];

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
    {
        action: () => {
            props.history.push(`/tasks/${props.match.params.id}/history`);
        },
        enabled: () => true,
        htmlType: 'button',
        key: 'history',
        label: 'History',
        type: 'default',
    },
];

/**
 * @generated
 */
export const TaskDetailsForm: React.FC<IOwnProps> = (props) => {
    const {
        match: {
            params: {id},
        },
    } = props;
    const [isLoading, setIsLoading] = React.useState<boolean>(!!id);
    const [form] = AntdForm.useForm<ITask>();

    React.useEffect(() => {
        getTask(id).then((task) => {
            form.setFieldsValue(task);
            setIsLoading(false);
        });
    }, [id]);

    return isLoading ? (
        <Skeleton />
    ) : (
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
            tags={<TaskTaskStatusLookupLabel id={id} />}
            title={`Task ${id}`}
        >
            <Form {...layout} form={form} layout="horizontal" readonly>
                <FieldSet fields={fields} />
            </Form>
        </PageHeader>
    );
};
