import React from 'react';
import {UseMemoComponent} from './useMemoComponent';
import {ReactMemoComponent} from './ReactMemoComponent';
import {UseCallBackComponent} from './useCallbackComponent';

export default {
    component: UseCallBackComponent,
};

export const ExampleWithUseMemo1 = () => {
    return <UseMemoComponent/>
}


export const ExampleWithUseMemo2 = () => {
    return <ReactMemoComponent/>
}

export const ExampleWithUseCallback3 = () => {
    return <UseCallBackComponent/>
}


