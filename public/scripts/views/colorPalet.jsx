var React = require('react')
var OneColor = require('./oneColor.jsx')
var Constants = require('./constants.jsx')

var ColorPalet = React.createClass({
  renderOneColor: function(i) {
    return (
      <OneColor
        key={i} num={i}
        colorPaletClicked={this.props.colorPaletClicked}
        nowColor={this.props.nowColor} />
    )
  },
  render: function() {
    var colors = []
    for(var i = 0; i < 15; i ++) {
      colors.push(this.renderOneColor(i))
    }

    var styles = {
      position: 'absolute',
      bottom: 100,
      left : 0,
      display: 'flex',
      flexWrap: 'wrap'
    }

    return(
      <div style={styles}>
        {colors}
      </div>
    )
  }
})

module.exports = ColorPalet;
