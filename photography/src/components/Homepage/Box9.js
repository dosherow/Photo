import styled from 'styled-components';

export default styled.div`
    position: relative;
    top: -58.31vw;
    left: 41.65vw;
    width: 24.96vw;
    height: auto;
    cursor: pointer;
    transition: 0.65s ease-in-out;
    box-shadow: inset 0 0 0 0 rgba(222, 89, 152, 0);
    overflow: hidden;
    display: block;
    :hover {
        box-shadow: inset 0 0 0 20px rgba(222, 89, 152, 1);
    }
    :hover img {
        transform: matrix(1.1, 0, 0, 1.1, 0, 0);
        
    }
    & img {
        position: relative;
        display: inline-block;
        width: 100%;
        height: auto;
        z-index: -1;
        transition: 0.4s ease-in-out;
        transform: matrix(1, 0, 0, 1, 0, 0);
    }
`