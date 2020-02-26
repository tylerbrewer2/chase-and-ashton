import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Style Helpers
import Fonts from '../../styles/helpers/Fonts';

const LabelCore= ({ children, identifier, className }) => {
  return (
    <label
      className={className}
      htmlFor={identifier}
    >
      {children}
    </label>
  )
}

LabelCore.propTypes = {
  children: PropTypes.string.isRequired,
  indentifier: PropTypes.string.isRequired,
}

const Label = styled(LabelCore)`
  font-family: ${Fonts.body};
  font-size: 18px;
  text-align: left;
  display: block;
  margin-bottom: 5px;
`

export default Label;
