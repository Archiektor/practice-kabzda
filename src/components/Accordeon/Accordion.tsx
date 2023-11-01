import React from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean
    onChange?: () => void
}
type AccordionTitlePropsType = {
    title: string
    setChangeMode?: () => void
}

export const Accordion: React.FC<AccordionPropsType> = ({title, collapsed, onChange}) => {

    return <div>
        <AccordionTitle title={title} setChangeMode={onChange}/>
        {!collapsed && <AccordeonBody/>}
    </div>
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = ({title, setChangeMode}) => {
    const onClickHandler = () => {
        if (setChangeMode) {
            setChangeMode()
        }
    }

    return (<h3 onClick={onClickHandler}>{title}</h3>)
}

const AccordeonBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

