import Link from '../Link';

import MediaWidths from '../../styles/helpers/MediaWidths';

const FooterLink = Link.extend`
  margin-left: 45px;
  margin-right: 45px;

  @media (${MediaWidths.mobile}) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }

  &:last-child {
    margin-bottom: 45px;
  }
`

export default FooterLink;
