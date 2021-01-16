import {DatePicker, FieldSet, Form, IFieldConfig} from '@pragmatic/ui-core';
import {FormInstance} from 'antd/lib/form';
import React from 'react';
import {ITaskFilter} from '../Models';
import {TaskStatusAutoComplete} from './TaskStatusAutoComplete';

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
        label: 'Status',
        name: 'statusHistoryStatus',
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
];

/**
 * @generated
 */
export const TaskTaskListFilter: React.FC<IOwnProps> = ({form}) => (
    <Form form={form} layout="inline">
        <FieldSet fields={fields} />
    </Form>
);
