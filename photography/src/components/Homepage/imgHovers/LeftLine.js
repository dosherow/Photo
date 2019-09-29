import styled from 'styled-components';

const LeftLine = styled.div`
    display: block;
	position: absolute;
	background-color: red;
	transition: 0.35s ease-in;
    transform: matrix(0,0,0,1,0,0);
    top: 0;
	transform-origin: left;
	right: 0;
	margin-left: -1px;
	height: 100%;
	width: 1px;
`;

export default LeftLine;