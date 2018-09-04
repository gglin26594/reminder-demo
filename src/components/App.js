import React, { Component } from "react";
import { addReminder } from "../actions";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handleInputOnchange(value) {
    this.setState({
      text: value
    });
  }
  addReminder() {
    this.props.addReminder(this.state.text);
  }

  renderReminderList() {
    const reminderList = this.props.reminderList;
    return (
      <ul className="list-group col-sm-8 mt-2">
        {reminderList.map(reminder => {
          return (
            <li key={reminder.id} className="list-group-item mb-1">
              <div className="list_item">
                <div>{reminder.text}</div>
                <div>
                  <em>time</em>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
  render() {
    return (
      <div className="App">
        <div className="title">Reminder Demo</div>
        <div className="form-inline">
          <div className="form-group">
            <input
              onChange={event => this.handleInputOnchange(event.target.value)}
              type="text"
              className="form-control mr-3"
              placeholder="Remind me to..."
            />
          </div>
          <button
            onClick={() => this.addReminder()}
            className="btn btn-primary"
          >
            Add Reminder
          </button>
        </div>
        {this.renderReminderList()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    reminderList: state
  };
};

export default connect(
  mapStateToProps,
  { addReminder }
)(App);
