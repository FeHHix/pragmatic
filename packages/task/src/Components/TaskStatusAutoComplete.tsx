import {API, FormAutoComplete} from '@pragmatic/ui-core';
import {Select} from 'antd';
import { ITaskStatus } from 'Models';
import React from 'react';

const {Option} = Select;

/**
 * @generated
 */
interface IOwnProps {
    onChange?: (value: string) => void;
    value?: string;
}

const renderOption = (status: ITaskStatus) => (
    <Option key={status.id} value={status.id}>
        {status.name}
    </Option>
);

/**
 * @generated
 */
export const TaskStatusAutoComplete: React.FC<IOwnProps> = ({onChange, value = ''}) => {
    const handleSearch = (searchText: string) => {
        return API.get<ITaskStatus[]>(`${API_URL}/taskStatuses?name=${searchText}`);
    };

    return (
        <FormAutoComplete
            onSearch={handleSearch}
            onChange={onChange}
            placeholder="Input status"
            renderOption={renderOption}
            value={value}
        />
    );
};
