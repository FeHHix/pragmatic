import React from 'react';
import {LookupLabel} from '@pragmatic/ui-core';

interface IOwnProps {
    id: string;
}

interface IAssigneeLookupResponse {
    id: string;
    name: string;
}

const handleResolve = (rs: IAssigneeLookupResponse) => rs.name;

export const TaskAssigneeLookupLabel: React.FC<IOwnProps> = ({id}) => (
    <LookupLabel id={id} url={`${API_URL}/users`} onResolve={handleResolve} />
);
