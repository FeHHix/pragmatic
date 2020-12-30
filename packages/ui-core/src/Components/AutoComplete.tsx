import {Select, Spin} from 'antd';
import debounce from 'lodash/debounce';
import React from 'react';

/**
 * @generated
 */
interface IValue {
    key: string;
    label: string;
    value: string;
}

/**
 * @generated
 */
export interface IAutoCompleteProps {
    disabled?: boolean;
    onChange?: (value: string) => void;
    onResolve?: (value: string) => Promise<IValue>;
    onSearch: (value: string) => Promise<unknown>;
    placeholder?: string;
    renderOption: (data: any) => JSX.Element;
    value: string;
}

/**
 * @generated
 */
interface IState {
    data: unknown[];
    fetching: boolean;
    value?: IValue;
}

/**
 * @generated
 */
function getInitialState(value: string): IState {
    return {
        data: [],
        fetching: false,
        value: {
            key: value,
            label: value,
            value: value,
        },
    };
}

/**
 * @generated
 */
export class AutoComplete extends React.Component<IAutoCompleteProps, IState> {
    constructor(props: IAutoCompleteProps) {
        super(props);
        this.lastFetchId = 0;
        this.handleSearch = debounce(this.handleSearch, 800);
    }

    lastFetchId: number = 0;

    state: IState = getInitialState(this.props.value);

    componentDidMount() {
        const {onResolve, value} = this.props;

        onResolve &&
            onResolve(value).then((value) => {
                this.setState({value});
            });
    }

    componentDidUpdate(prevProps: IAutoCompleteProps) {
        const {value} = this.props;

        if (value !== prevProps.value && value === '') {
            this.setState(getInitialState(value));
        }
    }

    handleSearch = (value: string) => {
        const {onSearch} = this.props;

        this.lastFetchId += 1;

        const fetchId = this.lastFetchId;

        this.setState({data: [], fetching: true});

        if (value) {
            onSearch(value).then((data: any) => {
                if (fetchId !== this.lastFetchId) {
                    return;
                }

                this.setState({data: !Array.isArray(data) ? [] : data, fetching: false});
            });
        }
    };

    handleChange = (value: IValue) => {
        const {onChange} = this.props;

        this.setState(
            {
                data: [],
                fetching: false,
                value,
            },
            () => onChange && onChange(value.value)
        );
    };

    render() {
        const {disabled, placeholder, renderOption} = this.props;
        const {fetching, data, value} = this.state;

        return (
            <Select
                disabled={disabled}
                filterOption={false}
                labelInValue
                notFoundContent={fetching ? <Spin size="small" /> : null}
                onChange={this.handleChange}
                onSearch={this.handleSearch}
                placeholder={placeholder}
                showSearch
                style={{width: '100%'}}
                value={value}
            >
                {data.map((d) => renderOption(d))}
            </Select>
        );
    }
}
