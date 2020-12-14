import Select, {Option} from 'rc-select';
import React from 'react';
import { Input } from 'antd';

interface IOption {
    text: string;
    value: string;
}

interface IOwnProps {
    onChange?: (value: string) => void;
    onSearch?: (text: string) => void;
    options: IOption[];
    placeholder: string;
    value: string;
}

export const AutoComplete: React.FC<IOwnProps> = ({onChange, onSearch, options, placeholder, value}) => (
    <Select onChange={onChange} onSearch={onSearch} placeholder={placeholder} style={{width: 200}} value={value}>
        {options.map(({text, value}) => (
            <Option value={value}>{text}</Option>
        ))}
    </Select>
);
