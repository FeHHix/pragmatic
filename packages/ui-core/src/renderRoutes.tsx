import Breadcrumb from 'antd/lib/breadcrumb/Breadcrumb';
import {Content} from 'antd/lib/layout/layout';
import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {IRoute} from './Models';

export function renderRoutes(routes: IRoute[], extraProps?: any, switchProps?: any) {
    if (extraProps === void 0) {
        extraProps = {};
    }

    if (switchProps === void 0) {
        switchProps = {};
    }

    return routes
        ? React.createElement(
              Switch,
              switchProps,
              routes.map(function (route: any, i: number) {
                  return React.createElement(Route, {
                      key: route.key || i,
                      path: route.path,
                      exact: route.exact,
                      strict: route.strict,
                      render: function render(props) {
                          const crumbs = routes
                              .filter(({path}) => {
                                  return props.match.path.includes(path);
                              })
                              .map<IRoute>(({path, ...rest}) => {
                                  return {
                                      path: (Object.keys(props.match.params).length as any)
                                          ? Object.keys(props.match.params).reduce(
                                                (path, param) => path.replace(`:${param}`, (props.match.params as any)[param]),
                                                path
                                            )
                                          : path,
                                      ...rest,
                                  };
                              })
                              .map<JSX.Element>(({label, path}) => (
                                  <Breadcrumb.Item key={path}>
                                      <Link to={path}>{label}</Link>
                                  </Breadcrumb.Item>
                              ));

                          const breadcrumbItems = [
                              <Breadcrumb.Item key="home">
                                  <Link to="/">Home</Link>
                              </Breadcrumb.Item>,
                          ].concat(crumbs);

                          const Component = route.render ? route.render(props) : React.createElement(route.component, props);

                          return (
                              <>
                                  <Breadcrumb style={{margin: '16px 0'}}>{breadcrumbItems}</Breadcrumb>
                                  <Content
                                      className="site-layout-background"
                                      style={{
                                          padding: 24,
                                          margin: 0,
                                          minHeight: 280,
                                      }}
                                  >
                                      {Component}
                                  </Content>
                              </>
                          );
                      },
                  });
              })
          )
        : null;
}
