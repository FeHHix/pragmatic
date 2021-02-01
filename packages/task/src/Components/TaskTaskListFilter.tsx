import {DatePicker, FieldSet, Form, FormInput, IFieldConfig, useModal} from '@pragmatic/ui-core';
import React from 'react';
import {ITaskFilter} from '../Models';
import {TaskStatusAutoComplete} from './TaskStatusAutoComplete';
import {TaskTagAutoComplete} from './TaskTagAutoComplete';
import {TaskUserAutoComplete} from './TaskUserAutoComplete';

/**
 * @generated
 */
interface IOwnProps {
    filter: ITaskFilter;
    onClose: () => void;
    onFilter: (filter: ITaskFilter) => void;
    show: boolean;
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
export const TaskTaskListFilter: React.FC<IOwnProps> = ({filter, onClose, onFilter, show}) => {
    const {form, Modal} = useModal<ITaskFilter>({form: filter, onClose, onSubmit: onFilter});

    return (
        <Modal title="Filter" showModal={show}>
            <Form form={form} layout="inline">
                <FieldSet fields={fields} />
            </Form>
        </Modal>
    );
};
