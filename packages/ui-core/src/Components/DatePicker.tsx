import {DatePicker} from 'antd';
import {DatePickerProps} from 'antd/lib/date-picker';
import moment from 'moment';
import React from 'react';

/**
 * @generated
 */
interface IOwnProps {
    onChange?: (value: string) => void;
    value?: string;
}

/**
 * @generated
 */
const DatePickerComponent: React.FC<IOwnProps & DatePickerProps> = (props) => {
    const {onChange, value, ...restProps} = props;

    const handleChange = (value: moment.Moment | null) => {
        if (value) {
            props.onChange && props.onChange(value.toISOString());
        }
    }

    return <DatePicker {...restProps} onChange={handleChange} value={value ? moment(value) : null} />;
};

export {DatePickerComponent as DatePicker};
