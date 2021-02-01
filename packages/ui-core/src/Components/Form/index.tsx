import {Form} from 'antd';
import React from 'react';
import {FormProps} from 'antd/lib/form/Form';
import {FormContext} from './FormContext';

/**
 * @generated
 */
interface IOwnProps extends FormProps {
    readonly?: boolean;
}

/**
 * @generated
 */
const FormComponent: React.FC<IOwnProps> = ({children, readonly = false, ...props}) => {
    return (
        <Form {...props}>
            <FormContext.Provider value={{readonly}}>{children}</FormContext.Provider>
        </Form>
    );
};

export {FormComponent as Form, FormContext};
