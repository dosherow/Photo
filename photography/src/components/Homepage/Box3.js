import styled from 'styled-components';

export default styled.div`
    position: relative;
    left: 8.33vw;
    width: 24.99vw;
    height: auto;
    cursor: pointer;
    transition: 0.2s ease;
    box-shadow: inset 0 0 0 0 rgba(100, 130, 66, 0);
    overflow: hidden;
    display: block;
    :hover {
        box-shadow: inset 0 0 0 20px rgba(100, 130, 66, 1);
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
        transition: 0.35s ease-in-out;
        transform: matrix(1, 0, 0, 1, 0, 0);
    }
`