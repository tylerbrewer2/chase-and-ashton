import React from 'react';
import styled from 'styled-components';

// Components
import Header from '../../components/Header';
import SosItem from '../../components/SosItem';

const SosCore = ({className, backgroundImage}) => {
  return (
    <div className={className}>
      <SosItem>Coming Soon</SosItem>
    </div>
  );
}

const Sos = styled(SosCore)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default Sos;
