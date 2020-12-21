import {Select, Spin} from 'antd';
// import debounce from 'lodash/debounce';
import React from 'react';
import {API} from '../Service';

// const {Option} = Select;

interface IOwnProps {
    lookupUrl: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    renderOption: (data: any) => JSX.Element;
    value: any;
}

export class AutoComplete extends React.Component<IOwnProps> {
    // constructor(props) {
    //     super(props);
    //     this.lastFetchId = 0;
    //     // this.fetchUser = debounce(this.fetchUser, 800);
    // }

    lastFetchId: number = 0;

    state = {
        data: [],
        value: [],
        fetching: false,
    };

    fetchData = (value: string) => {
        const {lookupUrl} = this.props;

        this.lastFetchId += 1;

        const fetchId = this.lastFetchId;

        this.setState({data: [], fetching: true});

        API.get(`${lookupUrl}=${value}`).then((data: any) => {
            if (fetchId !== this.lastFetchId) {
                return;
            }

            // const data = body.results.map((user) => ({
            //     text: `${user.name.first} ${user.name.last}`,
            //     value: user.login.username,
            // }));

            this.setState({data, fetching: false});
        });
    };

    handleChange = (value: any) => {
        const {onChange} = this.props;

        this.setState({
            data: [],
            fetching: false,
        }, () => onChange && onChange(value));
    };

    render() {
        const {placeholder, renderOption, value} = this.props;
        const {fetching, data} = this.state;

        return (
            <Select
                labelInValue
                value={value}
                placeholder={placeholder}
                notFoundContent={fetching ? <Spin size="small" /> : null}
                filterOption={false}
                onSearch={this.fetchData}
                onChange={this.handleChange}
                style={{width: '100%'}}
            >
                {data.map((d) => renderOption(d))}
            </Select>
        );
    }
}
