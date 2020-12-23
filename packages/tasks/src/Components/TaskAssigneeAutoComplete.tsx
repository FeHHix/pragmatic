import {API, FormAutoComplete} from '@pragmatic/ui-core';
import {Select} from 'antd';
import React from 'react';

const {Option} = Select;

/**
 * @generated
 */
interface ITaskAssignee {
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

const renderOption = (user: ITaskAssignee) => (
    <Option key={user.id} value={user.id}>
        {user.name}
    </Option>
);

/**
 * @generated
 */
export const TaskAssigneeAutoComplete: React.FC<IOwnProps> = ({onChange, value = ''}) => {
    const handleSearch = (searchText: string) => {
        return API.get<ITaskAssignee[]>(`${API_URL}/users?name=${searchText}`);
    };

    const handleResolve = async (id: string) => {
        const user = await API.get<ITaskAssignee>(`${API_URL}/users/${id}`);
        return {key: user.id, label: user.name, value: user.id};
    };

    return (
        <FormAutoComplete
            onSearch={handleSearch}
            onChange={onChange}
            onResolve={handleResolve}
            placeholder="Input username"
            renderOption={renderOption}
            value={value}
        />
    );
};
