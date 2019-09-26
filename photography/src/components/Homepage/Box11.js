import styled from 'styled-components';

export default styled.div`
    position: relative;
    left: 49.98vw;
    top: -58.31vw;
    width: 49.998vw;
    height: auto;
    cursor: pointer;
    transition: 0.2s ease;
    box-shadow: inset 0 0 0 0 rgba(255, 56, 240, 0);
    overflow: hidden;
    display: block;
    :hover {
        box-shadow: inset 0 0 0 20px rgba(255, 56, 240, 1);
    }
    :hover img {
        transform: matrix(1.1, 0, 0, 1.1, 0, 0);  
    }

    :hover body {
        background-color: rgba(#fff, .5);
        background-image: linear-gradient(rgba(30, 30, 30, .6) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .6) 1px, transparent 1px), linear-gradient(rgba(30, 30, 30, .3) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .3) 1px, transparent 1px);
        background-size: 33.333vh 50vh, 33.333vw 50vw, 8.333vw 8.333vw, 8.333vw 8.333vw;
        background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
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