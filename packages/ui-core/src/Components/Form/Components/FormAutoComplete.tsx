import React from 'react';
import {AutoComplete, IAutoCompleteProps} from '../../../Components/AutoComplete';
import {withReadonly} from '../HOC/withReadonly';

/**
 * @generated
 */
interface IOwnProps extends IAutoCompleteProps {}

/**
 * @generated
 */
const FormAutoComplete: React.FC<IOwnProps> = (props) => <AutoComplete {...props} />;

/**
 * @generated
 */
const FormAutoCompleteHOC = withReadonly(FormAutoComplete);

export {FormAutoCompleteHOC as FormAutoComplete};
