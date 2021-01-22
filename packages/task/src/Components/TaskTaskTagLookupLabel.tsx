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
interface ITaskTagLookupResponse {
    id: string,
    name: string,
}

/**
 * @generated
 */
const renderLabel = (rs: ITaskTagLookupResponse) => <Tag color="blue">{rs.name}</Tag>;

/**
 * @generated
 */
export const TaskTaskTagLookupLabel: React.FC<IOwnProps> = ({id}) => (
    <LookupLabel id={id} url={`${API_URL}/taskTags`} renderLabel={renderLabel} />
);
