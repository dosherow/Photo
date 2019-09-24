import React, { Component, useState } from 'react';

import Container from './Container';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';
import Box5 from './Box5';
import Box6 from './Box6';
import Box7 from './Box7';
import Box8 from './Box8';
import Box9 from './Box9';
import Box10 from './Box10';
import ImgTitle1 from './ImgTitle1';
import ImgTitle2 from './ImgTitle2';
import ImgTitle3 from './ImgTitle3';
import ImgTitle4 from './ImgTitle4';
import ImgTitle5 from './ImgTitle5';
import ImgTitle6 from './ImgTitle6';
import ImgTitle7 from './ImgTitle7';
import ImgTitle8 from './ImgTitle8';
import ImgTitle9 from './ImgTitle9';
import ImgTitle10 from './ImgTitle10';
import Travis from './imgs/travisscott2.jpg';
import Bryson from './imgs/brysontiller3.jpg';
import Mura from './imgs/muramasa6.png';
import Anderson from './imgs/andersonpaak3.png';
import Majid from './imgs/majidjordan2.png';
import Black from './imgs/6lack6.png';
import KK from './imgs/kingkrule1.png';
import Earl from './imgs/earlsweatshirt1.jpg';
import Mac from './imgs/macdemarco2.png';
import Vince from './imgs/vincestaples.jpg';

class Home extends Component {
    render() {
    return (
        <Container>
            <Box1>
                <img src= {Travis} alt="la flame"/>
            </Box1>
			<ImgTitle1>
					<span>Travis Scott</span>
			</ImgTitle1>
			<Box2>
                <img src= {Bryson} alt="bryson tiller"/>
            </Box2>
			<ImgTitle2>
					<span>Bryson Tiller</span>
			</ImgTitle2>
			<Box3>
                <img src= {Mura} alt="mura masa"/>
            </Box3>
			<ImgTitle3>
					<span>Mura Masa</span>
			</ImgTitle3>
			<Box4>
                <img src= {Anderson} alt="anderson paak"/>
            </Box4>
			<ImgTitle4>
					<span>Anderson Paak</span>
			</ImgTitle4>
			<Box5>
                <img src= {Majid} alt="majid jordan"/>
            </Box5>
			<ImgTitle5>
					<span>Majid Jordan</span>
			</ImgTitle5>
			<Box6>
                <img src= {Black} alt="6lack"/>
            </Box6>
			<ImgTitle6>
					<span>6lack</span>
			</ImgTitle6>
			<Box7>
                <img src= {KK} alt="king krule"/>
            </Box7>
			<ImgTitle7>
					<span>King Krule</span>
			</ImgTitle7>
			<Box8>
                <img src= {Earl} alt="Earl Sweatshirt"/>
            </Box8>
			<ImgTitle8>
					<span>Earl Sweatshirt</span>
			</ImgTitle8>
			<Box9>
                <img src= {Vince} alt="Vince Staples"/>
            </Box9>
			<ImgTitle9>
					<span>Vince Staples</span>
			</ImgTitle9>
			<Box10>
                <img src= {Mac} alt="Mac Demarco"/>
            </Box10>
			<ImgTitle10>
					<span>Mac Demarco</span>
			</ImgTitle10>
			
			
        </Container>
    	)
    }
}

export default Home;
