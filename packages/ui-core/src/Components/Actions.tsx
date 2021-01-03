import {Button, Popconfirm} from 'antd';
import { ButtonType } from 'antd/lib/button/button';
import React from 'react';

export interface IActionConfig {
    action?: () => void;
    confirm?: boolean;
    confirmLabel?: string;
    enabled: () => boolean;
    key: string;
    label: string;
    onClick?: () => void;
}

interface IExtActionConfig extends IActionConfig {
    type?: ButtonType;
}

/**
 * @generated
 */
interface IOwnProps {
    actions: IActionConfig[];
}

/**
 * @generated
 */
export const Actions: React.FC<IOwnProps> = ({actions}) => {
    const actionsCopy: IExtActionConfig[] = [...actions];

    actionsCopy[0] = {
        ...actionsCopy[0],
        type: 'primary',
    };

    return (
        <>
            {actionsCopy
                .filter((action) => action.enabled())
                .map(({action, confirm, confirmLabel = 'Are you sure?', key, label, type}) => {
                    if (confirm) {
                        return (
                            <Popconfirm onConfirm={action} okText="Yes" cancelText="No" title={confirmLabel}>
                                <Button key={key} type={type}>{label}</Button>
                            </Popconfirm>
                        );
                    }

                    return (
                        <Button key={key} onClick={action} type={type}>
                            {label}
                        </Button>
                    );
                })}
        </>
    );
};
