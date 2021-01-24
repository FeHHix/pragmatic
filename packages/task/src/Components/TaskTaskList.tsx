import {FilterInput, IColumn, json2qs, qs2json, Table} from '@pragmatic/ui-core';
import {Button, Skeleton, Space} from 'antd';
import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import {getTasks} from '../Service';
import {TaskUserLookupLabel} from './TaskUserLookupLabel';
import 'antd/dist/antd.css';
import {ITask, ITaskFilter} from '../Models';
import {TaskTaskStatusLookupLabel} from './TaskTaskStatusLookupLabel';
import {TaskUserAutoComplete} from './TaskUserAutoComplete';
import {TaskTaskListFilter} from './TaskTaskListFilter';
import {TaskStatusAutoComplete} from './TaskStatusAutoComplete';
import {TaskTagAutoComplete} from './TaskTagAutoComplete';
import {TaskTaskTagLookupLabel} from './TaskTaskTagLookupLabel';

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
        componentFilter: TaskTagAutoComplete,
        dataIndex: 'tags',
        key: 'tags',
        render: (tags: string[]) => tags.map((tag) => <TaskTaskTagLookupLabel id={tag} />),
        title: 'Tags',
    },
    {
        componentFilter: TaskStatusAutoComplete,
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
function getInitialFilter(queryParams?: string): ITaskFilter {
    return queryParams ? qs2json(queryParams) : {};
}

/**
 * @generated
 */
export const TaskTaskList: React.FC<RouteComponentProps> = ({history, location: {pathname, search}}) => {
    const [state, setState] = React.useState<IState>(getInitialState());
    const [filter, setFilter] = React.useState<ITaskFilter>(getInitialFilter(search));
    const [showFilter, setShowFilter] = React.useState<boolean>(false);
    const {isLoading, tasks} = state;

    React.useEffect(() => {
        history.push(`${pathname}?${json2qs(filter)}`);

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
        setFilter((prevFilter) => ({...prevFilter, [dataIndex]: undefined}));
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
            <TaskTaskListFilter filter={filter} onClose={handleToggleFilterPanel} onFilter={handleFilter} show={showFilter} />
            <Table columns={columns} dataSource={tasks} filter={filter} onFilter={handleFilter} onResetFilter={handleResetFilter} />
        </>
    );
};
