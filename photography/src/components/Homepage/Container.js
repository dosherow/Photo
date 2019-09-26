import styled from 'styled-components';

export default styled.body`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: rgba(#fff, .5);
    background-image: linear-gradient(rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(rgba(30, 30, 30, .4) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .4) 1px, transparent 1px);
    background-size: 33.333vh 50vh, 33.333vw 50vw, 8.333vw 8.333vw, 8.333vw 8.333vw;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
`