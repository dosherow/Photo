import styled from 'styled-components';

export default styled.div`
    position: relative;
    left: 8.33vw;
    padding-top: 9px;
    margin-left: 4px;
    font-weight: 500;
    position: relative;
    display: inline-block;
    font-size: 2.07vw;
    line-height: 2vw;
    text-transform: uppercase;
    cursor: pointer;
    & span {
      color: black;
    }
    :hover span {
      color: rgba(222, 89, 152, 1);
    }
`