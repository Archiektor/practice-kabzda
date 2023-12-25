import React, {useState} from 'react';

export default {
    title: 'useAdvancedState demo'
};

export const Example1 = () => {

    /* 1 Allow not to use hook useMemo but only insert a callback as initial value of hook useState
    * */
    const generateData = () => {
        console.log('generate data');
        return 54535345;
    }

    console.log('Example1');
    const [counter, setCounter] = useState(generateData);

    /* 2 Allow to use functions
    *
    *     const changer = (counter: number) => {
        //debugger;
        return counter + 1;
        *
        *  => setCounter(changer)
    }
    * */


    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        <hr/>
        <h2>{counter}</h2>
    </>
}


