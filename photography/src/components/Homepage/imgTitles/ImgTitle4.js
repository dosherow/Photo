import styled from 'styled-components';
import ImgClust4 from '../imgClust/ImgClust4';

const ImgTitle4 = styled.span`
    top: -41.65vw;
    left: 24.99vw;
    margin-top: 20px;
    margin-left: 9px;
    transform: rotate(90deg);
    position: relative;
		font-family: 'Montserrat';
    display: inline-block;
    font-size: 2.07vw;
    line-height: 2vw;
    text-transform: uppercase;
    cursor: pointer;
    color: black;
    transition: .35s ease-in;
    z-index: 1000;
    ${ImgClust4}:hover & {
      color: red;
      text-shadow: 2px 2px 4px rgba(20,0,0,.4);
    }
`;


export default ImgTitle4;