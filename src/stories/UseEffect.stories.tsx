import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
};

export const SimpleExample = () => {
    const [counter, setCounter] = useState(() => 1);
    const [fake, setFake] = useState(() => 0);

    console.log('Simple Example');

    useEffect(() => {
        console.log('use Effect work every time ');
    })

    useEffect(() => {
        console.log('use Effect work only first time');
    }, [])

    useEffect(() => {
        console.log('use Effect work every time when counter change');
        document.title = counter.toString();
        // api.getusers().then();
        // setInterval;
        // indexDB;
        // document.getElementById;
        // document.title = 'User';
    }, [counter])

    return <>
        Hello, {counter} / {fake}
        <hr/>
        <button onClick={() => setFake(state => state + 1)}>fake +</button>
        <button onClick={() => setCounter(state => state + 1)}>counter +</button>
    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(() => 1);
    const [fake, setFake] = useState(() => 0);

    console.log('SetTimeout Example');

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout');
            document.title = counter.toString();
        }, 1000)
    }, [counter])

    return <>
        Hello, {counter} / {fake}
        <hr/>
        <button onClick={() => setFake(state => state + 1)}>fake +</button>
        <button onClick={() => setCounter(state => state + 1)}>counter +</button>
    </>
}

export const ClockExample = () => {
    const [time, setTime] = useState({hour: 0, minutes: 0, seconds: 0});
    console.log('Clock Example rendered');

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTime(state => ({
                    ...state,
                    hour: date.getHours(),
                    minutes: date.getMinutes(),
                    seconds: date.getSeconds(),
                }
            ))
        }, 1000)
    }, [])

    return <>
        <hr/>
        Hello, {time.hour} : {time.minutes} : {time.seconds}
        <hr/>
    </>
}


