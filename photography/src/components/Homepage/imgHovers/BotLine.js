import styled from 'styled-components';

const BotLine = styled.div`
    display: block;
	position: absolute;
	background-color: red;
	transition: 0.35s ease-in;
    transform: matrix(1,0,0,0,0,0);
    bottom: 0;
	transform-origin: bottom;
	left: 0;
	margin-bottom: -1px;
	width: 100%;
	height: 1px;
`;

export default BotLine;
    