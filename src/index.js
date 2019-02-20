import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import * as serviceWorker from './serviceWorker';

import {OutsideProvider} from "./Outside";

ReactDOM.render(<OutsideProvider><Home/></OutsideProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
