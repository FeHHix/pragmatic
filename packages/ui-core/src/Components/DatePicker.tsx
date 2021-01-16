import {DatePicker} from 'antd';
import {DatePickerProps} from 'antd/lib/date-picker';
import React from 'react';

/**
 * @generated
 */
interface IOwnProps {
    onChange?: (value: string) => void;
}

/**
 * @generated
 */
const DatePickerComponent: React.FC<IOwnProps & DatePickerProps> = (props) => {
    const handleChange = (value: moment.Moment | null) => {
        if (value) {
            props.onChange && props.onChange(value.toString());
        }
    }

    return <DatePicker {...props} onChange={handleChange} />;
};

export {DatePickerComponent as DatePicker};
