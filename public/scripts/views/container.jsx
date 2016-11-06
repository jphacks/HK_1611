var React = require('react')
var PropTypes = React.PropTypes

var Palet = require('./palet.jsx')
var LedList = require('./ledList.jsx')
var ColorPalet = require('./colorPalet.jsx')
var NowColorPalet = require('./nowColorPalet.jsx')

var Request = require('react-http-request')

var Constants = require('./constants.jsx')
var SendButton = require('./sendButton.jsx')


var Container = React.createClass({
  getInitialState: function() {
    var led = []
    for(var i = 0; i < 10; i++) {
      var oneDict = {
        time: i / 10.0,
        colors: []
      }
      for(var j = 0; j < 20; j++) {
        oneDict.colors.push("#######")
      }
      led.push(oneDict)
    }

    return {
      nowGrid : 0,
      led: led,
      nowColor: Constants.COLORS[0]
    }
  },

  componentDidMount: function() {
    console.dir(Constants.COLORS)
    var led = []
    for(var i = 0; i < 10; i++) {
      var oneDict = {
        time: i / 10.0,
        colors: []
      }
      for(var j = 0; j < 20; j++) {
        oneDict.colors.push("#######")
      }
      led.push(oneDict)
    }

    this.setState({
      led: led
    })
  },

  // ひとつのグリッドがクリックされたときの処理
  gridClicked: function(num) {
    console.log("pushed "+ num + " grid")

    this.setState({
      nowGrid: num
    })
  },

  // ひとつのパレットがクリックされたときの処理
  colorClicked: function(num) {
    var nowGrid = this.state.nowGrid
    var led = this.state.led

    console.log("pushed " + num + " in " + nowGrid )

    if(led[Number(nowGrid)].colors[num]
        != this.state.nowColor) {
          led[Number(nowGrid)].colors[num] = this.state.nowColor
        } else {
          led[Number(nowGrid)].colors[num] = "#######"
        }

    this.setState({
      led: led,
    })
  },

  // 色指定をクリック
  colorPaletClicked: function(i) {
    console.log("color selected")
    this.setState({
      nowColor: Constants.COLORS[i]
    })
  },

  render: function() {
    return(
      <div>
        <LedList
          colorClicked={this.colorClicked}
          nowGrid={this.state.nowGrid}
          led={this.state.led} />
        <Palet
          gridClicked={this.gridClicked}
          nowGrid={this.state.nowGrid} />
        <ColorPalet
          colorPaletClicked={this.colorPaletClicked} />
        <NowColorPalet
          nowColor={this.state.nowColor}/>
        <SendButton
          json={this.state.led} />
      </div>
    )
  }
})

module.exports = Container
