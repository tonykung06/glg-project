require('../scss/style.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing.jsx';
import {Router, Route, hashHistory} from 'react-router';

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Landing} />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
