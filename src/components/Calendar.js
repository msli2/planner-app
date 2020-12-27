import React from "react";
import moment from "moment";
import "./Calendar.css";

export default class Calendar extends React.Component {
  state = {
    showYearTable: false,
    showMonthTable: false,
    showDateTable: true,
    dateObject: moment(),
    allmonths: moment.months(),
  };

  weekdayshort = moment.weekdaysShort();

  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
  };

  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };

  currentDay = () => {
    return this.state.dateObject.format("D");
  };

  month = () => {
    return this.state.dateObject.format("MMMM");
  };

  year = () => {
    return this.state.dateObject.format("Y");
  };

  render() {
    let weekdayshortname = this.weekdayshort.map((day) => {
      return (
        <th key={day} className="week-day">
          {day}
        </th>
      );
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="calendar-day empty">{""}</td>);
    }

    let currentMonth = this.month();
    let currentYear = this.year();
    let newDate = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = monthNames[newDate.getMonth()];
    let year = newDate.getFullYear();

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay =
        d == this.currentDay() && currentMonth == month && currentYear == year
          ? "today"
          : "";
      daysInMonth.push(
        <td key={d} className={`${currentDay}`}>
          <span
            onClick={(e) => {
              this.onDayClick(e, d);
            }}
          >
            {d}
          </span>
        </td>
      );
    }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    let daysinmonth = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    var size;
    if (rows.length === 6) {
      size = "18px";
    } else if (rows.length === 7) {
      size = "16px";
    }

    return (
      <div className="calendar" style={{fontSize: size}}>
        <div className="calendar-navi" id={this.props.id}>
          {!this.state.showMonthTable && <span>{this.month()}</span>}
          <span> </span>
          <span>{this.year()}</span>
        </div>
        <div className="calendar-date">
          <table className="calendar-day">
            <thead>
              <tr>{weekdayshortname}</tr>
            </thead>
            <tbody>{daysinmonth}</tbody>
          </table>
        </div>
      </div>
    );
  }
}