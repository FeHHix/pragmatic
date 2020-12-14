import {API, AutoComplete} from '@pragmatic/ui-core';
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
export const TaskAssigneeAutoComplete: React.FC<IOwnProps> = ({onChange, value}) => {
    const [options, setOptions] = useState<{text: string; value: string}[]>([]);
    const [searchText, setSearchText] = useState<string>('');

    React.useEffect(() => {
        if (searchText !== '') {
            API.post<ITaskAssignee[]>(`${API_URL}/users?name=${searchText}`)().then((users) => {
                const options = users.map(({id, name}) => ({value: id, text: name}));
                setOptions(options);
            });
        }
    }, [searchText]);

    const handleSearch = (searchText: string) => {
        console.log('handleSearch', searchText);
        setSearchText(searchText);
    };

    const handleChange = (data: string) => {
        console.log('handleSelect', data);
        if (onChange) {
            onChange(data);
        }
    };

    console.log('options', options);

    return (
        <AutoComplete
            value={value || ''}
            options={options}
            onChange={handleChange}
            onSearch={handleSearch}
            // onSelect={handleSelect}
            placeholder="Input username"
        />
    );
};
