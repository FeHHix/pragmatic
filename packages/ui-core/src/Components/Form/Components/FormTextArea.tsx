import {Input} from 'antd';
import {TextAreaProps} from 'antd/lib/input/TextArea';
import React from 'react';
import {withReadonly} from '../HOC/withReadonly';

const {TextArea} = Input;

/**
 * @generated
 */
interface IOwnProps extends TextAreaProps {}

/**
 * @generated
 */
const FormTextArea: React.FC<IOwnProps> = (props) => <TextArea {...props} />;

/**
 * @generated
 */
const FormTextAreaHOC = withReadonly(FormTextArea);

export {FormTextAreaHOC as FormTextArea};
