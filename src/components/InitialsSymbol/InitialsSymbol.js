import React from 'react';
import styled from 'styled-components';

import LargeText from '../LargeText';

// Style Helpers
import MediaWidths from '../../styles/helpers/MediaWidths';

const InitialsSymbolCore = ({ className }) => {
  return (
    <div className={className}>
      <LargeText>M</LargeText>
      <LargeText>x</LargeText>
      <LargeText>T</LargeText>
    </div>
  )
}

const InitialsSymbol = styled(InitialsSymbolCore)`
  text-align: center;

	@media (${MediaWidths.mobile}) {
		display: none;
	}
`

export default InitialsSymbol;
