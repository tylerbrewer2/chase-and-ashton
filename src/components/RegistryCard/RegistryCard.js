import React from 'react';
import styled from 'styled-components';

import Col from '../../components/Col';
import Header from '../../components/Header';

const RegistryCardCore = ({ className, url, company, image}) => {
  return(
    <Col
      desktopWidth={4}
      mobileWidth={12}
      center
    >
      <a href={url} className={className}>
        <div/>
      </a>
      <Header>{company}</Header>
    </Col>
  )
}

const RegistryCard = styled(RegistryCardCore)`
  display: block;

  div {
    background-image: url(${props => props.image});
    background-size: cover;
    height: 300px;
    width: 100%;
  }

  & + h1 {
    margin-top: 15px;
    margin-bottom: 45px;
  }
`


export default RegistryCard;