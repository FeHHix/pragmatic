import {Tabs} from 'antd';
import React from 'react';
import {Route, useHistory, useLocation} from 'react-router-dom';
import {IRoute} from '../Models';

const {TabPane} = Tabs;

/**
 * @generated
 */
export interface ITabRoute extends IRoute {
    key: string;
}

/**
 * @generated
 */
interface IOwnProps {
    routes: ITabRoute[];
}

/**
 * @generated
 */
export const TabsRouter: React.FC<IOwnProps> = ({routes}) => {
    const history = useHistory();
    const location = useLocation();

    const activeRoute = routes.find(({key}) => key === location.pathname);

    const handleTabChange = (path: string) => {
        history.push(path);
    };

    return (
        <Tabs defaultActiveKey={activeRoute?.key} onChange={handleTabChange}>
            {routes.map(({component, exact, key, label, path, strict}) => (
                <TabPane tab={label} key={key}>
                    <Route component={component} exact={exact} path={path} strict={strict} />
                </TabPane>
            ))}
        </Tabs>
    );
};
