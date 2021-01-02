import {IColumn, Table} from '@pragmatic/ui-core';
import {Tag, Skeleton, Space, Input} from 'antd';
import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import {getTasks} from '../Service';
import {TaskUserLookupLabel} from './TaskUserLookupLabel';
import 'antd/dist/antd.css';
import {ITask, ITaskFilter} from '../Models';
import {TaskTaskStatusLookupLabel} from './TaskTaskStatusLookupLabel';
import {TaskUserAutoComplete} from './TaskUserAutoComplete';

/**
 * @generated
 */
const columns: IColumn[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        renderFilter: (props) => (
            <Input
                {...props}
                onChange={(e) => {
                    props.onChange(e.target.value);
                }}
            />
        ),
    },
    {
        title: 'Assignee',
        dataIndex: 'assignee',
        key: 'assignee',
        render: (assignee: string) => (
            <a>
                <TaskUserLookupLabel id={assignee} />
            </a>
        ),
        renderFilter: (props) => <TaskUserAutoComplete {...props} />,
    },
    {
        title: 'Summary',
        dataIndex: 'summary',
        key: 'summary',
        renderFilter: (props) => (
            <Input
                {...props}
                onChange={(e) => {
                    props.onChange(e.target.value);
                }}
            />
        ),
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: any) => (
            <>
                {tags.map((tag: any) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (status: string) => (
            <a>
                <TaskTaskStatusLookupLabel id={status} />
            </a>
        ),
    },
    {
        title: 'Action',
        dataIndex: 'id',
        key: 'actions',
        render: (id: string) => (
            <Space size="middle">
                <Link to={`/task/task/${id}/info`}>View</Link>
            </Space>
        ),
    },
];

/**
 * @generated
 */
interface IState {
    isLoading: boolean;
    tasks: ITask[];
}

/**
 * @generated
 */
function getInitialState(): IState {
    return {isLoading: true, tasks: []};
}

/**
 * @generated
 */
export const TaskTaskList: React.FC<RouteComponentProps> = () => {
    const [state, setState] = React.useState<IState>(getInitialState());
    const [filter, setFilter] = React.useState<ITaskFilter>({});
    const {isLoading, tasks} = state;

    React.useEffect(() => {
        getTasks(filter)
            .then((tasks) => {
                setState({isLoading: false, tasks});
            })
            .catch(() => {
                setState({isLoading: false, tasks: []});
            });
    }, [filter]);

    const handleFilter = (filter: ITaskFilter) => {
        setFilter((prevFilter) => ({...prevFilter, ...filter}));
    };

    const handleResetFilter = (dataIndex: string) => {
        setFilter((prevFilter) => ({...prevFilter, [dataIndex]: null}));
    };

    console.log('filter', filter);

    return isLoading ? (
        <Skeleton />
    ) : (
        <Table columns={columns} dataSource={tasks} onFilter={handleFilter} onResetFilter={handleResetFilter} />
    );
};
