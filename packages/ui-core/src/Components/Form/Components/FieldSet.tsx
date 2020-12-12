import {Form} from 'antd';
import React from 'react';
import {Rule} from 'antd/lib/form';

export interface IFieldConfig {
    key?: string;
    label: string;
    name?: string;
    render: () => JSX.Element;
    rules: Rule[];
}

interface IOwnProps {
    fields: IFieldConfig[];
}

export const FieldSet: React.FC<IOwnProps> = ({fields}) => {
    return (
        <>
            {fields.map(({label, name, key = name, render, rules}, index) => (
                <Form.Item key={key || index} label={label} name={name} rules={rules}>
                    {render()}
                </Form.Item>
            ))}
        </>
    );
};
