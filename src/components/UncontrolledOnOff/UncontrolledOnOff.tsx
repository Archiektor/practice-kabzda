import React, {useState} from "react";
import './UncontrolledOnOff.tsx.css';

export const UncontrolledOnOff = () => {

    const [enabled, setEnabled] = useState<boolean>(false);

    const enableIndicator = () => setEnabled(true);
    const disableIndicator = () => setEnabled(false);

    return (
        <div className={`container`}>
            <div onClick={enableIndicator} className={`defaultStyle ${enabled ? 'green' : ''}`}>On</div>
            <div onClick={disableIndicator} className={`defaultStyle ${!enabled ? 'red' : ''}`}>Off</div>
            <div className={`${enabled ? 'green' : 'red'}`}></div>
        </div>
    )
}