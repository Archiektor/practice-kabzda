import React, {useState} from "react";

type ValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: ValueType
}

export const UncontrolledRating: React.FC<RatingPropsType> = () => {

    const [value, setValue] = useState<ValueType>(0);

    const changeStarValue = (value: ValueType) => {
        setValue(value)
    }

    return (
        <div>
            <Star selected={value > 0} changeStarValue={() => changeStarValue(1)}/>
            <Star selected={value > 1} changeStarValue={() => changeStarValue(2)}/>
            <Star selected={value > 2} changeStarValue={() => changeStarValue(3)}/>
            <Star selected={value > 3} changeStarValue={() => changeStarValue(4)}/>
            <Star selected={value > 4} changeStarValue={() => changeStarValue(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    changeStarValue: () => void
}

export const Star: React.FC<StarPropsType> = ({selected, changeStarValue}) => {
    return <span onClick={() => changeStarValue()}>{selected ? <b>star</b> : `star`}</span>;
}