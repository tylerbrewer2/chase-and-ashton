import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Style helpers
import Fonts from '../../styles/helpers/Fonts';
import Colors from '../../styles/helpers/Colors';

const LinkCore= ({ children, className, ...rest }) => {
  return (
    <a
      className={className}
      target='_blank'
      {...rest}
    >
      {children}
    </a>
  )
}

LinkCore.propTypes = {
  children: PropTypes.string.isRequired,
}

const Link = styled(LinkCore)`
  font-family: ${Fonts.body};
  list-style: none;
  float: left;
  font-size: 12px;
  color: ${Colors.richBlack};
  letter-spacing: 3px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

`

export default Link;
