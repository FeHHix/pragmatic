import {Form, Modal} from 'antd';
import {ITaskFilter} from 'Models';
import React from 'react';
import {TaskTaskListFilter} from './TaskTaskListFilter';

/**
 * @generated
 */
interface IOwnProps {
    filter: ITaskFilter;
    onClose: () => void;
    onFilter: (filter: ITaskFilter) => void;
    showModal: boolean;
}

/**
 * @generated
 */
export const TaskTaskListFilterModal: React.FC<IOwnProps> = ({filter, onClose, onFilter, showModal}) => {
    const [form] = Form.useForm<ITaskFilter>();

    React.useEffect(() => {
        form.setFieldsValue({...filter});

        return () => {
            form.resetFields();
            console.log('will unmount');
        };
    }, [filter]);

    const handleOk = () => {
        onFilter(form.getFieldsValue());
        onClose();
    };

    return (
        <Modal title="Filter" visible={showModal} onOk={handleOk} onCancel={onClose} width={800}>
            <TaskTaskListFilter form={form} />
        </Modal>
    );
};
