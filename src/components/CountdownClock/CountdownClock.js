import React from 'react';
import styled from 'styled-components';

import LargeText from '../LargeText';
import LinkButton from '../LinkButton';
import ClockText from './ClockText'

import Colors from '../../styles/helpers/Colors';

const CountdownClockCore = ({ className }) => {
  return(
    <section className={className}>
      <LargeText>December 2nd, 2017</LargeText>
      <ClockText />
      <LinkButton to="/rsvp">RSVP</LinkButton>
    </section>
  )
}

const CountdownClock = styled(CountdownClockCore)`
  text-align: center;
  color: ${Colors.black};
`

export default CountdownClock;