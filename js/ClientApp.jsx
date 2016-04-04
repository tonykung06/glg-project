var React = require('react');
var ReactDOM = require('react-dom');
var MyTitle = require('./MyTitle');

var MyFirstComponent = function() {
  return (
    <div style={{
      color: 'red'
    }}>
      <MyTitle title="props are great!" color="green" />
      <MyTitle title="props are the best!" color="red" />
    </div>
  );
};

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'));
