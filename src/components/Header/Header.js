import React from 'react';
import styled from 'styled-components';

// Style Headers
import MediaWidths from '../../styles/helpers/MediaWidths';

const HeaderCore = ({ className, tag, marginBottom, mobileMarginBottom, children }) => {
  const HeaderTag = tag || "h1";

  return (
    <HeaderTag className={className}>{children}</HeaderTag>
  )
}

const Header = styled(HeaderCore)`
  margin: 0;
  font-family: "FreightBook", "serif";
  letter-spacing: 3px;  
  margin-bottom: ${props => props.marginBottom && props.marginBottom};

  @media (${MediaWidths.mobile}) {
    ${props => props.mobileMarginBottom && `margin-bottom: ${props.mobileMarginBottom}`}
  }
`

export default Header;