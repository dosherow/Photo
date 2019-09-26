import React, { Component, useState } from 'react';
import { css } from 'emotion';

import Container from './Container';
// import GridGroup from './grid/GridGroup';
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
import Box11 from './Box11';
import Box12 from './Box12';
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
import ImgTitle11 from './ImgTitle11';
import ImgTitle12 from './ImgTitle12';
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

	const [gridColor, setGridColor] = useState("linear-gradient(rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(rgba(30, 30, 30, .4) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .4) 1px, transparent 1px)");
	const [fontColor, setFontColor] = useState("rgba(0,0,0,1)");
	const [fontColor2, setFontColor2] = useState("rgba(0,0,0,1)");
	const [fontColor3, setFontColor3] = useState("rgba(0,0,0,1");
	const [fontColor4, setFontColor4] = useState("rgba(0,0,0,1)");
	const [fontColor5, setFontColor5] = useState("rgba(0,0,0,1)");
	const [fontColor6, setFontColor6] = useState("rgba(0,0,0,1");
	const setStyle = (gridColor, fontColor) => {
		setGridColor(gridColor);
		setFontColor(fontColor);
	};
	const setStyle2 = (gridColor, fontColor2) => {
		setGridColor(gridColor);
		setFontColor2(fontColor2);
	};
	const setStyle3 = (gridColor, fontColor3) => {
		setGridColor(gridColor);
		setFontColor3(fontColor3);
	};
	const setStyle4 = (gridColor, fontColor4) => {
		setGridColor(gridColor);
		setFontColor4(fontColor4);
	};

	const setStyle5 = (gridColor, fontColor5) => {
		setGridColor(gridColor);
		setFontColor5(fontColor5);
	};

	const setStyle6 = (gridColor, fontColor6) => {
		setGridColor(gridColor);
		setFontColor6(fontColor6);
	};



	const container = css`
		box-sizing: border-box;
    	margin: 0;
    	padding: 0;
    	height: 100%;
    	background-color: rgba(#fff, .5);
    	background-image: ${gridColor};
    	background-size: 33.333vh 50vh, 33.333vw 50vw, 8.333vw 8.333vw, 8.333vw 8.333vw;
    	background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
	`;

	const imgTitle1 = css`
		position: relative;
    	top: 16.66vw;
    	padding-top: 9px;
    	margin-left: 4px;
   		font-weight: 500;
    	position: relative;
    	display: inline-block;
    	font-size: 2.07vw;
    	line-height: 2vw;
    	text-transform: uppercase;
    	cursor: pointer;
    	& span {
      		color: ${fontColor};
			transition: .2s ease;
    	}
	`;

	const imgTitle2 = css`
	    position: relative;
    	left: 41.65vw;
    	padding-top: 9px;
    	margin-left: 4px;
    	font-weight: 500;
    	position: relative;
    	display: inline-block;
    	font-size: 2.07vw;
    	line-height: 2vw;
    	text-transform: uppercase;
    	cursor: pointer;
    	& span {
      		color: ${fontColor2};
			transition: .2s ease;
    	}
	`; 

	const imgTitle3 = css`
		position: relative;
    	left: 8.33vw;
    	padding-top: 9px;
    	margin-left: 4px;
    	font-weight: 500;
    	position: relative;
    	display: inline-block;
    	font-size: 2.07vw;
    	line-height: 2vw;
    	text-transform: uppercase;
    	cursor: pointer;
    	& span {
      		color: ${fontColor3};
			transition: .2s ease;
    	}
	`; 

	const imgTitle4 = css`
		position: relative;
    	top: -49.98vw;
    	left: 58.31vw;
    	padding-top: 4px;
    	margin-left: 22px;
    	font-weight: 500;
    	display: inline-block;
    	font-size: 2.07vw;
    	line-height: 2vw;
    	text-transform: uppercase;
    	cursor: pointer;
    	transform: rotate(90deg);
    	& span {
      		color: ${fontColor4};
			transition: .2s ease;
    	}
	`;
	
	const imgTitle5 = css`
		position: relative;
    	left: 66.64vw;
    	top: -24.99vw;
    	padding-top: 9px;
    	margin-left: 4px;
    	font-weight: 500;
    	position: relative;
    	display: inline-block;
    	font-size: 2.07vw;
    	line-height: 2vw;
    	text-transform: uppercase;
    	cursor: pointer;
    	& span {
      		color: ${fontColor5};
			transition: .2s ease;
    	}
	`;

	const imgTitle6 = css`
		position: relative;
    	top: -24.99vw;
    	padding-top: 9px;
    	margin-left: 4px;
    	font-weight: 500;
    	position: relative;
    	display: inline-block;
    	font-size: 2.07vw;
    	line-height: 2vw;
    	text-transform: uppercase;
    	cursor: pointer;
    	& span {
      		color: ${fontColor6};
			transition: .2s ease;
    	}
	`;



    return (
        <div className={container}>
		
            <Box1
				onMouseEnter={() => setStyle("linear-gradient(rgba(222, 89, 152, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(222, 89, 152, .85) 1px, transparent 1px), linear-gradient(rgba(222, 89, 152, .4) 1px, transparent 1px), linear-gradient(90deg, rgba(222, 89, 152, .4) 1px, transparent 1px)", "rgba(222, 89, 152, 1)")}
				onMouseOut={() => setStyle("linear-gradient(rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(rgba(30, 30, 30, .4) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .4) 1px, transparent 1px)", "rgba(0,0,0,1)")}
				>
                <img src= {Travis} alt="la flame"/>
            </Box1>
			<div className={imgTitle1}>
				{/* <ImgTitle1> */}
					<span>Travis Scott</span>
				{/* </ImgTitle1> */}
			</div>
			<Box2
				onMouseEnter={() => setStyle2("linear-gradient(rgba(84, 86, 101, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(84, 86, 101, .85) 1px, transparent 1px), linear-gradient(rgba(84, 86, 101, .4) 1px, transparent 1px), linear-gradient(90deg, rgba(84, 86, 101, .4) 1px, transparent 1px)", "rgba(84, 86, 101, 1)")}
				onMouseOut={() => setStyle2("linear-gradient(rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(rgba(30, 30, 30, .4) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .4) 1px, transparent 1px)", "rgba(0,0,0,1)")}
			>
                <img src= {Bryson} alt="bryson tiller"/>
            </Box2>
			<div className={imgTitle2}>
				{/* <ImgTitle2> */}
					<span>Bryson Tiller</span>
				{/* </ImgTitle2> */}
			</div>
			<Box3
				onMouseEnter={() => setStyle3("linear-gradient(rgba(100, 130, 66, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 130, 66, .85) 1px, transparent 1px), linear-gradient(rgba(100, 130, 66, .4) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 130, 66, .4) 1px, transparent 1px)", "rgba(100, 130, 66, 1)")}
				onMouseOut={() => setStyle3("linear-gradient(rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(rgba(30, 30, 30, .4) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .4) 1px, transparent 1px)", "rgba(0,0,0,1)")}
			>
                <img src= {Mura} alt="mura masa"/>
            </Box3>
			{/* <ImgTitle3> */}
			<div className={imgTitle3}>
					<span>Mura Masa</span>
			</div>
			{/* </ImgTitle3> */}
			<Box4
				onMouseEnter={() => setStyle4("linear-gradient(rgba(84, 86, 101, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(84, 86, 101, .85) 1px, transparent 1px), linear-gradient(rgba(84, 86, 101, .4) 1px, transparent 1px), linear-gradient(90deg, rgba(84, 86, 101, .4) 1px, transparent 1px)", "rgba(84, 86, 101, 1)")}
				onMouseOut={() => setStyle4("linear-gradient(rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(rgba(30, 30, 30, .4) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .4) 1px, transparent 1px)", "rgba(0,0,0,1)")}
			>
                <img src= {Anderson} alt="anderson paak"/>
            </Box4>
			{/* <ImgTitle4> */}
			<div className={imgTitle4}>
					<span>Anderson Paak</span>
			</div>
			{/* </ImgTitle4> */}
			<Box5
				onMouseEnter={() => setStyle5("linear-gradient(rgba(254, 193, 100, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(254, 193, 100, .85) 1px, transparent 1px), linear-gradient(rgba(254, 193, 100, .4) 1px, transparent 1px), linear-gradient(90deg, rgba(254, 193, 100, .4) 1px, transparent 1px)", "rgba(254, 193, 100, 1)")}
				onMouseOut={() => setStyle5("linear-gradient(rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(rgba(30, 30, 30, .4) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .4) 1px, transparent 1px)", "rgba(0,0,0,1)")}
			>
                <img src= {Majid} alt="majid jordan"/>
            </Box5>
			{/* <ImgTitle5> */}
			<div className={imgTitle5}>
					<span>Majid Jordan</span>
			</div>
			{/* </ImgTitle5> */}
			<Box6
				onMouseEnter={() => setStyle6("linear-gradient(rgba(239, 240, 198, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 240, 198, .85) 1px, transparent 1px), linear-gradient(rgba(239, 240, 198, .4) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 240, 198, .4) 1px, transparent 1px)", "rgba(239, 240, 198, 1)")}
				onMouseOut={() => setStyle6("linear-gradient(rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(rgba(30, 30, 30, .4) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .4) 1px, transparent 1px)", "rgba(0,0,0,1)")}
			>
                <img src= {Black} alt="6lack"/>
            </Box6>
			{/* <ImgTitle6> */}
			<div className={imgTitle6}>
					<span>6lack</span>
			</div>
			{/* </ImgTitle6> */}
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
			<Box11>
                <img src= {Jcole} alt="J Cole"/>
            </Box11>
			<ImgTitle11>
					<span>J. Cole</span>
			</ImgTitle11>
			<Box12>
                <img src= {Moses} alt="Moses Sumney"/>
            </Box12>
			<ImgTitle12>
					<span>Moses Sumney</span>
			</ImgTitle12>

		</div>
    	)
    }



export default Home;
