var React = require('react')
var Link = require('react-router').Link

var Top = React.createClass({
  render: function() {
    return (
      <div>
        <div>top page</div>
        <Link to="creation">hogehoge</Link>
      </div>
    )
  }
})

module.exports = Top
