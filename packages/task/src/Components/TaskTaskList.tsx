import {FilterInput, IColumn, Labels, Table} from '@pragmatic/ui-core';
import {Button, Skeleton, Space} from 'antd';
import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import {getTasks} from '../Service';
import {TaskUserLookupLabel} from './TaskUserLookupLabel';
import 'antd/dist/antd.css';
import {ITask, ITaskFilter} from '../Models';
import {TaskTaskStatusLookupLabel} from './TaskTaskStatusLookupLabel';
import {TaskUserAutoComplete} from './TaskUserAutoComplete';
import {TaskTaskListFilterModal} from './TaskTaskListFilterModal';

/**
 * @generated
 */
const columns: IColumn[] = [
    {
        componentFilter: FilterInput,
        dataIndex: 'name',
        key: 'name',
        title: 'Name',
    },
    {
        componentFilter: TaskUserAutoComplete,
        dataIndex: 'assignee',
        key: 'assignee',
        render: (assignee: string) => (
            <a>
                <TaskUserLookupLabel id={assignee} />
            </a>
        ),
        title: 'Assignee',
    },
    {
        componentFilter: FilterInput,
        dataIndex: 'summary',
        key: 'summary',
        title: 'Summary',
    },
    {
        dataIndex: 'tags',
        key: 'tags',
        render: (tags: string[]) => <Labels labels={tags} />,
        title: 'Tags',
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
function getInitialFilter(): ITaskFilter {
    return {};
}

/**
 * @generated
 */
export const TaskTaskList: React.FC<RouteComponentProps> = () => {
    const [state, setState] = React.useState<IState>(getInitialState());
    const [filter, setFilter] = React.useState<ITaskFilter>(getInitialFilter());
    const [showFilter, setShowFilter] = React.useState<boolean>(false);
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

    const handleResetAllFilters = () => {
        setFilter(getInitialFilter());
    };

    const handleToggleFilterPanel = () => {
        setShowFilter((prevShowFilter) => !prevShowFilter);
    };

    return isLoading ? (
        <Skeleton />
    ) : (
        <>
            <div style={{marginBottom: 16}}>
                <Button onClick={handleToggleFilterPanel} type="primary">
                    Filter
                </Button>
                <Button onClick={handleResetAllFilters}>Reset</Button>
            </div>
            <TaskTaskListFilterModal filter={filter} onClose={handleToggleFilterPanel} onFilter={handleFilter} showModal={showFilter} />
            <Table columns={columns} dataSource={tasks} onFilter={handleFilter} onResetFilter={handleResetFilter} />
        </>
    );
};
