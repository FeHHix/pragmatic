/**
 * @generated
 */
export interface IFilterProps {
    onChange?: (value: string) => void;
    onPressEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder: string;
    style: React.CSSProperties;
    value?: string;
}

/**
 * @generated
 */
export interface IColumn {
    componentFilter?: React.ComponentType<IFilterProps>;
    dataIndex: string;
    key: string;
    render?: (value: string) => JSX.Element;
    title: string;
}
