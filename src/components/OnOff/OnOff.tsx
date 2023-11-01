import React from "react";
import './../UncontrolledOnOff/UncontrolledOnOff.tsx.css'

type OnOffType = {
    enabled: boolean
    onChange: () => void
}

export const OnOff: React.FC<OnOffType> = ({enabled, onChange}) => {

    const onChangeHandler = () => {
        onChange();
    }

    return (
        <div className={`container`}>
            <div className={`defaultStyle ${enabled ? 'green' : ''}`} onClick={onChangeHandler}>On</div>
            <div className={`defaultStyle ${!enabled ? 'red' : ''}`} onClick={onChangeHandler}>Off</div>
            <div className={`${enabled ? 'green' : 'red'}`}></div>
        </div>
    )
}