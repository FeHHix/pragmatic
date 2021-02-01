import {API, FormAutoComplete} from '@pragmatic/ui-core';
import {Select} from 'antd';
import React from 'react';
import {ITaskTag} from '../Models';

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
const renderOption = (status: ITaskTag) => (
    <Option key={status.id} value={status.id}>
        {status.name}
    </Option>
);

/**
 * @generated
 */
export const TaskTagAutoComplete: React.FC<IOwnProps> = ({onChange, value = ''}) => {
    const handleSearch = (searchText: string) => {
        return API.get<ITaskTag[]>(`${API_URL}/taskTags?name=${searchText}`);
    };

    const handleResolve = async (id: string) => {
        const status = await API.get<ITaskTag>(`${API_URL}/taskTags/${id}`);
        return {key: status.id, label: status.name, value: status.id};
    };

    return (
        <FormAutoComplete
            onSearch={handleSearch}
            onChange={onChange}
            onResolve={handleResolve}
            placeholder="Input tag"
            renderOption={renderOption}
            value={value}
        />
    );
};
