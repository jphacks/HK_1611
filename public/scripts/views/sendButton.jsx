var React = require('react')

var SendButton = React.createClass({
  getInitialState: function() {
    return {
      name: "",
      explain: ""
    }
  },
  changeName: function(e) {
     this.setState({name: e.target.value});
  },
  changeExplain: function(e) {
     this.setState({explain: e.target.value});
  },
  render : function() {
    var json = this.props.json

    console.log(JSON.stringify(json))

    var styles = {
      position: 'absolute',
      bottom: 0,
      left: 0,
    }

    return (
      <div style={styles}>
        <form action="http://172.20.10.6:3000/custom" method="POST">
          <label>名前</label>
          <input type="text" value={this.state.name} name="name" onChange={this.changeName}></input>
          <label>説明</label>
          <input type="text" value={this.state.explain} name="explain" onChange={this.changeExplain}></input>
          <input type="hidden" value={JSON.stringify(json)}
            name="custom"></input>
          <input type="submit" value="Send"></input>
        </form>
      </div>

    )
  }
})

module.exports = SendButton
