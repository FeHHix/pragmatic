import {Routes as TasksRoutes} from '@pragmatic/tasks';
import {renderRoutes} from '@pragmatic/ui-core';
import {Layout, Menu} from 'antd';
import {Footer, Header} from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import {Link, Route} from 'react-router-dom';

export const AppLayout: React.FC = () => (
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
                    <Menu.Item key="1">
                        <Link to="/tasks">Tasks</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/users">Users</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/statuses">Statuses</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{padding: '0 24px 24px'}}>
                {renderRoutes(TasksRoutes)}
            </Layout>
        </Layout>
        <Footer style={{textAlign: 'center'}}>Pragmatic ©2020 Created by Pragmatic</Footer>
    </Layout>
);
