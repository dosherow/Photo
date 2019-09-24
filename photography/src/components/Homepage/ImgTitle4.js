import styled from 'styled-components';

export default styled.div`
    position: relative;
    top: -49.98vw;
    left: 58.31vw;
    padding-top: 4px;
    margin-left: 22px;
    font-weight: 500;
    display: inline-block;
    font-size: 2.07vw;
    line-height: 2vw;
    text-transform: uppercase;
    cursor: pointer;
    transform: rotate(90deg);
    & span {
      color: black;
    }
    :hover span {
      color: rgba(222, 89, 152, 1);
    }
`