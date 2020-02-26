import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Style Helpers
import Fonts from '../../styles/helpers/Fonts';

const TextAreaCore = ({ className, identifier, onChange, ...rest }) => {
  return (
    <textarea
      className={className}
      name={identifier}
      id={identifier}
      onChange={onChange}
      {...rest}
    />
  )
}

TextAreaCore.propTypes = {
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  identifier: PropTypes.string,
}

TextAreaCore.defaultProps = {
  identifier: null,
}

const TextArea = styled(TextAreaCore)`
  font-family: ${Fonts.body};
  font-size: 18px;
  width: 100%;
  border: 1px solid #4A4A4A;
  border-radius: 3px;
  padding: 10px;
  height: 100px;
`;

export default TextArea;
