var React = require('react')

var colors = require('./constants.jsx').COLORS

var OneColor = React.createClass({
  render : function() {
    var nowColor = this.props.nowColor
    var num = this.props.num
    var color = colors[Number(num)]
    var styles = {
      width: 42,
      height: 72,
      backgroundColor: color,
      border: ( nowColor == Number(num)  ? '1px solid black' : 'none')
    }

    return (
      <div
        style={styles}
        onClick={this.props.colorPaletClicked.bind(null, num)}
        >
      </div>
    )
  }
})

module.exports = OneColor
