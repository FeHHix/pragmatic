import {API, FormAutoComplete} from '@pragmatic/ui-core';
import React, {useState} from 'react';

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

/**
 * @generated
 */
export const TaskAssigneeAutoComplete: React.FC<IOwnProps> = ({onChange}) => {
    const [options, setOptions] = useState<{label: string; value: string}[]>([]);
    const [searchText, setSearchText] = useState<string>('');

    React.useEffect(() => {
        if (searchText !== '') {
            API.get<ITaskAssignee[]>(`${API_URL}/users?name=${searchText}`).then((users) => {
                const options = users.map(({id, name}) => ({label: name, value: id}));
                setOptions(options);
            });
        }
    }, [searchText]);

    const handleSearch = (searchText: string) => {
        console.log('handleSearch', searchText);
        setSearchText(searchText);
    };

    const handleSelect = (value: string, option: any) => {
        console.log('handleSelect_value', value);
        console.log('handleSelect_option', option);
        if (onChange) {
            onChange(value);
        }
    };

    const handleChange = (value: string) => {
        console.log('handleChange_value', value);
    };

    console.log('options', options);

    return (
        <FormAutoComplete
            options={options}
            onSelect={handleSelect}
            onChange={handleChange}
            onSearch={handleSearch}
            placeholder="Input username"
        />
    );
};
