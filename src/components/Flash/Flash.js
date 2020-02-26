import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Style Helpers
import Colors from '../../styles/helpers/Colors';
import Fonts from '../../styles/helpers/Fonts';

const FlashCore = ({ children, className }) => (
  <section className="col-xs-12">
    <div className={className}>
      {children}
    </div>
  </section>
)

FlashCore.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

const Flash = styled(FlashCore)`
  font-family: ${Fonts.body};
  border: 1px solid ${props => props.status === 'success' ?  Colors.success : Colors.error};
  color: ${props => props.status === 'success' ? Colors.success : Colors.error };
  margin-top: 15px;
  text-align: left;
  border-radius: 3px;
  padding: 10px 15px;
  line-height: 25px;
`

export default Flash
