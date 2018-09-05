import React, { Component } from "react";
import { addReminder, deleteReminder, deleteReminderAll } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment  from "moment";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      time: ""
    };
  }
  handleInputOnchange(value) {
    this.setState({
      text: value
    });
  }
  handleTimeOnChange(value){
    this.setState({
      time: value
    });
  }
  handleDelete(id) {
    this.props.deleteReminder(id);
  }
  handleDeleteAll() {
    this.props.deleteReminderAll();
  }
  addReminder() {
    this.props.addReminder(this.state.text, this.state.time);
  }

  renderReminderList() {
    const reminderList = this.props.reminderList;
    return (
      <ul className="list-group col-sm-8 mt-2">
        {reminderList.map(reminder => {
          return (
            <li key={reminder.id} className="list-group-item mb-1">
              <div className="list-item">
                <div>{reminder.text}</div>
                <div>
                  <em>{moment(new Date(reminder.time)).fromNow()}</em>
                </div>
              </div>
              <div onClick={()=>this.handleDelete(reminder.id)} className="list-item deleteButton"> &#x2715; </div>
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
            <input
              type="datetime-local"
              className="form-control  mr-3"
              onChange={event => this.handleTimeOnChange(event.target.value)}
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
        <div onClick={()=>this.handleDeleteAll()} className="btn btn-danger mt-3">
          Clear All
        </div>
      </div>
    );
  }
}

App.propType = {
  reminderList: PropTypes.array.isRequired,
  addReminder: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired,
  deleteReminderAll: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    reminderList: state
  };
};

export default connect(
  mapStateToProps,
  { addReminder, deleteReminder,deleteReminderAll }
)(App);
