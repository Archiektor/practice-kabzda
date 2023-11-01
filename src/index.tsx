import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/////////////////////////////////////////////
// ****************    TYPESCRIPT

// let person = {
//     name: 'Nikki',
//     age: 31,
//     address: {
//         city: 'Szczecin',
//         country: 'Poland'
//     }
// }
//
// const country = person["address"]["country"];
// console.log(country);

// let person1 = person;
//
// person1['address'].city = 'Minsk';
// person1['address'].city = 25;

// let str: string;
//
// str = '123';
// str = 10;
// str = true;

// let x: number;
//
// x = 5;
// x = "str";
// x = str;

// let arr: Array<string | number>;
//
// arr = [1, 2, "3", "4"];
// arr = [1,2,true,"4"];


// let obj1 = {
//     name: 'Nikki',
//     age: 31,
// }

// const {name: myName} = obj1;
// console.log(myName);




