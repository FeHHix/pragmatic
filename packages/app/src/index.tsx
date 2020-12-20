import {Breadcrumb, Layout, Menu} from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Routes as renderTasksRoutes} from '@pragmatic/tasks';
import {Content, Footer, Header} from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import 'antd/dist/antd.css';
import './styles.css';

ReactDOM.render(
    <Router>
        <Layout>
            <Header className="header">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                        <Link to="/tasks/create">Create Task</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Tasks</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="ant-layout-has-sider site-layout-background" style={{padding: '24px 0'}}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu mode="inline" defaultSelectedKeys={['1']} style={{height: '100%'}}>
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
                    <Content style={{padding: '0 24px', minHeight: 1000}}>
                        <Route path="/" />
                        {renderTasksRoutes()}
                    </Content>
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}>Pragmatic ©2020 Created by Pragmatic</Footer>
        </Layout>
    </Router>,
    document.getElementById('root')
);
