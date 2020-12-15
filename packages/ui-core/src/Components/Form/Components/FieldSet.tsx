import {Form} from 'antd';
import React from 'react';
import {Rule} from 'antd/lib/form';
import { ColProps } from 'antd/lib/grid/col';

/**
 * @generated
 */
export interface IFieldConfig {
    key?: string;
    label: string;
    name?: string;
    render: () => JSX.Element;
    rules: Rule[];
}

/**
 * @generated
 */
interface IOwnProps {
    fields: IFieldConfig[];
    labelCol?: ColProps;
    wrapperCol?: ColProps;
}

/**
 * @generated
 */
export const FieldSet: React.FC<IOwnProps> = ({fields, ...props}) => {
    return (
        <>
            {fields.map(({label, name, key = name, render, rules}, index) => (
                <Form.Item {...props} key={key || index} label={label} name={name} rules={rules}>
                    {render()}
                </Form.Item>
            ))}
        </>
    );
};
