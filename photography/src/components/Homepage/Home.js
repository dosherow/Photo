import React, { Component, useState } from 'react';

import Container from './Container';
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
import TopLine from './imgHovers/TopLine';
import BotLine from './imgHovers/BotLine';
import LeftLine from './imgHovers/LeftLine';
import RightLine from './imgHovers/RightLine';
import Nav from './nav/Nav';
import NavLinks from './nav/NavLinks';
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

	// state management for mouse events. we are setting initial state to default font colors and box/image div styling and page bg color.

	// const [gridColor, setGridColor] = useState("linear-gradient(rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(rgba(30, 30, 30, .2) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .2) 1px, transparent 1px)");
	const [fontColor, setFontColor] = useState("rgba(0,0,0,1)");
	const [fontColor2, setFontColor2] = useState("rgba(0,0,0,1)");
	const [fontColor3, setFontColor3] = useState("rgba(0,0,0,1");
	const [fontColor4, setFontColor4] = useState("rgba(0,0,0,1)");
	const [fontColor5, setFontColor5] = useState("rgba(0,0,0,1)");
	const [fontColor6, setFontColor6] = useState("rgba(0,0,0,1");
	const [fontColor7, setFontColor7] = useState("rgba(0,0,0,1)");
	const [fontColor8, setFontColor8] = useState("rgba(0,0,0,1)");
	const [fontColor9, setFontColor9] = useState("rgba(0,0,0,1)");
	const [fontColor10, setFontColor10] = useState("rgba(0,0,0,1)");
	const [fontColor11, setFontColor11] = useState("rgba(0,0,0,1)");
	const [fontColor12, setFontColor12] = useState("rgba(0,0,0,1)");
	const [boxShadow1, setBoxShadow1] = useState("inset 0 0 0 0 rgba(222, 89, 152, 0)");
	const [boxShadow2, setBoxShadow2] = useState("inset 0 0 0 0 rgba(84, 86, 101, 0)");
	const [boxShadow3, setBoxShadow3] = useState("inset 0 0 0 0 rgba(100, 130, 66, 0)");
	const [boxShadow4, setBoxShadow4] = useState("inset 0 0 0 0 rgba(84, 86, 101, 0)");
	const [boxShadow5, setBoxShadow5] = useState("inset 0 0 0 0 rgba(254, 193, 100, 0)");
	const [boxShadow6, setBoxShadow6] = useState("inset 0 0 0 0 rgba(239, 240, 198, 0)");
	const [boxShadow7, setBoxShadow7] = useState("inset 0 0 0 0 rgba(92, 145, 223, 0)");
	const [boxShadow8, setBoxShadow8] = useState("inset 0 0 0 0 rgba(84, 86, 101, 0)");
	const [boxShadow9, setBoxShadow9] = useState("inset 0 0 0 0 rgba(59, 61, 47, 0)");
	const [boxShadow10, setBoxShadow10] = useState("inset 0 0 0 0 rgba(81, 104, 112, 0)");
	const [boxShadow11, setBoxShadow11] = useState("inset 0 0 0 0 rgba(255, 56, 240, 0)");
	const [boxShadow12, setBoxShadow12] = useState("inset 0 0 0 0 rgba(106, 116, 115, 0)");
	const [background1, setBackground1] = useState("rgba(255, 255, 255, 0)");
	const [fontOpacity, setFontOpacity] = useState("1");

	// we create set functions to call upon mouse events in the return()

	// box1 mouse events

	const setStyle = (fontColor) => {
		setFontColor(fontColor);
	};

	const setClickStyle = (boxShadow1, background1, fontOpacity) => {
		setBoxShadow1(boxShadow1);
		setBoxShadow2(boxShadow1);
		setBoxShadow3(boxShadow1);
		setBoxShadow4(boxShadow1);
		setBoxShadow5(boxShadow1);
		setBoxShadow6(boxShadow1);
		setBoxShadow7(boxShadow1);
		setBoxShadow8(boxShadow1);
		setBoxShadow9(boxShadow1);
		setBoxShadow10(boxShadow1);
		setBoxShadow11(boxShadow1);
		setBoxShadow12(boxShadow1);
		setBackground1(background1);
		setFontOpacity(fontOpacity);
	};

	// box 2 mouse events

	const setStyle2 = (fontColor2, boxShadow2) => {
		setFontColor2(fontColor2);
		setBoxShadow2(boxShadow2);
	};

	const setClickStyle2 = (boxShadow2, background1) => {
		setBoxShadow12(boxShadow2);
		setBoxShadow11(boxShadow2);
		setBoxShadow10(boxShadow2);
		setBoxShadow9(boxShadow2);
		setBoxShadow8(boxShadow2);
		setBoxShadow7(boxShadow2);
		setBoxShadow6(boxShadow2);
		setBoxShadow5(boxShadow2);
		setBoxShadow4(boxShadow2);
		setBoxShadow3(boxShadow2);
		setBoxShadow2(boxShadow2);
		setBoxShadow1(boxShadow2);
		setBackground1(background1);
	};

	// box3 mouse events

	const setStyle3 = (fontColor3, boxShadow3) => {
		setFontColor3(fontColor3);
		setBoxShadow3(boxShadow3);
	};

	const setClickStyle3 = (boxShadow3, background1) => {
		setBoxShadow12(boxShadow3);
		setBoxShadow11(boxShadow3);
		setBoxShadow10(boxShadow3);
		setBoxShadow9(boxShadow3);
		setBoxShadow8(boxShadow3);
		setBoxShadow7(boxShadow3);
		setBoxShadow6(boxShadow3);
		setBoxShadow5(boxShadow3);
		setBoxShadow4(boxShadow3);
		setBoxShadow3(boxShadow3);
		setBoxShadow2(boxShadow3);
		setBoxShadow1(boxShadow3);
		setBackground1(background1);
	};

	// box4 mouse events

	const setStyle4 = (fontColor4, boxShadow4) => {
		setFontColor4(fontColor4);
		setBoxShadow4(boxShadow4);
	};

	const setClickStyle4 = (boxShadow4, background1) => {
		setBoxShadow12(boxShadow4);
		setBoxShadow11(boxShadow4);
		setBoxShadow10(boxShadow4);
		setBoxShadow9(boxShadow4);
		setBoxShadow8(boxShadow4);
		setBoxShadow7(boxShadow4);
		setBoxShadow6(boxShadow4);
		setBoxShadow5(boxShadow4);
		setBoxShadow4(boxShadow4);
		setBoxShadow3(boxShadow4);
		setBoxShadow2(boxShadow4);
		setBoxShadow1(boxShadow4);
		setBackground1(background1);
	};

	// box5 mouse events

	const setStyle5 = (fontColor5, boxShadow5) => {
		setFontColor5(fontColor5);
		setBoxShadow5(boxShadow5);
	};

	const setClickStyle5 = (boxShadow5, background1) => {
		setBoxShadow12(boxShadow5);
		setBoxShadow11(boxShadow5);
		setBoxShadow10(boxShadow5);
		setBoxShadow9(boxShadow5);
		setBoxShadow8(boxShadow5);
		setBoxShadow7(boxShadow5);
		setBoxShadow6(boxShadow5);
		setBoxShadow5(boxShadow5);
		setBoxShadow4(boxShadow5);
		setBoxShadow3(boxShadow5);
		setBoxShadow2(boxShadow5);
		setBoxShadow1(boxShadow5);
		setBackground1(background1);
	};

	// box6 mouse events

	const setStyle6 = (fontColor6, boxShadow6) => {
		setFontColor6(fontColor6);
		setBoxShadow6(boxShadow6);
	};

	const setClickStyle6 = (boxShadow6, background1) => {
		setBoxShadow12(boxShadow6);
		setBoxShadow11(boxShadow6);
		setBoxShadow10(boxShadow6);
		setBoxShadow9(boxShadow6);
		setBoxShadow8(boxShadow6);
		setBoxShadow7(boxShadow6);
		setBoxShadow6(boxShadow6);
		setBoxShadow5(boxShadow6);
		setBoxShadow4(boxShadow6);
		setBoxShadow3(boxShadow6);
		setBoxShadow2(boxShadow6);
		setBoxShadow1(boxShadow6);
		setBackground1(background1);
	};

	// box7 mouse events

	const setStyle7 = (fontColor7, boxShadow7) => {
		setFontColor7(fontColor7);
		setBoxShadow7(boxShadow7);
	};

	const setClickStyle7 = (boxShadow7, background1) => {
		setBoxShadow12(boxShadow7);
		setBoxShadow11(boxShadow7);
		setBoxShadow10(boxShadow7);
		setBoxShadow9(boxShadow7);
		setBoxShadow8(boxShadow7);
		setBoxShadow7(boxShadow7);
		setBoxShadow6(boxShadow7);
		setBoxShadow5(boxShadow7);
		setBoxShadow4(boxShadow7);
		setBoxShadow3(boxShadow7);
		setBoxShadow2(boxShadow7);
		setBoxShadow1(boxShadow7);
		setBackground1(background1);
	};

	// box8 mouse events

	const setStyle8 = (fontColor8, boxShadow8) => {
		setFontColor8(fontColor8);
		setBoxShadow8(boxShadow8);
	};

	const setClickStyle8 = (boxShadow8, background1) => {
		setBoxShadow12(boxShadow8);
		setBoxShadow11(boxShadow8);
		setBoxShadow10(boxShadow8);
		setBoxShadow9(boxShadow8);
		setBoxShadow8(boxShadow8);
		setBoxShadow7(boxShadow8);
		setBoxShadow6(boxShadow8);
		setBoxShadow5(boxShadow8);
		setBoxShadow4(boxShadow8);
		setBoxShadow3(boxShadow8);
		setBoxShadow2(boxShadow8);
		setBoxShadow1(boxShadow8);
		setBackground1(background1);
	};

	// box9 mouse events

	const setStyle9 = (fontColor9, boxShadow9) => {
		setFontColor9(fontColor9);
		setBoxShadow9(boxShadow9);
	};

	const setClickStyle9 = (boxShadow9, background1) => {
		setBoxShadow12(boxShadow9);
		setBoxShadow11(boxShadow9);
		setBoxShadow10(boxShadow9);
		setBoxShadow9(boxShadow9);
		setBoxShadow8(boxShadow9);
		setBoxShadow7(boxShadow9);
		setBoxShadow6(boxShadow9);
		setBoxShadow5(boxShadow9);
		setBoxShadow4(boxShadow9);
		setBoxShadow3(boxShadow9);
		setBoxShadow2(boxShadow9);
		setBoxShadow1(boxShadow9);
		setBackground1(background1);
	};

	// box10 mouse events

	const setStyle10 = (fontColor10, boxShadow10) => {
		setFontColor10(fontColor10);
		setBoxShadow10(boxShadow10);
	};

	const setClickStyle10 = (boxShadow10, background1) => {
		setBoxShadow12(boxShadow10);
		setBoxShadow11(boxShadow10);
		setBoxShadow10(boxShadow10);
		setBoxShadow9(boxShadow10);
		setBoxShadow8(boxShadow10);
		setBoxShadow7(boxShadow10);
		setBoxShadow6(boxShadow10);
		setBoxShadow5(boxShadow10);
		setBoxShadow4(boxShadow10);
		setBoxShadow3(boxShadow10);
		setBoxShadow2(boxShadow10);
		setBoxShadow1(boxShadow10);
		setBackground1(background1);
	};

	// box11 mouse events

	const setStyle11 = (fontColor11, boxShadow11) => {
		setFontColor11(fontColor11);
		setBoxShadow11(boxShadow11);
	}; 

	const setClickStyle11 = (boxShadow11, background1) => {
		setBoxShadow12(boxShadow11);
		setBoxShadow11(boxShadow11);
		setBoxShadow10(boxShadow11);
		setBoxShadow9(boxShadow11);
		setBoxShadow8(boxShadow11);
		setBoxShadow7(boxShadow11);
		setBoxShadow6(boxShadow11);
		setBoxShadow5(boxShadow11);
		setBoxShadow4(boxShadow11);
		setBoxShadow3(boxShadow11);
		setBoxShadow2(boxShadow11);
		setBoxShadow1(boxShadow11);
		setBackground1(background1);
	};

	// box12 mouse events

	const setStyle12 = (fontColor12, boxShadow12) => {
		setFontColor12(fontColor12);
		setBoxShadow12(boxShadow12);
	}; 

	const setClickStyle12 = (boxShadow12, background1) => {
		setBoxShadow12(boxShadow12);
		setBoxShadow11(boxShadow12);
		setBoxShadow10(boxShadow12);
		setBoxShadow9(boxShadow12);
		setBoxShadow8(boxShadow12);
		setBoxShadow7(boxShadow12);
		setBoxShadow6(boxShadow12);
		setBoxShadow5(boxShadow12);
		setBoxShadow4(boxShadow12);
		setBoxShadow3(boxShadow12);
		setBoxShadow2(boxShadow12);
		setBoxShadow1(boxShadow12);
		setBackground1(background1);
	};

    return (
		// <div className={container}>
		<Container>
			<Box1
				onMouseEnter={() => setStyle("rgba(222, 89, 152, 1)")}
				onMouseOut={() => setStyle("rgba(0,0,0,1)")}
				// onClick={() => setClickStyle("inset 0 0 0 100vw rgba(222, 89, 152, 1)", "rgba(222, 89, 152, 1)", "0")}
				>
                <img src= {Travis} alt="la flame"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box1>
			<ImgTitle1><span>Travis Scott</span></ImgTitle1>
			<Box2
				onMouseEnter={() => setStyle2("rgba(84, 86, 101, 1)")}
				onMouseOut={() => setStyle2("rgba(0,0,0,1)")}
				// onClick={() => setClickStyle2("inset 0 0 0 100vw rgba(84, 86, 101, 1)", "rgba(84, 86, 101, 1)")}
			>
                <img src= {Bryson} alt="bryson tiller"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box2>
			<ImgTitle2><span>Bryson Tiller</span></ImgTitle2>
			<Box3
				// onMouseEnter={() => setStyle3("rgba(100, 130, 66, 1)", "inset 0 0 0 20px rgba(100, 130, 66, 1)")}
				// onMouseOut={() => setStyle3("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(100, 130, 66, 0)")}
				// onClick={() => setClickStyle3("inset 0 0 0 100vw rgba(100, 130, 66, 1)", "rgba(100, 130, 66, 1)")}
			>
                <img src= {Mura} alt="mura masa"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box3>
			<ImgTitle3><span>Mura Masa</span></ImgTitle3>
			<Box4
				// onMouseEnter={() => setStyle4("rgba(84, 86, 101, 1)", "inset 0 0 0 20px rgba(84, 86, 101, 1)")}
				// onMouseOut={() => setStyle4("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(84, 86, 101, 0)")}
				// onClick={() => setClickStyle4("inset 0 0 0 100vw rgba(84, 86, 101, 1)", "rgba(84, 86, 101, 1)")}
			>
                <img src= {Anderson} alt="anderson paak"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box4>
			<ImgTitle4><span>Anderson Paak</span></ImgTitle4>
			<Box5
				// onMouseEnter={() => setStyle5("rgba(254, 193, 100, 1)", "inset 0 0 0 20px rgba(254, 193, 100, 1)")}
				// onMouseOut={() => setStyle5("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(254, 193, 100, 0)")}
				// onClick={() => setClickStyle5("inset 0 0 0 100vw rgba(254, 193, 100, 1)", "rgba(254, 193, 100, 1)")}
			>
                <img src= {Majid} alt="majid jordan"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box5>
			<ImgTitle5><span>Majid Jordan</span></ImgTitle5>
			<Box6
				// onMouseEnter={() => setStyle6("rgba(239, 240, 198, 1)", "inset 0 0 0 20px rgba(239, 240, 198, 1)")}
				// onMouseOut={() => setStyle6("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(239, 240, 198, 0)")}
				// onClick={() => setClickStyle6("inset 0 0 0 100vw rgba(239, 240, 198, 1)", "rgba(239, 240, 198, 1)")}
			>
                <img src= {Black} alt="6lack"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box6>
			<ImgTitle6><span>6lack</span></ImgTitle6>
			<Box7
				// onMouseEnter={() => setStyle7("rgba(92, 145, 223, 1)", "inset 0 0 0 20px rgba(92, 145, 223, 1)")}
				// onMouseOut={() => setStyle7("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(92, 145, 223, 0)")}
				// onClick={() => setClickStyle7("inset 0 0 0 100vw rgba(92, 145, 223, 1)", "rgba(92, 145, 223, 1)")}
			>
                <img src= {KK} alt="king krule"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box7>
			<ImgTitle7><span>King Krule</span></ImgTitle7>
			<Box8
				// onMouseEnter={() => setStyle8("rgba(84, 86, 101, 1)", "inset 0 0 0 20px rgba(84, 86, 101, 1)")}
				// onMouseOut={() => setStyle8("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(84, 86, 101, 0)")}
				// onClick={() => setClickStyle8("inset 0 0 0 100vw rgba(84, 86, 101, 1)", "rgba(84, 85, 101, 1)")}
			>
                <img src= {Earl} alt="Earl Sweatshirt"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box8>
			<ImgTitle8><span>Earl Sweatshirt</span></ImgTitle8>
			<Box9
				// onMouseEnter={() => setStyle9("rgba(59, 61, 47, 1)", "inset 0 0 0 20px rgba(59, 61, 47, 1)")}
				// onMouseOut={() => setStyle9("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(59, 61, 47, 0)")}
				// onClick={() => setClickStyle9("inset 0 0 0 100vw rgba(59, 61, 47, 1)", "rgba(59, 61, 47, 1)")}
			>
                <img src= {Vince} alt="Vince Staples"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box9>
			<ImgTitle9><span>Vince Staples</span></ImgTitle9>
			<Box10
				// onMouseEnter={() => setStyle10("rgba(81, 104, 112, 1)", "inset 0 0 0 20px rgba(81, 104, 112, 1)")}
				// onMouseOut={() => setStyle10("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(81, 104, 112, 0)")}
				// onClick={() => setClickStyle10("inset 0 0 0 100vw rgba(81, 104, 112, 1)", "rgba(81, 104, 112, 1)")}
			>
                <img src= {Mac} alt="Mac Demarco"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box10>
			<ImgTitle10><span>Mac Demarco</span></ImgTitle10>
			<Box11
				// onMouseEnter={() => setStyle11("rgba(255, 56, 240, 1)", "inset 0 0 0 20px rgba(255, 56, 240, 1)")}
				// onMouseOut={() => setStyle11("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(255, 56, 240, 0)")}
				// onClick={() => setClickStyle11("inset 0 0 0 100vw rgba(255, 56, 240, 1)", "rgba(255, 56, 240, 1)")}
			>
                <img src= {Jcole} alt="J Cole"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box11>
			<ImgTitle11><span>J. Cole</span></ImgTitle11>
			<Box12
				// onMouseEnter={() => setStyle12("rgba(106, 116, 115, 1)", "inset 0 0 0 20px rgba(106, 116, 115, 1)")}
				// onMouseOut={() => setStyle12("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(106, 116, 115, 0)")}
				// onClick={() => setClickStyle12("inset 0 0 0 100vw rgba(106, 116, 115, 1)", "rgba(106, 116, 115, 1)")}

			>
                <img src= {Moses} alt="Moses Sumney"/>
				<TopLine />
				<RightLine />
				<LeftLine />
				<BotLine />
            </Box12>
			<ImgTitle12><span>Moses Sumney</span></ImgTitle12>
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
