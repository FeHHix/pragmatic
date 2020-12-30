import {SearchOutlined} from '@ant-design/icons';
import {Button, Space, Table} from 'antd';
import React from 'react';

/**
 * @generated
 */
export interface IFilterProps {
    onChange: (value: string) => void;
    onPressEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder: string;
    style: React.CSSProperties;
    value: string;
}

/**
 * @generated
 */
export interface IColumn {
    dataIndex: string;
    key: string;
    render?: (value: string) => JSX.Element;
    renderFilter?: (props: IFilterProps) => JSX.Element;
    title: string;
}

/**
 * @generated
 */
interface IFilterDropdown {
    clearFilters: () => void;
    confirm: () => void;
    selectedKeys: string[];
    setSelectedKeys: (keys: string[]) => void;
}

/**
 * @generated
 */
interface IOwnProps {
    columns: IColumn[];
    dataSource: any;
    onFilter: (filter: any) => void;
    onResetFilter: (dataIndex: string) => void;
}

/**
 * @generated
 */
class TableComponent extends React.Component<IOwnProps> {
    getColumnSearchProps = (dataIndex: string, renderFilter: (props: IFilterProps) => JSX.Element) => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}: IFilterDropdown) => (
            <div style={{padding: 8}}>
                {renderFilter({
                    onChange: (value: string) => setSelectedKeys(value ? [value] : []),
                    onPressEnter: () => this.handleSearch(selectedKeys, confirm, dataIndex),
                    placeholder: `Search ${dataIndex}`,
                    style: {width: 188, marginBottom: 8, display: 'block'},
                    value: selectedKeys[0],
                })}
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{width: 90}}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(dataIndex, clearFilters)} size="small" style={{width: 90}}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}} />,
    });

    handleSearch = (selectedKeys: string[], confirm: () => void, dataIndex: string) => {
        confirm();
        this.props.onFilter({[dataIndex]: selectedKeys[0]});
    };

    handleReset = (dataIndex: string, clearFilters: () => any) => {
        clearFilters();
        this.props.onResetFilter(dataIndex);
    };

    render() {
        const {columns, dataSource} = this.props;

        const columnsConfig = columns.map(({dataIndex, key, render, renderFilter, title}) => ({
            dataIndex,
            key,
            render,
            title,
            ...(renderFilter ? this.getColumnSearchProps(dataIndex, renderFilter) : {}),
        }));

        return <Table columns={columnsConfig} dataSource={dataSource} />;
    }
}

export {TableComponent as Table};
