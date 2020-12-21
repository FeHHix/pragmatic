import {Form, Button} from 'antd';
import React from 'react';
import {ButtonHTMLType, ButtonType} from 'antd/lib/button/button';
import { ColProps } from 'antd/lib/grid/col';

export interface IButtonConfig {
    htmlType: ButtonHTMLType;
    key: string;
    label: string;
    onClick?: () => void;
    type: ButtonType;
}

interface IOwnProps {
    buttons: IButtonConfig[];
    wrapperCol?: ColProps;
}

export const ButtonSet: React.FC<IOwnProps> = ({buttons, ...formItemProps}) => {
    return (
        <Form.Item {...formItemProps}>
            {buttons.map(({htmlType, key, label, onClick, type}, index) => (
                <Button htmlType={htmlType} key={key || index} onClick={onClick} type={type}>
                    {label}
                </Button>
            ))}
        </Form.Item>
    );
};
