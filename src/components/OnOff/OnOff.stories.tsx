import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {OnOff} from './OnOff';
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
    component: OnOff,
};

const onChangeHandler = action('on or off was clicked');

export const workingOnOff = () => {
    return <OnOff enabled={true} onChange={onChangeHandler}/>
}

export const offOnOff = () => {
    return <OnOff enabled={false} onChange={onChangeHandler}/>
}

export const OnOffTest = () => {
    const [enabled, setEnabled] = useState<boolean>(false);

    const onChangeHandler = () => {
        setEnabled(!enabled);
    }

    return <OnOff enabled={enabled} onChange={onChangeHandler}/>
}