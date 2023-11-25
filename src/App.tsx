import React from 'react';
import './App.css';
import {UncontrolledAccordion} from './components/UncontolledAccordeon/UncontrolledAccordion';

const App = () => {

    return (
        <div className={`App`}>
            <UncontrolledAccordion title={'Accordion'}/>

            {/*<Select parentValue={'city'} items={[*/}
            {/*    {title: 'Minsk', value: 1},*/}
            {/*    {title: 'Szczecin', value: 2},*/}
            {/*    {title: 'Berlin', value: 3},*/}
            {/*]}/>*/}
        </div>
    );
}

export default App;
