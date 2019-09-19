import styled from 'styled-components';

export default styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	margin: 0 auto;
	overflow-y: hidden;
    overflow-x: auto;
    & div {
        height: 8.33vw;
	    border-right: 1px solid rgba(222, 89, 152, .2);
	    border-bottom: 1px solid rgba(222, 89, 152, .2);
    }
`