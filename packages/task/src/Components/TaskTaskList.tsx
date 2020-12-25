import {Table, Tag, Skeleton, Space} from 'antd';
import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import {getTasks} from '../Service';
import {TaskUserLookupLabel} from './TaskUserLookupLabel';
import 'antd/dist/antd.css';
import {ITask} from '../Models';
import {TaskTaskStatusLookupLabel} from './TaskTaskStatusLookupLabel';

/**
 * @generated
 */
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
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
    },
    {
        title: 'Summary',
        dataIndex: 'summary',
        key: 'summary',
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
                <Link to={`/tasks/edit/${id}`}>Update</Link>
                <Link to={`/tasks/${id}`}>View</Link>
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
    const {isLoading, tasks} = state;

    React.useEffect(() => {
        getTasks()
            .then((tasks) => {
                setState({isLoading: false, tasks});
            })
            .catch(() => {
                setState({isLoading: false, tasks: []});
            });
    }, []);

    return isLoading ? <Skeleton /> : <Table columns={columns} dataSource={tasks} />;
};