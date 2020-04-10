import React from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu'

import LargeText from '../../LargeText';
import MediaWidths from '../../../styles/helpers/MediaWidths';
import Colors from '../../../styles/helpers/Colors';

import Col from '../../Col';
import NavItem from '../../NavItem';

const styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
    right: '25px',
    top: '-63px',
    float: 'right',
  },
  bmBurgerBars: {
    background: Colors.black,
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    top: 0,
  },
  bmMenu: {
    background: Colors.white,
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: Colors.richBlack,
    padding: '0.8em'
  },
  bmOverlay: {
    top: 0,
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class MobileNavCore extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <Col
          mobileWidth={3}
          center
        >
          <LargeText>The Hamptons</LargeText>
        </Col>

        <Menu isOpen={false} right styles={styles}>
          <NavItem to="/">HOME</NavItem>
          <NavItem to="/details">DETAILS</NavItem>
          <NavItem to="/rsvp">RSVP</NavItem>
          <NavItem to="/registry">REGISTRY</NavItem>
        </Menu>
      </div>
    )
  }
}

const MobileNav = styled(MobileNavCore)`
  display: none;

  @media (${MediaWidths.mobile}) {
    padding-top: 20px;
    padding-left: 30px;
    display: block;
    background-color: white;
    width: 100%;
    top: 27px;
    height: 150px;
  }
`

export default MobileNav;
