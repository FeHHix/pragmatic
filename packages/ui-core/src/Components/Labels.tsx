import {Tag} from 'antd';
import React from 'react';

/**
 * @generated
 */
interface IOwnProps {
    labels: string[];
}

/**
 * @generated
 */
export const Labels: React.FC<IOwnProps> = ({labels}) => (
    <>
        {labels.map((label: any) => {
            let color = label.length > 5 ? 'geekblue' : 'green';

            return (
                <Tag color={color} key={label}>
                    {label.toUpperCase()}
                </Tag>
            );
        })}
    </>
);
