import React from 'react';

import CountdownClock from '../CountdownClock';
import Section from '../Section';
import FullWidthImage from '../FullWidthImage';

const CountdownSection = ({backgroundImage}) => {
  return (
    <FullWidthImage src={backgroundImage}>
      <Section>
        <CountdownClock />
      </Section>
    </FullWidthImage>
  )
}

export default CountdownSection;