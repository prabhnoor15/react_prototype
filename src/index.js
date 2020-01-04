import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//import Counter from './Components/Counter';
import App from '/home/noor/Downloads/first/src/App'
import Counters from '/home/noor/Downloads/first/src/counters'
import NavBar from '/home/noor/Downloads/first/src/navbar'


const element = <h1> HEllo World </h1>;
//console.log(element);
//now we will slect the id of the html root to display the react component.

// now render function will put the react elemnt in the root id of html.

//ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(<App/>, document.getElementById('root'));
