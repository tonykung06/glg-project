import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing.jsx';
import Search from './Search.jsx';
import {Router, Route, hashHistory} from 'react-router';

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Landing} />
    <Route path="/search" component={Search} />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
