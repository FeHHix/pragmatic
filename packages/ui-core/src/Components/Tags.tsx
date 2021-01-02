import {Tag} from 'antd';
import React from 'react';

/**
 * @generated
 */
interface IOwnProps {
    tags: string[];
}

/**
 * @generated
 */
export const Tags: React.FC<IOwnProps> = ({tags}) => (
    <>
        {tags.map((tag: any) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';

            return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        })}
    </>
);
