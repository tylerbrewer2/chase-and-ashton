import React from 'react';
import styled from 'styled-components';

const BodyTextCore = ({ className, children }) => {
  return (
    <p className={className}>
      {children}
    </p>
  )
}

const BodyText = styled(BodyTextCore)`
  font-family: 'AvenirNextRegular', 'Helvertica', 'sans-serif';
  font-size: 14px;
  line-height: 25px;
`

export default BodyText;
