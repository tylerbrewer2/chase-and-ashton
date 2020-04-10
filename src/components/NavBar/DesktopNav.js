import React from 'react';
import styled from 'styled-components';

import LargeText from '../LargeText';
import Row from '../Row';
import Col from '../Col';
import FloatWrapper from '../FloatWrapper';
import NavItem from '../NavItem';

import MediaWidths from '../../styles/helpers/MediaWidths';

const DesktopNavCore = ({ className }) => (
  <Row
    className={className}
    middle
  >
    <Col mobileWidth={4}>
      <FloatWrapper direction='right'>
        <NavItem marginTop="0" to="/">HOME</NavItem>
        <NavItem marginTop="0" to="/details">DETAILS</NavItem>
      </FloatWrapper>
    </Col>
    <Col
      mobileWidth={4}
      center
    >
      <LargeText>The Hamptons</LargeText>
    </Col>
    <Col mobileWidth={4}>
      <FloatWrapper direction='left'>
        <NavItem marginTop="0" to="/rsvp">RSVP</NavItem>
        <NavItem marginTop="0" to="/registry">REGISTRY</NavItem>
      </FloatWrapper>
    </Col>
  </Row>
);

const DesktopNav = styled(DesktopNavCore)`
  margin: 0 auto;
  max-width: 90%;
  height: 130px;
  font-family: 'AvenirNextRegular', 'Helvetica', 'sans-serif';

  @media (${MediaWidths.mobile}) {
    display: none;
  }
`

export default DesktopNav;
