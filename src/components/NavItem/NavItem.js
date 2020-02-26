import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Fonts from '../../styles/helpers/Fonts';
import Colors from '../../styles/helpers/Colors';
import MediaWidths from '../../styles/helpers/MediaWidths';

const NavItem = styled(Link)`
  font-family: ${Fonts.body};
  list-style: none;
  margin-top: ${ props => props.marginTop ? props.marginTop : '85px'};
  margin-left: 45px;
  margin-right: 45px;
  float: left;
  font-size: 12px;
  color: ${Colors.richBlack};
  letter-spacing: 3px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  @media (${MediaWidths.mobile}) {
    margin-top: 25px;
    margin-left: 0;
    margin-right: 0;
    font-size: 25px;
    float: none;
  }
`

export default NavItem;
