import React from 'react';
import {Table, Tag, Skeleton, Space, Button} from 'antd';
import 'antd/dist/antd.css';
import {getTasks} from '../Service';
import {TaskAssigneeLookupLabel} from './TaskAssigneeLookupLabel';
import {TaskCreateTaskModal} from './TaskCreateTaskModal';

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
                <TaskAssigneeLookupLabel id={assignee} />
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
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <a>Update</a>
                <a>Delete</a>
                <a>Assign</a>
            </Space>
        ),
    },
];

/**
 * @generated
 */
export const TaskList: React.FC = () => {
    const [state, setState] = React.useState({isLoading: true, tasks: []});
    const [isAddTaskModalVisible, setIsAddTaskModalVisible] = React.useState(false);
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

    const handleSubmit = () => {
        console.log('Not implemented');
    };

    const handleCancel = () => {
        console.log('Not implemented');
    };

    const handleClickAddTask = () => {
        console.log('Add task');
        setIsAddTaskModalVisible(true);
    };

    return (
        <>
            {isLoading ? <Skeleton /> : <Table columns={columns} dataSource={tasks} />}
            <TaskCreateTaskModal onCancel={handleCancel} onSubmit={handleSubmit} showModal={isAddTaskModalVisible} />
            <Button htmlType="button" onClick={handleClickAddTask} type="default">
                Create task
            </Button>
        </>
    );
};
