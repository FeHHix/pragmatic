import {Table, Skeleton} from 'antd';
import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import 'antd/dist/antd.css';
import {getTaskStatuses} from '../Service';
import {ITaskStatus} from '../Models';

/**
 * @generated
 */
const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
];

/**
 * @generated
 */
interface IState {
    isLoading: boolean;
    taskStatuses: ITaskStatus[];
}

/**
 * @generated
 */
function getInitialState(): IState {
    return {isLoading: true, taskStatuses: []};
}

/**
 * @generated
 */
export const TaskTaskStatusList: React.FC<RouteComponentProps> = () => {
    const [state, setState] = React.useState<IState>(getInitialState());
    const {isLoading, taskStatuses} = state;

    React.useEffect(() => {
        getTaskStatuses()
            .then((taskStatuses) => {
                setState({isLoading: false, taskStatuses});
            })
            .catch(() => {
                setState({isLoading: false, taskStatuses: []});
            });
    }, []);

    return isLoading ? <Skeleton /> : <Table columns={columns} dataSource={taskStatuses} />;
};
