import styled from 'styled-components';

export default styled.div`
    position: relative;
    top: 8.33vw;
    left: 8.33vw;
    width: 58.31vw;
    height: auto;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    box-shadow: inset 0 0 0 0 rgba(63, 191, 165, .1);
    overflow: hidden;
    :hover {
        box-shadow: inset 0 0 0 20px rgba(63, 191, 165, 1);
    }
    :hover img {
        transform: matrix(1.1, 0, 0, 1.1, 0, 0);
    }
    & img {
        position: relative;
        display: block;
        width: 100%;
        height: auto;
        z-index: -1;
        transition: 0.4s ease-in-out;
        transform: matrix(1, 0, 0, 1, 0, 0);
        box-shadow: inset .1vw solid rgba(222, 89, 152, .1);
    }
`