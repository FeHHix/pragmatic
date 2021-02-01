import {Input} from 'antd';
import {InputProps} from 'antd/lib/input/Input';
import React from 'react';
import {withReadonly} from '../HOC/withReadonly';

/**
 * @generated
 */
interface IOwnProps extends InputProps {}

/**
 * @generated
 */
const FormInput: React.FC<IOwnProps> = (props) => <Input {...props} />;

/**
 * @generated
 */
const FormInputHOC = withReadonly(FormInput);

export {FormInputHOC as FormInput};
