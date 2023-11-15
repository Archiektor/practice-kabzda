import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import {useState} from 'react';

////////////////////////////////////////////////
////////////////  1 VERSION    ************************
// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
//
// export default meta;

////////////////////////////////////////////////
////////////////  2 VERSION    ************************

// type Story = StoryObj<typeof Accordion>;
//
// export const FirstStory: Story = {
//     args: {
//         title: 'hello',
//         collapsed: true,
//         onChange: () => {
//         },
//     }
// }

export default {
    component: Accordion,
};

const onChangeHandler = action('on Change');
// const onItemClickHandler = action('someone clicked on me!');
const onItemClickHandler = (value: any) => {
    alert(`Someone with id ${value} is clicked on me!`);
}

export const CollapsedAccordion = () => {
    return <Accordion collapsed={true} title={'Collapsed Accordion'} onChange={onChangeHandler} tasks={[]} onItemClick={() => {
    }}/>
}

export const OpenedAccordion = () => {
    return <Accordion collapsed={false} title={'Opened Accordion'} onChange={onChangeHandler} tasks={[]} onItemClick={() => {
    }}/>
}

export const AccordionTest = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return <Accordion collapsed={collapsed} title={'Opened Accordion'} onChange={() => setCollapsed(!collapsed)} tasks={[
        {title: 'CSS', value: 1},
        {title: 'JS', value: 2},
        {title: 'REACT', value: 3},
    ]} onItemClick={onItemClickHandler}/>
}