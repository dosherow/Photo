import styled from 'styled-components';

const GridLines1 = styled.div`
    opacity: 1;
	position: absolute;
	height: 100%;
	top: 0;
	z-index: -9;
	width: 100%;
	left: 0;
	background: repeating-linear-gradient(180deg, transparent, transparent calc(8.3333vw - 1px), rgba(255,0,0,.25) calc(8.33333vw - 1px),rgba(255,0,0,.25) 8.33333vw);
	background-image: repeating-linear-gradient(transparent, transparent calc(8.33333vw - 1px), rgba(255,0,0,.25) calc(8.33333vw - 1px), rgba(255,0,0,.25) 8.33333vw);
`;

export default GridLines1;