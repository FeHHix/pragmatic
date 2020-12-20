import React from 'react';
import {Form, Modal} from 'antd';
import {TaskEditForm} from './TaskEditForm';

interface IOwnProps {
    onClose: () => void;
    showModal: boolean;
}

export const TaskCreateTaskModal: React.FC<IOwnProps> = ({onClose, showModal}) => {
    const [form] = Form.useForm();

    const handleSubmit = () => {
        console.log('form', form.getFieldsValue());
    };

    return (
        <Modal title="Create Task" visible={showModal} onOk={handleSubmit} onCancel={onClose}>
            <TaskEditForm />
        </Modal>
    );
};
