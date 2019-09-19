import styled from 'styled-components';

export default styled.p`
    position: absolute;
    cursor: pointer;
    line-height: 8.8vh;
    top: 8.33vw;
    left: 75vw;
    font-family: Montserrat;
    height: auto;
    font-size: 5.4em;
    color: black;
    letter-spacing: 0.05em;
    transform: rotate(-90deg);
    z-index: 1;
    @media only screen and (max-width: 1200px) {
		{
			font-size: 4.6em;
			line-height: 8vh;
		}
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
		{
			font-size: 4em;
			line-height: 7.2vh;
		}
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
		{
			font-size: 3.2em;
			line-height: 6.4vh;
		}
    }

    @media only screen and (max-width: 767px) {
		{
			font-size: 2.4em;
			line-height: 5vh;
		}
    }
`