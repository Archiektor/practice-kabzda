import React, {useReducer} from "react";
import {collapseReducer, toggleAC} from '../../reducers/collapseReducer';

type AccordionPropsType = {
    title: string;
}
type AccordionTitlePropsType = {
    title: string;
    children?: React.ReactNode
    onClick: () => void
}

export const UncontrolledAccordion: React.FC<AccordionPropsType> = ({title}) => {
    const [state, dispatchCollapse] = useReducer(collapseReducer, {collapsed: false})

    return <div>
        <AccordionTitle title={title} onClick={() => dispatchCollapse(toggleAC(!state.collapsed))}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = ({title, onClick}) => {
    return (
        <h3 onClick={() => onClick()}>
            {title}
        </h3>)
}

const AccordionBody = () => {
    return (
        <ul>
            <li>First element</li>
            <li>Second element</li>
            <li>Third element</li>
        </ul>
    )
}

