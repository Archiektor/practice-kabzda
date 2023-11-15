import React, {useState} from 'react';
import './Select.css';

type ItemType = {
    title: string
    value: any
}

type SelectType = {
    parentValue: string
    items: ItemType[]
}

type SelectBodyType = {
    items: ItemType[]
}

export const Select: React.FC<SelectType> = ({parentValue, items}) => {
    const [enable, setEnable] = useState<boolean>(false);

    const onBlurHandler = () => {
        //debugger;
        setEnable(false);
    }

    return (
        <div className={'select-wrapper'}>
            <div className={'select-title'} onClick={() => setEnable(!enable)} onBlur={onBlurHandler} tabIndex={-1}>{parentValue}</div>
            {enable && <SelectBody items={items}/>}
        </div>
    );
};

const SelectBody: React.FC<SelectBodyType> = ({items}) => {
    const itemsListForRender = items.map((item, idx) => {
        return <div key={idx}>{item.title}</div>
    })

    return (
        <div className={'select-body'}>
            {itemsListForRender}
        </div>
    );
};