var React = require('react')
var PropTypes = React.PropTypes

var Grid = require('./grid.jsx')

var styles = {
  position: "absolute",
  left: 10,
  bottom: 50,
  backgroundColor: '#eee',
  display: 'flex',
  flexWrap: 'wrap'
}

var Palet = React.createClass({
  renderGrid: function(i) {
    return (
      <Grid
        key={i}
        num={i}
        gridClicked={this.props.gridClicked}
        nowGrid={this.props.nowGrid} />
    )
  },
  render: function() {
    var grids = []
    for(var i = 0; i < 10; i++) {
      grids.push(this.renderGrid(i))
    }

    return(
      <div style={styles}>
        {grids}
      </div>
    )
  }
})

module.exports = Palet
