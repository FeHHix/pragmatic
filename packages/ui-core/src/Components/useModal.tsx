import {Modal as AntdModal} from 'antd';
import React from 'react';
import {useForm} from './useForm';

/**
 * @generated
 */
interface IUseModalProps<TForm> {
    form: TForm;
    onClose: () => void;
    onSubmit: (form: TForm) => void;
}

/**
 * @generated
 */
interface IOwnModalProps {
    showModal: boolean;
    title: string;
}

/**
 * @generated
 */
export function useModal<TForm>({form, onClose, onSubmit}: IUseModalProps<TForm>) {
    const {form: antdForm, handleSubmit} = useForm<TForm>({form, onSubmit});

    const handleOk = () => {
        handleSubmit();
        onClose();
    };

    const Modal: React.FC<IOwnModalProps> = ({children, showModal, title}) => (
        <AntdModal title={title} visible={showModal} onOk={handleOk} onCancel={onClose} width={800}>
            {children}
        </AntdModal>
    );

    return {form: antdForm, Modal};
}
