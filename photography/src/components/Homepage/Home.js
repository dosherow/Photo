import React, { Component, useState } from 'react';

// container import
import Container from './Container';

// boxes import
import Box1 from './boxes/Box1';
import Box2 from './boxes/Box2';
import Box3 from './boxes/Box3';
import Box4 from './boxes/Box4';
import Box5 from './boxes/Box5';
import Box6 from './boxes/Box6';
import Box7 from './boxes/Box7';
import Box8 from './boxes/Box8';
import Box9 from './boxes/Box9';
import Box10 from './boxes/Box10';
import Box11 from './boxes/Box11';
import Box12 from './boxes/Box12';


// img clusters import 
import ImgClust1 from './imgClust/ImgClust1';
import ImgClust2 from './imgClust/ImgClust2';
import ImgClust3 from './imgClust/ImgClust3';
import ImgClust4 from './imgClust/ImgClust4';
import ImgClust5 from './imgClust/ImgClust5';
import ImgClust6 from './imgClust/ImgClust6';
import ImgClust7 from './imgClust/ImgClust7';
import ImgClust8 from './imgClust/ImgClust8';
import ImgClust9 from './imgClust/ImgClust9';
import ImgClust10 from './imgClust/ImgClust10';
import ImgClust11 from './imgClust/ImgClust11';
import ImgClust12 from './imgClust/ImgClust12';

// import img titles 
import ImgTitle1 from './imgTitles/ImgTitle1';
import ImgTitle2 from './imgTitles/ImgTitle2';
import ImgTitle3 from './imgTitles/ImgTitle3';
import ImgTitle4 from './imgTitles/ImgTitle4';
import ImgTitle5 from './imgTitles/ImgTitle5';
import ImgTitle6 from './imgTitles/ImgTitle6';
import ImgTitle7 from './imgTitles/ImgTitle7';
import ImgTitle8 from './imgTitles/ImgTitle8';
import ImgTitle9 from './imgTitles/ImgTitle9';
import ImgTitle10 from './imgTitles/ImgTitle10';
import ImgTitle11 from './imgTitles/ImgTitle11';
import ImgTitle12 from './imgTitles/ImgTitle12';

// import img hover effect shapes
import TopLine from './imgHovers/TopLine';
import BotLine from './imgHovers/BotLine';
import LeftLine from './imgHovers/LeftLine';
import RightLine from './imgHovers/RightLine';

// import header navigation 
import Nav from './nav/Nav';
import NavLinks from './nav/NavLinks';

// import grid lines background
import GridLines1 from './grid/GridLines1';
import GridLines2 from './grid/GridLines2';
import Grid1 from './grid/Grid1';
import Grid2 from './grid/Grid2';
import Grid3 from './grid/Grid3';
import Grid4 from './grid/Grid4';
import Grid5 from './grid/Grid5';
import Grid6 from './grid/Grid6';
import Grid7 from './grid/Grid7';
import Grid8 from './grid/Grid8';
import Grid9 from './grid/Grid9';
import Grid10 from './grid/Grid10';
import Grid11 from './grid/Grid11';
import Grid12 from './grid/Grid12';
import Grid13 from './grid/Grid13';

// import home page images 
import Travis from './imgs/travisscott2.jpg';
import Bryson from './imgs/brysontiller3.jpg';
import Mura from './imgs/muramasa6.jpg';
import Anderson from './imgs/andersonpaak3.jpg';
import Majid from './imgs/majidjordan2.jpg';
import Black from './imgs/6lack6.jpg';
import KK from './imgs/kingkrule1.jpg';
import Earl from './imgs/earlsweatshirt1.jpg';
import Mac from './imgs/macdemarco2.jpg';
import Vince from './imgs/vincestaples.jpg';
import Moses from './imgs/mosessumney3.jpg';
import Jcole from './imgs/jcole2.jpg';

const Home = () => {
return (
		// <div className={container}>
		<Container>
			<ImgClust1>
			<Box1>
                <img src= {Travis} alt="la flame"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
			</Box1>
			<ImgTitle1>Travis Scott</ImgTitle1>
			</ImgClust1>

			<ImgClust2>
			<Box2>
                <img src= {Bryson} alt="bryson tiller"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box2>
			<ImgTitle2>Bryson Tiller</ImgTitle2>
			</ImgClust2>

			<ImgClust3>
			<Box3>
                <img src= {Mura} alt="mura masa"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box3>
			<ImgTitle3>Mura Masa</ImgTitle3>
			</ImgClust3>

			<ImgClust4>
			<Box4>
                <img src= {Anderson} alt="anderson paak"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box4>
			<ImgTitle4>Anderson Paak</ImgTitle4>
			</ImgClust4>

			<ImgClust5>
			<Box5>
                <img src= {Majid} alt="majid jordan"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box5>
			<ImgTitle5>Majid Jordan</ImgTitle5>
			</ImgClust5>

			<ImgClust6>
			<Box6>
                <img src= {Black} alt="6lack"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box6>
			<ImgTitle6>6lack</ImgTitle6>
			</ImgClust6>

			<ImgClust7>
			<Box7>
                <img src= {KK} alt="king krule"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box7>
			<ImgTitle7>King Krule</ImgTitle7>
			</ImgClust7>

			<ImgClust8>
			<Box8>
                <img src= {Earl} alt="Earl Sweatshirt"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box8>
			<ImgTitle8>Earl Sweatshirt</ImgTitle8>
			</ImgClust8>

			<ImgClust9>
			<Box9>
                <img src= {Vince} alt="Vince Staples"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box9>
			<ImgTitle9>Vince Staples</ImgTitle9>
			</ImgClust9>

			<ImgClust10>
			<Box10>
                <img src= {Mac} alt="Mac Demarco"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box10>
			<ImgTitle10>Mac Demarco</ImgTitle10>
			</ImgClust10>

			<ImgClust11>
			<Box11>
                <img src= {Jcole} alt="J Cole"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box11>
			<ImgTitle11>J. Cole</ImgTitle11>
			</ImgClust11>

			<ImgClust12>
			<Box12>
                <img src= {Moses} alt="Moses Sumney"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box12>
			<ImgTitle12>Moses Sumney</ImgTitle12>
			</ImgClust12>

			<Nav>
				<NavLinks>
					<li><a href="#">Home</a></li>
					<li><a href="#">Work</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
				</NavLinks>
			</Nav>
			<GridLines1>
				<Grid1></Grid1>
				<Grid2></Grid2>
				<Grid3></Grid3>
				<Grid4></Grid4>
				<Grid5></Grid5>
				<Grid6></Grid6>
				<Grid7></Grid7>
				<Grid8></Grid8>
				<Grid9></Grid9>
			</GridLines1>
			<GridLines2>
				<Grid10></Grid10>
				<Grid11></Grid11>
				<Grid12></Grid12>
				<Grid13></Grid13>
			</GridLines2>
		</Container>
    	)
    }



export default Home;
