import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Row from '../Row';
import Col from '../Col';
import Header from '../Header';
import Button from '../Button';
import Flash from '../Flash';

const FormCore = ({
  onSubmit,
  title,
  submitButtonText,
  children,
  mobileWidth,
  tabletWidth,
  requestResponse,
  className
}) => {
  function handleOnSubmit(e) {
    e.preventDefault();
    onSubmit(e);
  } 

  return (
    <Row center>
      <Col mobileWidth={mobileWidth} tabletWidth={tabletWidth}>
        <section className={className}>
          <Header marginBottom="15px">{title}</Header>
          <form onSubmit={handleOnSubmit}>
            {children}

            <Col mobileWidth={12}>
              <Button
                type='submit'
                fullWidth
              >
                {submitButtonText}
              </Button>
            </Col>
            {requestResponse &&
              <Flash status={requestResponse.status}>
                {requestResponse.message}
              </Flash>
            }
          </form>
        </section>
      </Col>
    </Row>
  )
}

FormCore.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string,
  mobileWidth: PropTypes.string.isRequired,
  tabletWidth: PropTypes.string.isRequired,
  requestResponse: PropTypes.shape({
    status: PropTypes.string,
    message: PropTypes.string,
  }),
}

FormCore.defaultProps = {
  submitButtonText: "SUBMIT",
  requestResponse: undefined,
}

const Form = styled(FormCore)`
  margin-top: 100px;
  margin-bottom: 100px;
`

export default Form;
