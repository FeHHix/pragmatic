import {AutoComplete} from 'antd';
import {AutoCompleteProps} from 'antd/lib/auto-complete';
import React from 'react';
import {withReadonly} from '../HOC/withReadonly';

/**
 * @generated
 */
interface IOwnProps extends AutoCompleteProps {}

/**
 * @generated
 */
const FormAutoComplete: React.FC<IOwnProps> = (props) => <AutoComplete {...props} />;

/**
 * @generated
 */
const FormAutoCompleteHOC = withReadonly(FormAutoComplete);

export {FormAutoCompleteHOC as FormAutoComplete};
