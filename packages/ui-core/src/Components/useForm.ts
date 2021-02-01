import {Form as AntdForm} from 'antd';
import React from 'react';

/**
 * @generated
 */
interface IUseFormProps<TForm> {
    form?: TForm;
    onSubmit: (form: TForm) => void;
}

/**
 * @generated
 */
export function useForm<TForm>(props: IUseFormProps<TForm>) {
    const {form: prefill = {}, onSubmit} = props;
    const [form] = AntdForm.useForm<TForm>();

    React.useEffect(() => {
        form.setFieldsValue({...prefill} as any);

        return () => {
            form.resetFields();
        };
    }, [form]);

    const handleSubmit = () => {
        onSubmit(form.getFieldsValue());
    };

    return {form, handleSubmit};
}
