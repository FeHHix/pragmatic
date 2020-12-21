import {Breadcrumb} from 'antd';
import {BreadcrumbProps} from 'antd/lib/breadcrumb/Breadcrumb';
import React from 'react';
import {RouteComponentProps, Link, withRouter} from 'react-router-dom';

/**
 * @generated
 */
interface IBreadcrumbConfig {
    [key: string]: string;
}

/**
 * @generated
 */
interface IOwnProps extends RouteComponentProps, BreadcrumbProps {
    config: IBreadcrumbConfig;
    rootLabel: string;
}

/**
 * @generated
 */
const Breadcrumbs: React.FC<IOwnProps> = ({config, location, match, rootLabel, style}) => {
    const pathSnippets = location.pathname.split('/').filter((i) => i);

    console.log('match', match.params);

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;

        console.log('url', url);

        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{config[url]}</Link>
            </Breadcrumb.Item>
        );
    });

    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">{rootLabel}</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    return <Breadcrumb style={style}>{breadcrumbItems}</Breadcrumb>;
};

const Router = withRouter(Breadcrumbs);

export {Router as Breadcrumbs};
