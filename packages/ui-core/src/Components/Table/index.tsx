import {SearchOutlined} from '@ant-design/icons';
import {Button, Space, Table} from 'antd';
import {FilterDropdownProps} from 'antd/lib/table/interface';
import React from 'react';
import {IColumn, IFilterProps} from './Models';

/**
 * @generated
 */
interface IOwnProps {
    columns: IColumn[];
    dataSource: any;
    filter: any;
    onFilter: (filter: any) => void;
    onResetFilter: (dataIndex: string) => void;
}

/**
 * @generated
 */
class TableComponent extends React.Component<IOwnProps> {
    getColumnSearchProps = (dataIndex: string, ComponentFilter: React.ComponentType<IFilterProps>, filteredValue: any) => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}: FilterDropdownProps) => (
            <div style={{padding: 8}}>
                <ComponentFilter
                    onChange={(value: string) => setSelectedKeys(value ? [value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    placeholder={`Search ${dataIndex}`}
                    style={{width: 188, marginBottom: 8, display: 'block'}}
                    value={selectedKeys[0] as string}
                />
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
        filteredValue: [filteredValue],
    });

    handleSearch = (selectedKeys: React.Key[], confirm: () => void, dataIndex: string) => {
        confirm();
        this.props.onFilter({[dataIndex]: selectedKeys[0]});
    };

    handleReset = (dataIndex: string, clearFilters?: () => void) => {
        clearFilters && clearFilters();
        this.props.onResetFilter(dataIndex);
    };

    render() {
        const {columns, dataSource, filter} = this.props;

        const columnsConfig = columns.map(({componentFilter, dataIndex, key, render, title}) => ({
            dataIndex,
            key,
            render,
            title,
            ...(componentFilter ? this.getColumnSearchProps(dataIndex, componentFilter, filter[dataIndex]) : {}),
        }));

        return <Table columns={columnsConfig} dataSource={dataSource} />;
    }
}

export {TableComponent as Table};
