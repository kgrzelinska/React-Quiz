import React, {Component} from "react";
import ReactDOM from 'react-dom';

import './../sass/style.scss'; // adres do głównego pliku SASS

import Main from '../js/components/Main.js'


function App() {
    return <Main/>;
}

ReactDOM.render(<App/>, document.getElementById("app"));


