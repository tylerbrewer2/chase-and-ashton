import React from 'react';
import styled from 'styled-components';

// Components
import Header from '../Header';
import BodyText from '../BodyText';

// Style Helpers
import MediaWidths from '../../styles/helpers/MediaWidths';

const DescriptionTextCore = ({header, subHeader, align, className, children }) => {
  return (
    <div className={className}>
      <Header tag="h1">{header}</Header>
      <Header tag="h1">{subHeader}</Header>
      <BodyText>{children}</BodyText>
    </div>
  )
}

const DescriptionText = styled(DescriptionTextCore)`
  text-align: ${props => props.align};

	@media (${MediaWidths.mobile}) {
		text-align: left;
    margin-bottom: 45px;
	}
`

export default DescriptionText;
