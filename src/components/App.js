import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ""
    }
  }
  handleInputOnchange(event) {
    this.setState({
      text: event.value
    });
  }
  render() {
    return (
      <div className="App">
        <div className="title">Reminder Demo</div>

        <div className="form-inline">
          <div className="form-group">
            <input value={this.state.text} onChange={(event)=>this.handleInputOnchange(event)} type="text" className="form-control mr-3" placeholder="Remind me to..."/>
          </div>
          <button className="btn btn-primary">
            Add Reminder
          </button>
        </div>
      </div>
    );
  }
}

export default App;
