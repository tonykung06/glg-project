require('./style.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import {Router, Route, hashHistory} from 'react-router';

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
