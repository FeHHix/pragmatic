import {AutoComplete} from '@pragmatic/ui-core';
import {Select} from 'antd';
import React from 'react';

const {Option} = Select;

/**
 * @generated
 */
interface ITaskUser {
    id: string;
    name: string;
}

/**
 * @generated
 */
interface IOwnProps {
    onChange?: (value: string) => void;
    value?: string;
}

const renderOption = (data: ITaskUser) => <Option key={data.id} value={data.id}>{data.name}</Option>;

/**
 * @generated
 */
export const TaskUserAutoComplete: React.FC<IOwnProps> = ({onChange, value}) => {
    return (
        <AutoComplete
            lookupUrl={`${API_URL}/users?name`}
            onChange={onChange}
            placeholder="Input username"
            renderOption={renderOption}
            value={value}
        />
    );
};
