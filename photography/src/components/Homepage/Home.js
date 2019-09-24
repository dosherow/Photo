import React, { Component, useState } from 'react';

import Container from './Container';
import Box from './Box';
import ImgTitle from './ImgTitle';
import Travis from './travisscott2.jpg';
import Bryson from './brysontiller3.jpg';
import Next from './Next';

class Home extends Component {
    state = {
        hero: [
            {img: Travis, title: "Travis Scott"},
            {img: Bryson, title: "Bryson Tiller"}
        ]
    };

    nextProject = () => {
        const newState = this.state.hero.map((hero) => {
            const nextHero = hero;
            nextHero.img = this.state.hero[1].img;
            nextHero.title = this.state.hero[1].title;
            return nextHero;
        });
        this.setState({
            newState
        })
    }

    render() {
    return (
        <Container>
            <Box>
                <img src={this.state.hero[0].img} alt="la flame"/>
            </Box>
			<ImgTitle>{this.state.hero[0].title}</ImgTitle>
            <Next onClick={this.nextProject}>Next</Next>
        </Container>
    )
    }
}

export default Home;
