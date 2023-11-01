import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from './components/UncontolledAccordeon/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {OnOff} from './components/OnOff/OnOff';

const App = () => {
    const [enabled, setEnabled] = useState<boolean>(false);

    const onChange = () => {
        setEnabled(!enabled)
    }

    return (
        <div className={`App`}>
            <OnOff enabled={enabled} onChange={onChange}/>
            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledAccordion title={'Menu'}/>*/}
            {/*<UncontrolledAccordion title={'Users'}/>*/}
            {/*<UncontrolledRating value={1}/>*/}
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}
        </div>
    );
}

export default App;
