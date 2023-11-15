import React from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean
    onChange?: () => void
    tasks: ItemType[]
    onItemClick: (value: any) => void
}
type AccordionTitlePropsType = {
    title: string
    setChangeMode?: () => void
}

type AccordionBodyType = {
    tasks: ItemType[]
    onItemClick: (value: any) => void
}

type ItemType = {
    title: string
    value: any
}

export const Accordion: React.FC<AccordionPropsType> = ({title, collapsed, onChange, tasks, onItemClick}) => {

    return <div>
        <AccordionTitle title={title} setChangeMode={onChange}/>
        {!collapsed && <AccordionBody tasks={tasks} onItemClick={onItemClick}/>}
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


const AccordionBody: React.FC<AccordionBodyType> = ({tasks, onItemClick}) => {
    const onItemClickHandler = (value: any) => {
        onItemClick(value);
    }

    const tasksList = tasks.map((t, idx) => {
        return <li key={idx} onClick={() => onItemClickHandler(t.value)}>{t.title}</li>
    })

    return (
        <ul>
            {tasksList}
        </ul>
    )
}

