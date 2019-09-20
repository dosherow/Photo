import styled from 'styled-components';

export default styled.p`
    position: absolute;
    cursor: pointer;
    line-height: 6.8vh;
    top: 8.33vw;
    left: 75vw;
    font-family: Montserrat;
    height: auto;
    font-size: 3.6em;
    color: black;
    letter-spacing: 0.05em;
    transform: rotate(-90deg);
    z-index: 1;
    transition: .6s;
    :hover {
      left: 72.5vw;
      top: 6vw;
      line-height: 12vh;
      font-size: 6em;
      color: rgba(222, 89, 152, 1);
      transform: rotate(-2deg);
	    text-shadow: 0 1px 0 #4f0099, 0 2px 0 #4c0094, 0 3px 0 #4a008f, 
      0 4px 0 #450085, 0 5px 0 #3f007a, 0 6px 0 #3a0070, 
      0 7px 0 #350066, 0 8px 0 #2f005c, 0 9px 0 #28004d, 
      0 0 5px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.2), 
      0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2);
    }
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