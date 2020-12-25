import React from 'react';
import {LookupLabel} from '@pragmatic/ui-core';

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
const renderLabel = (rs: ITaskStatusLookupResponse) => <span>{rs.name}</span>;

/**
 * @generated
 */
export const TaskTaskStatusLookupLabel: React.FC<IOwnProps> = ({id}) => (
    <LookupLabel id={id} url={`${API_URL}/taskStatuses`} renderLabel={renderLabel} />
);
