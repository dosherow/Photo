import styled from 'styled-components';
import ImgClust5 from '../imgClust/ImgClust5';

const ImgTitle5 = styled.span`
  padding-top: 9px;
  margin-left: 4px;
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
  ${ImgClust5}:hover & {
    color: red;
    text-shadow: 2px 2px 4px rgba(20,0,0,.4);
  }
`;

export default ImgTitle5;