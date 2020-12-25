import {Routes as TasksRoutes} from '@pragmatic/task';
import {renderRoutes} from '@pragmatic/ui-core';
import {Layout, Menu} from 'antd';
import {CarryOutOutlined, UserOutlined} from '@ant-design/icons';
import {Footer, Header} from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';

const AppLayout: React.FC<RouteComponentProps> = ({history}) => {
    const createSubMenuClickHandler = (to: string) => () => {
        history.push(to);
    };

    return (
        <Layout>
            <Header className="header">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                        <Link to="/tasks/create">Create Task</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Layout className="ant-layout-has-sider">
                <Sider width={200} className="site-layout-background">
                    <Menu mode="inline" defaultSelectedKeys={['1']} style={{height: '100%', borderRight: 0}}>
                        <SubMenu key="/tasks" icon={<CarryOutOutlined />} onTitleClick={createSubMenuClickHandler('/tasks')} title="Tasks">
                            <Menu.Item key="/tasks/taskStatuses">
                                <Link to="/tasks/taskStatuses">Statuses</Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item icon={<UserOutlined />} key="/users">
                            <Link to="/users">Users</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>{renderRoutes(TasksRoutes)}</Layout>
            </Layout>
            <Footer style={{textAlign: 'center'}}>Pragmatic ©2020 Created by Pragmatic</Footer>
        </Layout>
    );
};

const Router = withRouter(AppLayout);

export {Router as AppLayout};
