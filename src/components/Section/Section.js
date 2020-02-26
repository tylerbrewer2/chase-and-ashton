import React from 'react';
import styled from 'styled-components';

// Style Helpers
import MediaWidths from '../../styles/helpers/MediaWidths';

const SectionCore = ({className, children }) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

const Section = styled(SectionCore)`
  padding: 160px 0;
  text-align: ${props => props.centered ? 'center' : ''};
  max-width: ${props => props.full ? '' : '90%'};
  margin: 0 auto;

  @media (${MediaWidths.mobile}) {
    padding: 60px 0;
  }
`

export default Section;