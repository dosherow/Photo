import styled from 'styled-components';

export default styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    grid-template-columns: [col1] 1fr [col2] 1fr [col3] 1fr;
    grid-template-rows: [row1] 1fr [row2] 1fr [row3] 1fr;
`