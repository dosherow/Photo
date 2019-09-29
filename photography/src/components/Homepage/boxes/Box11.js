import styled from 'styled-components';

const Box11 = styled.div`
        position: relative;
		height: auto;
		cursor: pointer;
		transition: 0.4s ease-in;
		overflow: hidden;
		display: block;
		left: 49.98vw;
    	top: -58.31vw;
    	width: 49.998vw;
        :hover img {
			transform: matrix(1.1, 0, 0, 1.1, 0, 0);
		}
		:hover {
			z-index: 100 !important;
		}
		:hover div:nth-child(2) {
			transform: matrix(1,0,0,1,0,0);
			height: 30px;
		}
		:hover div:nth-child(3) {
			transform: matrix(1,0,0,1,0,0);
			width: 30px;
		}
		:hover div:nth-child(4) {
			transform: matrix(1,0,0,1,0,0);
			width: 30px;
		}
		:hover div:nth-child(5) {
			transform: matrix(1,0,0,1,0,0);
			height: 30px;
		}
		& img {
			position: relative;
		    display: inline-block;
		    width: 100%;
		    height: auto;
		    z-index: -10;
		    transition: 0.35s ease-in-out;
		    transform: matrix(1, 0, 0, 1, 0, 0);
		    :hover {
			    transform: matrix(1.1, 0, 0, 1.1, 0, 0);
		    }
		}
    `;

export default Box11;