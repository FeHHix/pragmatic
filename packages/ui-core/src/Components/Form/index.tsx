import {Form} from 'antd';
import React from 'react';
import {FormProps} from 'antd/lib/form/Form';

interface IOwnProps extends FormProps {}

const FormComponent: React.FC<IOwnProps> = ({children, layout = {}}) => {
    return <Form {...layout}>{children}</Form>;
};

export {FormComponent as Form};
