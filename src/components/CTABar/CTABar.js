import styled from 'styled-components';

import Colors from '../../styles/helpers/Colors';
import Fonts from '../../styles/helpers/Fonts';

const CTABar = styled.div`
  font-family: ${Fonts.body};
  font-size: 12px;
  letter-spacing: 1px;
  padding: 7px;
  background-color: ${Colors.black};
  width: 100%;
  color: white;
  text-align: center;
`

export default CTABar;