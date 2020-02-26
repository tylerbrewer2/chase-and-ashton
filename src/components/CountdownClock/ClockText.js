import React from 'react';
import styled from 'styled-components';

const MARRIAGE_DATE = new Date(2017, 11, 2);

class ClockTextCore extends React.Component{
  constructor(props) {
    super(props);
    this.state = this._formattedDate();
  }

  componentDidMount() {
    setInterval(() => {
      const date = this._formattedDate();
      this.setState({ ...date });
    }, 1000)
  }

  _formattedDate() {
    const now = Date.now();
    const distance = MARRIAGE_DATE - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  }

  render() {
    return (
      <div className={this.props.className}>{this.state.days} days, {this.state.hours} hours, {this.state.minutes} minutes and {this.state.seconds} seconds.</div>
    )
  }
}

const ClockText = styled(ClockTextCore)`
  font-family: 'AvenirNextRegular', 'Helvetica', 'sans-serif';
  letter-spacing: 1.5
`

export default ClockText;