import styled from 'styled-components';

const FullWidthImage = styled.section`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  height: ${props => props.banner ? 'calc(100vh - 100px)': ''};
  width: 100%;
`

export default FullWidthImage;