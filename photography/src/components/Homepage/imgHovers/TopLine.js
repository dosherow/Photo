import styled from 'styled-components';

const TopLine = styled.div`
    display: block;
	position: absolute;
	background-color: red;
	transition: 0.35s ease-in;
    transform: matrix(1,0,0,0,0,0);
    top: 0;
	transform-origin: top;
	left: 0;
	margin-top: -1px;
	width: 100%;
	height: 1px;
`;

export default TopLine;
