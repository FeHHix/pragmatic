import React from 'react';
import {LookupLabel} from '@pragmatic/ui-core';
import { Tag } from 'antd';

/**
 * @generated
 */
interface IOwnProps {
    id: string;
}

/**
 * @generated
 */
interface ITaskStatusLookupResponse {
    id: string,
    name: string,
}

/**
 * @generated
 */
const renderLabel = (rs: ITaskStatusLookupResponse) => <Tag color="blue">{rs.name}</Tag>;

/**
 * @generated
 */
export const TaskTaskStatusLookupLabel: React.FC<IOwnProps> = ({id}) => (
    <LookupLabel id={id} url={`${API_URL}/taskStatuses`} renderLabel={renderLabel} />
);
