var React = require('react')
var ReactDOM = require('react-dom')
var PropTypes = React.PropTypes

var Container = require('./views/container.jsx')

var Index = React.createClass({
  render: function() {
    return(
      <Container />
    )
  }
})

ReactDOM.render(
  <Index />,
  document.getElementById("container")
);
