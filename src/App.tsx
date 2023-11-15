import React from 'react';
import './App.css';
import {Select} from './components/Select/Select';

const App = () => {

    return (
        <div className={`App`}>
            <Select parentValue={'city'} items={[
                {title: 'Minsk', value: 1},
                {title: 'Szczecin', value: 2},
                {title: 'Berlin', value: 3},
            ]}/>
        </div>
    );
}

export default App;
