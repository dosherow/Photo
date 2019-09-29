import styled from 'styled-components';

const RightLine = styled.div`
    display: block;
	position: absolute;
	background-color: red;
	transition: 0.35s ease-in;
    transform: matrix(0,0,0,1,0,0);
    top: 0;
	transform-origin: right;
	left: 0;
	margin-right: -1px;
	height: 100%;
	width: 1px;
`;

export default RightLine;