import {Form, Button} from 'antd';
import React from 'react';
import {ButtonHTMLType, ButtonType} from 'antd/lib/button/button';
import {ColProps} from 'antd/lib/grid/col';

/**
 * @generated
 */
export interface IButtonConfig {
    action?: () => void;
    confirm?: boolean;
    enabled?: () => boolean;
    htmlType: ButtonHTMLType;
    key: string;
    label: string;
    onClick?: () => void;
    type?: ButtonType;
}

/**
 * @generated
 */
interface IOwnProps {
    buttons: IButtonConfig[];
    wrapperCol?: ColProps;
}

/**
 * @generated
 */
export const ButtonSet: React.FC<IOwnProps> = ({buttons, ...formItemProps}) => {
    return (
        <Form.Item {...formItemProps} className="btn-group">
            {buttons.map(({action, enabled = () => true, htmlType, key, label, onClick, type}, index) =>
                enabled() ? (
                    <Button htmlType={htmlType} key={key || index} onClick={action || onClick} type={type}>
                        {label}
                    </Button>
                ) : null
            )}
        </Form.Item>
    );
};
