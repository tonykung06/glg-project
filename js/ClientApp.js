var React = require('react');
var ReactDOM = require('react-dom');
var MyTitle = require('./MyTitle');
var div = React.DOM.div;
var MyTitleFactory = React.createFactory(MyTitle);
var ce = React.createElement;

var MyFirstComponent = (
  div({style: {color: 'red'}},
    React.createElement(MyTitle, null),
    MyTitleFactory(null),
    ce(MyTitle, null)
  )
);

ReactDOM.render(MyFirstComponent, document.getElementById('app'));
