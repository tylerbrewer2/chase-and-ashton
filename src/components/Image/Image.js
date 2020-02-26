import styled from 'styled-components';

const Image = styled.img`
	height: ${props => props.height};
	margin-left: ${props => props.marginLeft ? props.marginLeft : ''}
`

export default Image
