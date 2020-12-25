import {Form, FieldSet, ButtonSet, FormInput, FormTextArea} from '@pragmatic/ui-core';
import type {IButtonConfig, IFieldConfig} from '@pragmatic/ui-core';
import {Form as AntdForm, Skeleton} from 'antd';
import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {ITask} from '../Models';
import {getTask} from '../Service';
import {TaskUserAutoComplete} from './TaskUserAutoComplete';

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
        enabled: () => !props.match.params.id,
        htmlType: 'submit',
        key: 'create',
        label: 'Create',
        type: 'primary',
    },
    {
        enabled: () => !!props.match.params.id,
        htmlType: 'submit',
        key: 'edit',
        label: 'Edit',
        type: 'primary',
    },
];

/**
 * @generated
 */
export const TaskEditForm: React.FC<IOwnProps> = (props) => {
    const {
        match: {
            params: {id},
        },
    } = props;
    const [isLoading, setIsLoading] = React.useState<boolean>(!!id);
    const [form] = AntdForm.useForm<ITask>();

    React.useEffect(() => {
        if (id) {
            getTask(id).then((task) => {
                form.setFieldsValue(task);
                setIsLoading(false);
            });
        }

        return () => {
            form.resetFields();
        };
    }, [id]);

    const handleSubmit = (values: any) => {
        console.log('values', values);
    };

    return isLoading ? (
        <Skeleton />
    ) : (
        <Form {...layout} form={form} layout="horizontal" onFinish={handleSubmit}>
            <FieldSet fields={fields} />
            <ButtonSet {...buttonItemLayout} buttons={getButtons(props)} />
        </Form>
    );
};
