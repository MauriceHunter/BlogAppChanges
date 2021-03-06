import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import Edit from './Components/Edit';
import Show from './Components/Show';
import Create from './Components/Create'
import * as serviceWorker from './serviceWorker';
import App2 from './App2';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/Home' component={App2} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/create' component={Create} />
            <Route path='/show/:id' component={Show} />
        </Switch>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
