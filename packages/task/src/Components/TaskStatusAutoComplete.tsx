import {API, FormAutoComplete} from '@pragmatic/ui-core';
import {Select} from 'antd';
import {ITaskStatus} from 'Models';
import React from 'react';

/**
 * @generated
 */
const {Option} = Select;

/**
 * @generated
 */
interface IOwnProps {
    onChange?: (value: string) => void;
    value?: string;
}

/**
 * @generated
 */
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

    const handleResolve = async (id: string) => {
        const status = await API.get<ITaskStatus>(`${API_URL}/taskStatuses/${id}`);
        return {key: status.id, label: status.name, value: status.id};
    };

    return (
        <FormAutoComplete
            onSearch={handleSearch}
            onChange={onChange}
            onResolve={handleResolve}
            placeholder="Input status"
            renderOption={renderOption}
            value={value}
        />
    );
};
