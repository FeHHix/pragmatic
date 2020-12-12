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
interface IAssigneeLookupResponse {
    id: string;
    name: string;
}

/**
 * @generated
 */
const handleResolve = (rs: IAssigneeLookupResponse) => rs.name;

/**
 * @generated
 */
export const TaskAssigneeLookupLabel: React.FC<IOwnProps> = ({id}) => (
    <LookupLabel id={id} url={`${API_URL}/users`} onResolve={handleResolve} />
);
