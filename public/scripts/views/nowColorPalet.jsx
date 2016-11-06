var React = require('react')

var NowColorPalet = React.createClass({
  render: function() {
    var nowColor = this.props.nowColor;

    var styles = {
      width: 40,
      height: 40,
      backgroundColor: nowColor,
      display: 'flex',
      flexWrap: 'wrap'
    }

    return(
      <div style={styles}>
      </div>
    )
  }
})

module.exports = NowColorPalet
