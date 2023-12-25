import React, {useMemo, useState} from 'react';

export const UseMemoComponent = () => {

    const [a, setA] = useState<number>(1);
    const [b, setB] = useState<number>(1);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempRes = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000) {
                fake++;
                const random = Math.random();
            }
            tempRes = tempRes * i;
        }
        return tempRes;
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return (
        <div>
            <input type="text" value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>Result for A : {resultA}</div>
            <div>Result for B : {resultB}</div>
        </div>
    )
}