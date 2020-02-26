import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Style Helpers
import Fonts from '../../styles/helpers/Fonts';

const TextInputCore = ({ className, identifier, onChange, ...rest }) => {
  return (
    <input
      type='text'
      className={className}
      name={identifier}
      id={identifier}
      onChange={onChange}
      {...rest}
    />
  )
}

TextInputCore.propTypes = {
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  identifier: PropTypes.string,
}

TextInputCore.defaultProps = {
  identifier: null,
}

const TextInput = styled(TextInputCore)`
  font-family: ${Fonts.body};
  font-size: 18px;
  width: 100%;
  border: 1px solid #4A4A4A;
  border-radius: 3px;
  padding: 10px;
`;

export default TextInput;
