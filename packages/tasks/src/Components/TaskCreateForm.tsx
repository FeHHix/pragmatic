import {Form, FieldSet} from '@pragmatic/ui-core';
import type {IFieldConfig} from '@pragmatic/ui-core';
import React from 'react';
import {TaskAssigneeAutoComplete} from './TaskAssigneeAutoComplete';

/**
 * @generated
 */
const fields: IFieldConfig[] = [
    {
        label: 'Assignee',
        name: 'assignee',
        render: () => <TaskAssigneeAutoComplete />,
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
