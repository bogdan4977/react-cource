import React, { Component } from 'react';

class App extends Component {
  // constructor() {
  //   super();
  // }
  state = { time: null };

  getValues = date => {
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();

    return [hh, mm, ss];
  };

  getTime = () => {
    const date = new Date();
    const [hours, minutes, seconds] = this.getValues(date);
    // const time = this.getNormalResult(hours, minutes, seconds);

    // this.setState({ time });

    this.setState({
      time: `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`,
    });
  };

  render() {
    const { time } = this.state;

    return (
      <div>
        <p>Current time is {time ? time : '00:00:00'}</p>
        <button onClick={this.getTime}>Get Time!</button>
      </div>
    );
  }
}

export default App;

