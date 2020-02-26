import React from 'react';
import styled from 'styled-components';

import Col from '../Col';
import Row from '../Row';
import BodyText from '../BodyText';

// Style Helpers
import MediaWidths from '../../styles/helpers/MediaWidths';
import Colors from '../../styles/helpers/Colors';

const FooterCore = ({ className }) => {
  return (
    <footer className={className}>
      <Row middle>
        <Col  mobileWidth={12}>
          <BodyText>
            All photos taken by <a href="https://www.instagram.com/mikaylaherrick/">Mikayla Herrick</a>.
          </BodyText>
        </Col>
      </Row>
    </footer>
  )
}

const Footer = styled(FooterCore)`
  padding: 40px;
  margin: 0 auto;
  margin-top: 40px;
  border-top: 1px solid ${Colors.richBlack};

  div {
    text-align: right;
  }

  a {
    color: ${Colors.richBlack};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (${MediaWidths.mobile}) {
    margin-left: 0;
    margin-top: 20px;

    div {
      text-align: left;
    }
  }
`

export default Footer;