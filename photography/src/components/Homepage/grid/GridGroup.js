import React, { Component } from 'react'

import GridItem1 from './GridItem1';
import Container from '../Container.js';

export class GridGroup extends Component {
    render() {
        return (
            <Container>
                <GridItem1 />
            </Container>
        )
    }
}

export default GridGroup

