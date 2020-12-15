import {Form} from 'antd';
import React from 'react';
import { ColProps } from 'antd/lib/grid/col';

/**
 * @generated
 */
interface IOwnProps {
    labelCol?: ColProps;
    wrapperCol?: ColProps;
}

/**
 * @generated
 */
const FormComponent: React.FC<IOwnProps> = ({children, ...props}) => {
    return <Form {...props}>{children}</Form>;
};

export {FormComponent as Form};
