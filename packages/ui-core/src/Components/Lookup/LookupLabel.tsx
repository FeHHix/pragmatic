import React from 'react';
import { lookup } from './Service';
import { Skeleton } from 'antd';

interface IOwnProps {
    id: string;
    onResolve: (rs: any) => string; // TODO: должен быть рендер компонента для span
    url: string;
}

interface IState {
    isLoading: boolean;
    rs?: unknown;
}

export const LookupLabel: React.FC<IOwnProps> = ({id, onResolve, url}) => {
    const [state, setState] = React.useState<IState>({isLoading: true});
    const {isLoading, rs} = state;

    React.useEffect(() => {
        lookup(url)(id).then((rs) => {
            setState({isLoading: false, rs});
        }).catch(() => {
            setState({isLoading: false});
        });
    }, [id]);

    return isLoading ? <Skeleton.Button /> : <span>{onResolve(rs)}</span>;
};
