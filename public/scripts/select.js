var React = require('react')
var ReactDOM = require('react-dom')
var PropTypes = React.PropTypes
var async = require('async')

var request = require("superagent")
var Constants = require('./views/constants.jsx')

var styles = {
  float: "left",
  backgroundColor: "#fff",
  border: "2px solid #eee",
  width: 400,
  height: 400,
  padding: 30
}

var demoTitles = [
  "波紋",
  "イモムシ",
  "消える灯火"
]

var demoDescs = [
  "水の波紋を表現してみました．涼しみを感じることができます．",
  "イモムシが後ろからおってきます．小さいお子様が手すりに愛着を持ってくれると思います．",
  "あああああああああああああああ",
]

var Select = React.createClass({
  renderImage: function(number) {
    var filename;
    switch(number) {
      case 1:
        filename = "../image/samune_hamon.png";
        break;
      case 2:
        filename =  "../image/samune_imo.png";
        break;
      case 3:
        filename = "../image/samune_tomoshibi.png";
        break;
    }

    return(
      <img src={filename} />
    )
  },

  getInitialState: function() {
    return {
      results : []
    }
  },
  componentDidMount: function() {
    request.get(Constants.HOST + "/list")
      .end(function(err, res) {
        if (err) {
          console.log(err);
        }
        console.log(res.body)
        this.setState({
          results: res.body
        })
    }.bind(this))
  },

  renderItem: function(result) {
    return(
    <form action={Constants.HOST + "/change"} method="GET">
      <input type="hidden" name="id" value="1"></input>
      <input type="submit" value="send"></input>
    </form>
    //<div><a href="?id=1">選ぶ</a> {result.id} {result.name} {result.explai}</div>
    )
  },

  renderDemo: function(i) {
    return (
      <a href={Constants.HOST + "/change?id=" + (i)}
        style={{
          color: "black"
        }}>
        <div style={styles}>
          {this.renderImage(i)}
          <h2 style={{fontSize: '2em'}}>{demoTitles[i-1]}</h2>
          <p style={{fontSize: '1.3em'}}>{demoDescs[i-1]}</p>
        </div>
      </a>
    )
  },
  renderDemos : function() {
    var demos = []

    for(var i = 1; i <= 3 ; i ++) {
      demos.push(this.renderDemo(i))
    }

    return (
      <div float="left">{demos}</div>
    )
  },
  renderCustom: function(result) {
    return (
      <a href={Constants.HOST + "/change?id=" + result.id} style={{
          color: "black"
        }}>
        <div style={styles}>
          <h2 style={{fontSize: '2em', lineHeight: "3em"}}>{result.name}</h2>
          <p style={{fontSize: '1.3em'}}>{result.explai}</p>
        </div>
      </a>
    )
  },
  renderCustoms: function() {
    var results = this.state.results;

    var customs = []
    for(var i = 0; i < results.length; i++) {
      if(results[i].id > 3) {
        customs.push(this.renderCustom(results[i]))
      }
    }
    return (<div>{customs}</div>)
  },
  render: function() {
    return (
      <div>
        {this.renderDemos()}
        {this.renderCustoms()}
      </div>
    )
  },
})

ReactDOM.render(
  <Select />,
  document.getElementById("container")
);
