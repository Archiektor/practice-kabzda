import React, {useState} from "react";

type AccordionPropsType = {
    title: string;
}
type AccordionTitlePropsType = {
    title: string;
    children?: React.ReactNode
    onClick: () => void
}

export const UncontrolledAccordion: React.FC<AccordionPropsType> = ({title}) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    return <div>
        <AccordionTitle title={title} onClick={() => setCollapsed(!collapsed)}/>
        {/*<button onClick={() => setCollapsed(!collapsed)}>X</button>*/}
        {!collapsed && <AccordeonBody/>}
    </div>
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = ({title, onClick}) => {
    return (
        <h3 onClick={() => onClick()}>
            {title}
        </h3>)
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

