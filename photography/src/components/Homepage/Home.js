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

	// state management for mouse events. we are setting initial state to default font colors and box/image div styling.

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

	// we create set functions to call upon mouse events in the return()

	// box1 mouse events

	const setStyle = (fontColor, boxShadow1) => {
		setFontColor(fontColor);
		setBoxShadow1(boxShadow1);
	};

	const setClickStyle = (boxShadow1) => {
		setBoxShadow12(boxShadow1);
		setBoxShadow11(boxShadow1);
		setBoxShadow10(boxShadow1);
		setBoxShadow9(boxShadow1);
		setBoxShadow8(boxShadow1);
		setBoxShadow1(boxShadow1);
		setBoxShadow2(boxShadow1);
		setBoxShadow3(boxShadow1);
		setBoxShadow4(boxShadow1);
		setBoxShadow5(boxShadow1);
		setBoxShadow6(boxShadow1);
		setBoxShadow7(boxShadow1);
	};

	// box 2 mouse events

	const setStyle2 = (fontColor2, boxShadow2) => {
		setFontColor2(fontColor2);
		setBoxShadow2(boxShadow2);
	};

	const setClickStyle2 = (boxShadow2) => {
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
	};

	// box3 mouse events

	const setStyle3 = (fontColor3, boxShadow3) => {
		setFontColor3(fontColor3);
		setBoxShadow3(boxShadow3);
	};

	const setClickStyle3 = (boxShadow3) => {
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
	};

	// box4 mouse events

	const setStyle4 = (fontColor4, boxShadow4) => {
		setFontColor4(fontColor4);
		setBoxShadow4(boxShadow4);
	};

	const setClickStyle4 = (boxShadow4) => {
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
	};

	// box5 mouse events

	const setStyle5 = (fontColor5, boxShadow5) => {
		setFontColor5(fontColor5);
		setBoxShadow5(boxShadow5);
	};

	const setClickStyle5 = (boxShadow5) => {
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
	};

	// box6 mouse events

	const setStyle6 = (fontColor6, boxShadow6) => {
		setFontColor6(fontColor6);
		setBoxShadow6(boxShadow6);
	};

	const setClickStyle6 = (boxShadow6) => {
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
	};

	// box7 mouse events

	const setStyle7 = (fontColor7, boxShadow7) => {
		setFontColor7(fontColor7);
		setBoxShadow7(boxShadow7);
	};

	const setClickStyle7 = (boxShadow7) => {
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
	};

	// box8 mouse events

	const setStyle8 = (fontColor8, boxShadow8) => {
		setFontColor8(fontColor8);
		setBoxShadow8(boxShadow8);
	};

	const setClickStyle8 = (boxShadow8) => {
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
	};

	// box9 mouse events

	const setStyle9 = (fontColor9, boxShadow9) => {
		setFontColor9(fontColor9);
		setBoxShadow9(boxShadow9);
	};

	const setClickStyle9 = (boxShadow9) => {
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
	};

	// box10 mouse events

	const setStyle10 = (fontColor10, boxShadow10) => {
		setFontColor10(fontColor10);
		setBoxShadow10(boxShadow10);
	};

	const setClickStyle10 = (boxShadow10) => {
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
	};

	// box11 mouse events

	const setStyle11 = (fontColor11, boxShadow11) => {
		setFontColor11(fontColor11);
		setBoxShadow11(boxShadow11);
	}; 

	const setClickStyle11 = (boxShadow11) => {
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
	};

	// box12 mouse events

	const setStyle12 = (fontColor12, boxShadow12) => {
		setFontColor12(fontColor12);
		setBoxShadow12(boxShadow12);
	}; 

	const setClickStyle12 = (boxShadow12) => {
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
	};

	// outer container styling 

	const container = css`
		box-sizing: border-box;
    	margin: 0;
    	padding: 0;
    	height: 100%;
    	background-color: rgba(#fff, .5);
    	background-image: linear-gradient(rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .85) 1px, transparent 1px), linear-gradient(rgba(30, 30, 30, .2) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 30, 30, .2) 1px, transparent 1px);
    	background-size: 33.333vh 50vh, 33.333vw 50vw, 8.333vw 8.333vw, 8.333vw 8.333vw;
    	background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
	`;

	// box1 styling 

	const box1 = css`
		position: relative;
		top: 16.66vw;
		width: 41.65vw;
		height: auto;
		cursor: pointer;
		transition: 0.4s ease-in;
		box-shadow: ${boxShadow1};
		overflow: hidden;
		display: block;
		:hover img {
			transform: matrix(1.1, 0, 0, 1.1, 0, 0);
			${'' /* opacity: 1; */}
		}

		& img {
			position: relative;
			display: inline-block;
			width: 100%;
			height: auto;
			z-index: -1;
			transition: 0.35s ease-in-out;
			transform: matrix(1, 0, 0, 1, 0, 0);
			${'' /* opacity: .9; */}
		}
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

	// box2 styling

	const box2 = css`
		position: relative;
    	left: 41.65vw;
    	width: 58.35vw;
    	height: auto;
    	cursor: pointer;
    	transition: 0.4s ease-in;
    	box-shadow: ${boxShadow2};
    	overflow: hidden;
    	display: block;
    	:hover img {
        	transform: matrix(1.1, 0, 0, 1.1, 0, 0);
    	}
    	& img {
        	position: relative;
        	display: inline-block;
        	width: 100%;
        	height: auto;
        	z-index: -1;
        	transition: 0.35s ease-in-out;
        	transform: matrix(1, 0, 0, 1, 0, 0);
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

	// box3 styling

	const box3 = css`
		position: relative;
    	left: 8.33vw;
    	width: 24.99vw;
    	height: auto;
    	cursor: pointer;
    	transition: 0.4s ease-in;
    	box-shadow: ${boxShadow3};
    	overflow: hidden;
    	display: block;
    	:hover img {
        	transform: matrix(1.1, 0, 0, 1.1, 0, 0);
    	}
    	& img {
        	position: relative;
        	display: inline-block;
        	width: 100%;
        	height: auto;
        	z-index: -1;
        	transition: 0.35s ease-in-out;
        	transform: matrix(1, 0, 0, 1, 0, 0);
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

	// box4 styling

	const box4 = css`
		position: relative;
    	top: -8.333vw;
    	left: 33.3vw;
    	width: 33.332vw;
    	height: auto;
    	cursor: pointer;
    	transition: 0.4s ease-in;
    	box-shadow: ${boxShadow4};
    	overflow: hidden;
    	display: block;
    	:hover img {
        	transform: matrix(1.1, 0, 0, 1.1, 0, 0);
        }
    	& img {
        	position: relative;
        	display: inline-block;
        	width: 100%;
        	height: auto;
        	z-index: -1;
        	transition: 0.35s ease-in-out;
        	transform: matrix(1, 0, 0, 1, 0, 0);
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

	// box 5 styling

	const box5 = css`
		position: relative;
    	top: -24.99vw;
    	left: 66.6vw;
    	width: 24.99vw;
    	height: auto;
    	cursor: pointer;
    	transition: 0.4s ease-in;
    	box-shadow: ${boxShadow5};
    	overflow: hidden;
    	display: block;
    	:hover img {
        	transform: matrix(1.1, 0, 0, 1.1, 0, 0);
        }
    	& img {
        	position: relative;
        	display: inline-block;
        	width: 100%;
        	height: auto;
        	z-index: -1;
        	transition: 0.35s ease-in-out;
        	transform: matrix(1, 0, 0, 1, 0, 0);
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

	// box6 styling

	const box6 = css`
		position: relative;
    	top: -24.99vw;
    	width: 58.31vw;
    	height: auto;
    	cursor: pointer;
    	transition: 0.4s ease-in;
    	box-shadow: ${boxShadow6};
    	overflow: hidden;
    	display: block;
    	:hover img {
        	transform: matrix(1.1, 0, 0, 1.1, 0, 0);      
    	}
    	& img {
        	position: relative;
        	display: inline-block;
        	width: 100%;
        	height: auto;
        	z-index: -1;
        	transition: 0.35s ease-in-out;
        	transform: matrix(1, 0, 0, 1, 0, 0);
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

	// box7 styling

	const box7 = css`
		position: relative;
    	top: -41.65vw;
    	left: 58.33vw;
    	width: 41.65vw;
    	height: auto;
    	cursor: pointer;
    	transition: 0.2s ease;
    	box-shadow: ${boxShadow7};
    	overflow: hidden;
    	display: block;
    	:hover img {
        	transform: matrix(1.1, 0, 0, 1.1, 0, 0);
		}
    	& img {
        	position: relative;
        	display: inline-block;
        	width: 100%;
        	height: auto;
        	z-index: -1;
        	transition: 0.35s ease-in-out;
        	transform: matrix(1, 0, 0, 1, 0, 0);
    	}
	`;

	const imgTitle7 = css`
		position: relative;
    	top: -41.65vw;
    	left: 58.31vw;
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
      		color: ${fontColor7};
			transition: .2s ease;
    	}
	`;

	// box8 styling

	const box8 = css`
		position: relative;
    	top: -41.65vw;
    	left: 8.33vw;
    	width: 33.32vw;
    	height: auto;
    	cursor: pointer;
    	transition: 0.4s ease-in;
    	box-shadow: ${boxShadow8};
    	overflow: hidden;
    	display: block;
    	:hover img {
        	transform: matrix(1.1, 0, 0, 1.1, 0, 0);
    	}
    	& img {
        	position: relative;
        	display: inline-block;
        	width: 100%;
        	height: auto;
        	z-index: -1;
        	transition: 0.35s ease-in-out;
        	transform: matrix(1, 0, 0, 1, 0, 0);
    	}
	`;

	const imgTitle8 = css`
		position: relative;
    	left: 8.33vw;
    	top: -41.65vw;
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
      		color: ${fontColor8};
			transition: .2s ease;
    	}
	`;

	// box9 styling

	const box9 = css`
		position: relative;
    	top: -58.31vw;
    	left: 41.65vw;
    	width: 24.96vw;
    	height: auto;
    	cursor: pointer;
    	transition: 0.4s ease-in;
    	box-shadow: ${boxShadow9};
    	overflow: hidden;
    	display: block;
    	:hover img {
        	transform: matrix(1.1, 0, 0, 1.1, 0, 0);
        }
    	& img {
        	position: relative;
        	display: inline-block;
        	width: 100%;
        	height: auto;
        	z-index: -1;
        	transition: 0.35s ease-in-out;
        	transform: matrix(1, 0, 0, 1, 0, 0);
    	}
	`;

	const imgTitle9 = css`
		position: relative;
    	top: -88.63vw;
    	left: 58.31vw;
    	padding-top: 4px;
    	margin-left: 33px;
    	font-weight: 500;
    	position: relative;
    	display: inline-block;
    	font-size: 2.07vw;
    	line-height: 2vw;
    	text-transform: uppercase;
    	cursor: pointer;
    	transform: rotate(90deg);
    	& span {
      		color: ${fontColor9};
			transition: .2s ease;
    	}
	`;

	// box10 styling

	const box10 = css`
		position: relative;
    	top: -66.64vw;
    	left: 66.6vw;
    	width: 24.99vw;
    	height: auto;
    	cursor: pointer;
    	transition: 0.4s ease-in;
    	box-shadow: ${boxShadow10};
    	overflow: hidden;
    	display: block;
    	:hover img {
        	transform: matrix(1.1, 0, 0, 1.1, 0, 0);
        }
    	& img {
        	position: relative;
        	display: inline-block;
        	width: 100%;
        	height: auto;
        	z-index: -1;
        	transition: 0.35s ease-in-out;
        	transform: matrix(1, 0, 0, 1, 0, 0);
    	}
	`;

	const imgTitle10 = css`
		position: relative;
    	top: -66.64vw;
    	left: 66.64vw;
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
      		color: ${fontColor10};
			transtion: .2s ease;
    	}
	`;

	// box11 styling

	const box11 = css`
		position: relative;
    	left: 49.98vw;
    	top: -58.31vw;
    	width: 49.998vw;
    	height: auto;
    	cursor: pointer;
    	transition: 0.4s ease-in;
    	box-shadow: ${boxShadow11};
    	overflow: hidden;
    	display: block;
    	:hover img {
        	transform: matrix(1.1, 0, 0, 1.1, 0, 0);  
    	}
    	& img {
        	position: relative;
        	display: inline-block;
        	width: 100%;
        	height: auto;
        	z-index: -1;
        	transition: 0.35s ease-in-out;
        	transform: matrix(1, 0, 0, 1, 0, 0);
    	}
	`;

	const imgTitle11 = css`
		position: relative;
    	left: 41.65vw;
    	top: -88.63vw;
    	padding-top: 4px;
    	margin-left: 33px;
    	font-weight: 500;
    	position: relative;
    	display: inline-block;
    	font-size: 2.07vw;
    	line-height: 2vw;
    	text-transform: uppercase;
    	cursor: pointer;
    	transform: rotate(-90deg);
    	& span {
      		color: ${fontColor11};
			transition: .2s ease;
    	}
	`;

	// box12 styling

	const box12 = css`
		position: relative;
    	left: 8.33vw;
    	top: -74.97vw;
    	width: 41.65vw;
    	height: auto;
    	cursor: pointer;
    	transition: 0.4s ease-in;
   	 	box-shadow: ${boxShadow12};
    	overflow: hidden;
    	display: block;
    	:hover img {
        	transform: matrix(1.1, 0, 0, 1.1, 0, 0);  
    	}
    	& img {
        	position: relative;
        	display: inline-block;
        	width: 100%;
        	height: auto;
        	z-index: -1;
        	transition: 0.35s ease-in-out;
        	transform: matrix(1, 0, 0, 1, 0, 0);
    	}
	`;

	const imgTitle12 = css`
		position: relative;
    	left: 8.33vw;
    	top: -74.97vw;
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
      		color: ${fontColor12};
			transition: .2s ease;
    	}
	`;




    return (
        <div className={container}>
			{/* <Box1 */}
			<div className={box1}
				onMouseEnter={() => setStyle("rgba(222, 89, 152, 1)", "inset 0 0 0 20px rgba(222, 89, 152, 1)")}
				onMouseOut={() => setStyle("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(222, 89, 152, 0)")}
				onClick={() => setClickStyle("inset 0 0 0 100vw rgba(222, 89, 152, 1)")}
				>
                <img src= {Travis} alt="la flame"/>
			</div>
            {/* </Box1> */}
			<div className={imgTitle1}>
				{/* <ImgTitle1> */}
					<span>Travis Scott</span>
				{/* </ImgTitle1> */}
			</div>
			{/* <Box2 */}
			<div className={box2}
				onMouseEnter={() => setStyle2("rgba(84, 86, 101, 1)", "inset 0 0 0 20px rgba(84, 86, 101, 1)")}
				onMouseOut={() => setStyle2("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(84, 86, 101, 0)")}
				onClick={() => setClickStyle2("inset 0 0 0 100vw rgba(84, 86, 101, 1)")}
			>
                <img src= {Bryson} alt="bryson tiller"/>
			</div>
            {/* </Box2> */}
			<div className={imgTitle2}>
				{/* <ImgTitle2> */}
					<span>Bryson Tiller</span>
				{/* </ImgTitle2> */}
			</div>
			{/* <Box3 */}
			<div className={box3}
				onMouseEnter={() => setStyle3("rgba(100, 130, 66, 1)", "inset 0 0 0 20px rgba(100, 130, 66, 1)")}
				onMouseOut={() => setStyle3("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(100, 130, 66, 0)")}
				onClick={() => setClickStyle3("inset 0 0 0 100vw rgba(100, 130, 66, 1)")}
			>
                <img src= {Mura} alt="mura masa"/>
			</div>
            {/* </Box3> */}
			{/* <ImgTitle3> */}
			<div className={imgTitle3}>
					<span>Mura Masa</span>
			</div>
			{/* </ImgTitle3> */}
			{/* <Box4 */}
			<div className={box4}
				onMouseEnter={() => setStyle4("rgba(84, 86, 101, 1)", "inset 0 0 0 20px rgba(84, 86, 101, 1)")}
				onMouseOut={() => setStyle4("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(84, 86, 101, 0)")}
				onClick={() => setClickStyle4("inset 0 0 0 100vw rgba(84, 86, 101, 1)")}
			>
                <img src= {Anderson} alt="anderson paak"/>
			</div>
            {/* </Box4> */}
			{/* <ImgTitle4> */}
			<div className={imgTitle4}>
					<span>Anderson Paak</span>
			</div>
			{/* </ImgTitle4> */}
			{/* <Box5 */}
			<div className={box5}
				onMouseEnter={() => setStyle5("rgba(254, 193, 100, 1)", "inset 0 0 0 20px rgba(254, 193, 100, 1)")}
				onMouseOut={() => setStyle5("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(254, 193, 100, 0)")}
				onClick={() => setClickStyle5("inset 0 0 0 100vw rgba(254, 193, 100, 1)")}
			>
                <img src= {Majid} alt="majid jordan"/>
			</div>
            {/* </Box5> */}
			{/* <ImgTitle5> */}
			<div className={imgTitle5}>
					<span>Majid Jordan</span>
			</div>
			{/* </ImgTitle5> */}
			{/* <Box6 */}
			<div className={box6}
				onMouseEnter={() => setStyle6("rgba(239, 240, 198, 1)", "inset 0 0 0 20px rgba(239, 240, 198, 1)")}
				onMouseOut={() => setStyle6("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(239, 240, 198, 0)")}
				onClick={() => setClickStyle6("inset 0 0 0 100vw rgba(239, 240, 198, 1)")}
			>
                <img src= {Black} alt="6lack"/>
			</div>
            {/* </Box6> */}
			{/* <ImgTitle6> */}
			<div className={imgTitle6}>
					<span>6lack</span>
			</div>
			{/* </ImgTitle6> */}
			{/* <Box7 */}
			<div className={box7}
				onMouseEnter={() => setStyle7("rgba(92, 145, 223, 1)", "inset 0 0 0 20px rgba(92, 145, 223, 1)")}
				onMouseOut={() => setStyle7("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(92, 145, 223, 0)")}
				onClick={() => setClickStyle7("inset 0 0 0 100vw rgba(92, 145, 223, 1)")}
			>
                <img src= {KK} alt="king krule"/>
			</div>
            {/* </Box7> */}
			{/* <ImgTitle7> */}
			<div className={imgTitle7}>
					<span>King Krule</span>
			</div>
			{/* </ImgTitle7> */}
			{/* <Box8 */}
			<div className={box8}
				onMouseEnter={() => setStyle8("rgba(84, 86, 101, 1)", "inset 0 0 0 20px rgba(84, 86, 101, 1)")}
				onMouseOut={() => setStyle8("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(84, 86, 101, 0)")}
				onClick={() => setClickStyle8("inset 0 0 0 100vw rgba(84, 86, 101, 1)")}
			>
                <img src= {Earl} alt="Earl Sweatshirt"/>
			</div>
            {/* </Box8> */}
			{/* <ImgTitle8> */}
			<div className={imgTitle8}>
					<span>Earl Sweatshirt</span>
			</div>
			{/* </ImgTitle8> */}
			{/* <Box9 */}
			<div className={box9}
				onMouseEnter={() => setStyle9("rgba(59, 61, 47, 1)", "inset 0 0 0 20px rgba(59, 61, 47, 1)")}
				onMouseOut={() => setStyle9("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(59, 61, 47, 0)")}
				onClick={() => setClickStyle9("inset 0 0 0 100vw rgba(59, 61, 47, 1)")}
			>
                <img src= {Vince} alt="Vince Staples"/>
			</div>
            {/* </Box9> */}
			{/* <ImgTitle9> */}
			<div className={imgTitle9}>
					<span>Vince Staples</span>
			</div>
			{/* </ImgTitle9> */}
			{/* <Box10 */}
			<div className={box10}
				onMouseEnter={() => setStyle10("rgba(81, 104, 112, 1)", "inset 0 0 0 20px rgba(81, 104, 112, 1)")}
				onMouseOut={() => setStyle10("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(81, 104, 112, 0)")}
				onClick={() => setClickStyle10("inset 0 0 0 100vw rgba(81, 104, 112, 1)")}
			>
                <img src= {Mac} alt="Mac Demarco"/>
			</div>
            {/* </Box10> */}
			{/* <ImgTitle10> */}
			<div className={imgTitle10}>
					<span>Mac Demarco</span>
			</div>
			{/* </ImgTitle10> */}
			{/* <Box11 */}
			<div className={box11}
				onMouseEnter={() => setStyle11("rgba(255, 56, 240, 1)", "inset 0 0 0 20px rgba(255, 56, 240, 1)")}
				onMouseOut={() => setStyle11("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(255, 56, 240, 0)")}
				onClick={() => setClickStyle11("inset 0 0 0 100vw rgba(255, 56, 240, 1)")}
			>
                <img src= {Jcole} alt="J Cole"/>
			</div>
            {/* </Box11> */}
			{/* <ImgTitle11> */}
			<div className={imgTitle11}>
					<span>J. Cole</span>
			</div>
			{/* </ImgTitle11> */}
			{/* <Box12 */}
			<div className={box12}
				onMouseEnter={() => setStyle12("rgba(106, 116, 115, 1)", "inset 0 0 0 20px rgba(106, 116, 115, 1)")}
				onMouseOut={() => setStyle12("rgba(0,0,0,1)", "inset 0 0 0 0 rgba(106, 116, 115, 0)")}
				onClick={() => setClickStyle12("inset 0 0 0 100vw rgba(106, 116, 115, 1)")}

			>
                <img src= {Moses} alt="Moses Sumney"/>
			</div>
            {/* </Box12> */}
			{/* <ImgTitle12> */}
			<div className={imgTitle12}>
					<span>Moses Sumney</span>
			</div>
			{/* </ImgTitle12> */}

		</div>
    	)
    }



export default Home;
