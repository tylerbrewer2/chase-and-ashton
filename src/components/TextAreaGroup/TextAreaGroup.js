import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import Label from '../Label';
import TextArea from '../TextArea';
import Col from '../Col';

const TextAreaGroupCore = ({
    className,
    labelText,
    value,
    onChange,
    identifier,
    required,
    width
  }) => {
  return (
    <Col mobileWidth={width}>
      <div className={className}>
        <Label identifier={identifier}>{labelText}</Label>
        <TextArea
          value={value}
          onChange={onChange}
          identifier={identifier}
        />
      </div>
    </Col>
  )
}

TextAreaGroupCore.propTypes = {
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  identifier: PropTypes.string,
  required: PropTypes.bool,
  width: PropTypes.number,
}

TextAreaGroupCore.defaultProps = {
  identifier: null,
  required: false,
  width: 12,
}

const TextAreaGroup = styled(TextAreaGroupCore)`
margin-bottom: 30px;
`

export default TextAreaGroup;