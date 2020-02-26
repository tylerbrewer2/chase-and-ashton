import React from 'react';
import styled from 'styled-components';

import SmallHeader from '../SmallHeader';

const ListCore = ({ className, header, children }) => {
  return(
    <section>
      <SmallHeader>{header}</SmallHeader>
      <ul className={className}>
        {children}
      </ul>
    </section>
  )
}

const List = styled(ListCore)`
  list-style: none;
  padding-left: 0;
`

export default List;