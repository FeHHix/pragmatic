import {RouteProps} from 'react-router-dom';

export interface IRoute extends RouteProps {
    label?: string;
    path: string;
}
