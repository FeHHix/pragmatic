import React from 'react';
import {FormContext} from '../FormContext';

export function withReadonly<TProps>(WrappedComponent: React.ComponentType<TProps>) {
    const FormInput: React.FC<TProps> = (props) => {
        const {readonly} = React.useContext(FormContext);

        return <WrappedComponent {...props} disabled={readonly} />;
    };

    return FormInput;
}
