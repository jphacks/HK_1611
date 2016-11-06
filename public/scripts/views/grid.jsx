var React = require('react')
var PropTypes = React.PropTypes

var Grid = React.createClass({
  render: function() {
    var num = this.props.num
    var nowGrid = this.props.nowGrid

    var styles = {
      marginRight: 2,
      backgroundColor: (nowGrid == num ? '#888': '#bbb'),
      width : 40,
      height : 40,
    }

    return(
      <div style={styles}
          onClick={this.props.gridClicked.bind(null,num)}>
      </div>
    )
  }
})

module.exports = Grid
