import styled from 'styled-components';

// Style Helpers
import MediaWidths from '../../styles/helpers/MediaWidths';

const FooterItem = styled.section`
  border-left: .5px solid #4A4A4A;
  padding-left: 30px;
  height: 200px;

  @media (${MediaWidths.mobile}) {
    padding-left: 0;
    height: auto;
    border-left: 0;
  }
`

export default FooterItem;