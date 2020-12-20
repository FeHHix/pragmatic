import {Form} from 'antd';
import React from 'react';
import { FormProps } from 'antd/lib/form/Form';

/**
 * @generated
 */
interface IOwnProps extends FormProps {}

/**
 * @generated
 */
const FormComponent: React.FC<IOwnProps> = ({children, ...props}) => {
    return <Form {...props}>{children}</Form>;
};

export {FormComponent as Form};
