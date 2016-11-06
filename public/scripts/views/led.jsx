var React = require('react')
var PropTypes = React.PropTypes


var Led = React.createClass({
  checkColor: function(color) {
    if(color == '#######') {
      return "#eee"
    } else {
      return color
    }
  },
  render: function() {
    var led = this.props.led
    var num = this.props.num
    var nowGrid = this.props.nowGrid

    var styles = {
      marginRight: 4,
      border : '1px solid black',
      backgroundColor: this.checkColor(led[Number(nowGrid)].colors[num]) ,
      width  : 36,
      height : 36,
      borderRadius: "50%",
    }

    return(
      <div style={styles}
        onClick={this.props.colorClicked.bind(null, num)}>
      </div>
    )
  }
})

module.exports = Led
