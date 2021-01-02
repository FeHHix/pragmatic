import {Input} from 'antd';
import React from 'react';
import {IFilterProps} from '../Models';

/**
 * @generated
 */
export const FilterInput: React.FC<IFilterProps> = (props) => (
    <Input
        {...props}
        onChange={(e) => {
            props.onChange && props.onChange(e.target.value);
        }}
    />
);
