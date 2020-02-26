import React from 'react';
import styled from 'styled-components';

import Row from '../Row';
import Col from '../Col';
import FloatWrapper from '../FloatWrapper';
import Image from '../Image';
import NavItem from '../NavItem';

import MediaWidths from '../../styles/helpers/MediaWidths';
import logo from '../../images/logo.svg';

const DesktopNavCore = ({ className }) => (
  <Row
    className={className}
    middle
  >
    <Col mobileWidth={5}>
      <FloatWrapper direction='right'>
        <NavItem to="/">HOME</NavItem>
        <NavItem to="/details">DETAILS</NavItem>
      </FloatWrapper>
    </Col>
    <Col
      mobileWidth={2}
      center
    >
      <Image
        height="100px"
        src={logo}
      />
    </Col>
    <Col mobileWidth={5}>
      <FloatWrapper direction='left'>
        <NavItem to="/rsvp">RSVP</NavItem>
        <NavItem to="/registry">REGISTRY</NavItem>
      </FloatWrapper>
    </Col>
  </Row>
);

const DesktopNav = styled(DesktopNavCore)`
  margin: 0 auto;
  max-width: 90%;
  height: 150px;

  @media (${MediaWidths.mobile}) {
    display: none;
  }
`

export default DesktopNav;
