import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSchedule } from "../actions";

class Schedule extends Component {
  componentDidMount() {
    this.props.fetchSchedule();
  }

  renderName(name) {
    return name ? name : "";
  }
  renderStops(schedule) {
    const { stops } = schedule;
    if (!stops) {
      return <div>Loading..</div>;
    } else {
      return stops.map((stop, i) => {
        return (
          <a
            key={`${stop.location}${i}`}
            className="collection-item"
            href={`/driver/dashboard/schedule/orders/${stop._order}`}
          >
            {stop.sort + " At "}
            {stop.location}
          </a>
        );
      });
    }
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="container">
          <h3 className="center-align">
            {this.renderName(this.props.schedule.driverName) + " "}
            Daily Schedule
          </h3>
          <div className="collection">
            {this.renderStops(this.props.schedule)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ schedule }) {
  return { schedule };
}

export default connect(
  mapStateToProps,
  { fetchSchedule }
)(Schedule);
