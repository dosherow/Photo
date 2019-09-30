import styled from 'styled-components';
import ImgClust9 from '../imgClust/ImgClust9';

const ImgTitle9 = styled.span`
    top: -33.332vw;
    left: 16.667vw;
    margin-top: 60px;
    margin-left: 25px;
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
    ${ImgClust9}:hover & {
      color: red;
      text-shadow: 2px 2px 4px rgba(20,0,0,.4);
    }
`;

export default ImgTitle9;