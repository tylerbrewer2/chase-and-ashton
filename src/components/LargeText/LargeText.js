import styled from 'styled-components';
import Colors from '../../styles/helpers/Colors';

const LargeText = styled.div.attrs({
  color: props => props.color || Colors.black,
})`
  font-family: 'FreightBook', 'serif';
  font-size: 48px;
  color: ${props => props.color}
`

export default LargeText;