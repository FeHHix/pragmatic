import {DatePicker, FieldSet, Form, FormInput, IFieldConfig} from '@pragmatic/ui-core';
import {FormInstance} from 'antd/lib/form';
import React from 'react';
import {ITaskFilter} from '../Models';
import { TaskStatusAutoComplete } from './TaskStatusAutoComplete';
import { TaskTagAutoComplete } from './TaskTagAutoComplete';
import { TaskUserAutoComplete } from './TaskUserAutoComplete';

/**
 * @generated
 */
interface IOwnProps {
    form: FormInstance<ITaskFilter>;
}

/**
 * @generated
 */
const fields: IFieldConfig[] = [
    {
        label: 'The id schema',
        name: 'id',
        render: () => <FormInput />,
    },
    {
        label: 'Assignee',
        name: 'assignee',
        render: () => <TaskUserAutoComplete />,
    },
    {
        label: 'Summary',
        name: 'summary',
        render: () => <FormInput />,
    },
    {
        label: 'Content',
        name: 'content',
        render: () => <FormInput />,
    },
    {
        label: 'Tags',
        name: 'tags',
        render: () => <TaskTagAutoComplete />,
    },
    {
        label: 'Status',
        name: 'status',
        render: () => <TaskStatusAutoComplete />,
    },
    {
        label: 'Status history from',
        name: 'statusHistoryDateFrom',
        render: () => <DatePicker />,
    },
    {
        label: 'Status history to',
        name: 'statusHistoryDateTo',
        render: () => <DatePicker />,
    },
    {
        label: 'Status history',
        name: 'statusHistoryStatus',
        render: () => <TaskStatusAutoComplete />,
    },
];

/**
 * @generated
 */
export const TaskTaskListFilter: React.FC<IOwnProps> = ({form}) => (
    <Form form={form} layout="inline">
        <FieldSet fields={fields} />
    </Form>
);
