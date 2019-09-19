import styled from 'styled-components';

export default styled.div`
    position: relative;
    & div img {
        position: absolute;
        top: 8.33vw;
        left: 8.33vw;
        width: 58.31vw;
        height: auto;
	    transition: 0.4s ease-in;
	    outline: .01px solid rgba(222, 89, 152, .1);
	    cursor: pointer;
        z-index: 1;
    }
`