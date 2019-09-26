import styled from 'styled-components';

export default styled.div`
    position: relative;
    top: 16.66vw;
    width: 41.65vw;
    height: auto;
    cursor: pointer;
    transition: 0.2s ease;
    box-shadow: inset 0 0 0 0 rgba(222, 89, 152, 0);
    overflow: hidden;
    display: block;
    :hover {
        box-shadow: inset 0 0 0 20px rgba(222, 89, 152, 1);
    }
    :hover img {
        transform: matrix(1.1, 0, 0, 1.1, 0, 0);
        ${'' /* opacity: 1; */}
    }

    & img {
        position: relative;
        display: inline-block;
        width: 100%;
        height: auto;
        z-index: -99;
        transition: 0.35s ease-in-out;
        transform: matrix(1, 0, 0, 1, 0, 0);
        box-shadow: inset 0 0 0 0 rgba(222, 89, 152, 0);
        ${'' /* opacity: .9; */}
    }
`