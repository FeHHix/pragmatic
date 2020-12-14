import React from 'react';
import {Modal} from 'antd';
import {TaskCreateForm} from './TaskCreateForm';

interface IOwnProps {
    onCancel: () => void;
    onSubmit: () => void;
    showModal: boolean;
}

export const TaskCreateTaskModal: React.FC<IOwnProps> = ({onCancel, onSubmit, showModal}) => {
    const handleOk = () => {
        onSubmit();
    };

    const handleCancel = () => {
        onCancel();
    };

    return (
        <Modal title="Basic Modal" visible={showModal} onOk={handleOk} onCancel={handleCancel}>
            <TaskCreateForm />
        </Modal>
    );
};
