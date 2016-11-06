var React = require('react')
var PropTypes = React.PropTypes

var Led = require('./led.jsx')

var styles = {
  position: 'absolute',
  top: 60,
  left : 5,
  backgroundColor: '#eee',
  display: 'flex',
  flexWrap: 'wrap'
}

var LedList = React.createClass({
  renderLed: function(i) {
    return (
      <Led
        key={i}
        num={i}
        led={this.props.led}
        nowGrid={this.props.nowGrid}
        colorClicked={this.props.colorClicked} />
    )
  },

  render: function() {
    var leds = []
    for(var i = 0; i < 15; i++) {
      leds.push(this.renderLed(i))
    }

    return(
      <div style={styles}>
        {leds}
      </div>
    )
  }
})

module.exports = LedList
