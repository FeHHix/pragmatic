import {Form, FieldSet} from '@pragmatic/ui-core';
import type {IFieldConfig} from '@pragmatic/ui-core';
import {Input} from 'antd';
import React from 'react';
import {TaskAssigneeAutoComplete} from './TaskAssigneeAutoComplete';

const {TextArea} = Input;

/**
 * @generated
 */
const fields: IFieldConfig[] = [
    {
        label: 'Assignee',
        name: 'assignee',
        render: () => <TaskAssigneeAutoComplete />,
        rules: [{message: 'Please assignee task for user!', required: true}],
    },
    {
        label: 'Summary',
        name: 'summary',
        render: () => <Input />,
        rules: [{message: 'Please input summary!', required: true}],
    },
    {
        label: 'Content',
        name: 'content',
        render: () => <TextArea />,
        rules: [],
    },
];

/**
 * @generated
 */
const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

/**
 * @generated
 */
export const TaskCreateForm: React.FC = () => {
    return (
        <Form {...layout}>
            <FieldSet fields={fields} />
        </Form>
    );
};
