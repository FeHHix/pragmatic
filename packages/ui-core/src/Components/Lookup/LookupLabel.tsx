import React from 'react';
import {lookup} from './Service';
import {Skeleton} from 'antd';

/**
 * @generated
 */
interface IOwnProps {
    id: string;
    renderLabel: (rs: any) => JSX.Element;
    url: string;
}

/**
 * @generated
 */
interface IState {
    isLoading: boolean;
    rs?: unknown;
}

/**
 * @generated
 */
export const LookupLabel: React.FC<IOwnProps> = ({id, renderLabel, url}) => {
    const [state, setState] = React.useState<IState>({isLoading: true});
    const {isLoading, rs} = state;

    React.useEffect(() => {
        lookup(url)(id)
            .then((rs) => {
                setState({isLoading: false, rs});
            })
            .catch(() => {
                setState({isLoading: false});
            });
    }, [id]);

    return isLoading ? <Skeleton.Button /> : renderLabel(rs);
};
