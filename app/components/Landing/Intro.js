/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated, useTrail,useTransition } from 'react-spring';
import Slider from 'react-slick';
import arrowWhiteRight from 'images/Arrow-White-Right.svg';
import { Container, Row, Col,Visible, Hidden, ScreenClassRender } from 'react-grid-system';
import { AnimateOnChange,animations } from 'react-animation';
import {INTRO} from 'utils/constants';
import landing from 'images/banner/landing.png';
import landing1 from 'images/banner/landing1.png';
import landing2 from 'images/banner/landing2.png';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
// document.body.style.overflow = "hidden"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  rowtext: {
    padding: theme.spacing(2)
  },
  rowsubtext: {
    padding: theme.spacing(2)
  },
  rowcount: {
    padding: theme.spacing(0),
  },
}));
const Intro = ({ history }) => {
  const [index, setIndex] = useState(0);
  const [nextelement, setnextelement] = useState(0);
  const fadingTextPropsTransition = useTransition(INTRO[index], item => item.text, {
  from: { transform: 'translate3d(0,60px,0)' },
  enter: { transform: 'translate3d(0,0px,0)' },
  leave: { transform: 'translate3d(0,-40px,0)',opacity:0},
  config: { mass: 5, tension: 2000, friction: 200 },
});
const bannerimage = [landing,landing1,landing2]
let wheelcount =0;
//const [firstName, setFirstName] = useState('');

const [timerbannercount, settimerbannercount] = useState(true);
const [nextbannerelement, setbannerelement] = useState(0);

function contentchange(){
  if(2<=nextelement){
    setnextelement(0)
    window.location="#why-us"
    setIndex(0);
  }
  else{
    setIndex((state) => (state + 1) % INTRO.length);
    wheelcount++;
    setnextelement(nextelement + 1 )
  }
}

var timerbanner =null;
function timerFunction(){
  settimerbannercount(true)
}
let nextIndexbanner = () => {
  if (nextbannerelement == INTRO.length-1) {
    clearTimeout(timerbanner);
     window.location="#why-us"
     setIndex(0);
     return setbannerelement(0)
   }
   else if (timerbannercount) {
    settimerbannercount(false)
     timerbanner = setTimeout(timerFunction, 800);
     setIndex((state) => (state + 1) % INTRO.length);
     return setbannerelement(nextbannerelement + 1 )
   }
}

let prevIndexbanner = () => {
   if (timerbannercount && nextbannerelement !=0) {
    settimerbannercount(false)
    timerbanner = setTimeout(timerFunction, 1000);
    setIndex((state) => (state - 1) % INTRO.length);
    return setbannerelement(nextbannerelement - 1 )
   }

}

  const classes = useStyles();
  return (
    <ReactScrollWheelHandler upHandler={prevIndexbanner} downHandler={nextIndexbanner}>
    <div className="banner-block" >
       <div className="banner-caption-block-video" >
       <div class="flex-container">
  <div className="divLength">
  <div className={classes.root}>
    <div className="bannerspace">
    <Grid container spacing={0} >
        <Grid item  xs={4} sm={12} >
             <div className={classes.rowcount}>
                       <Grid container >
                         <Grid item className="text-count" >0{index+1}</Grid>
                         <Grid item className="text-count-size" >/03</Grid>
                       </Grid>
             </div>
        </Grid>
        <Grid item xs={8} sm={3}>
             <div className={classes.rowsubtext} className="banner-font-style subtext" >{INTRO[index].title}</div>
        </Grid>
        <Grid item xs={12} sm={8}>
         <div className={classes.rowtext} className="banner-font-style">{fadingTextPropsTransition.map(({ item, props, key }) => (
  <animated.div  key={key}  style={{ ...props, position: 'absolute' }} >
                  <p className="subcontent">
                    {item.text}
                  </p>
                </animated.div>
              ))}
</div>
        </Grid>
      </Grid>
    </div>
    </div>
  </div>
<div>
<section className="scroller">
  <a href="#why-us"><span></span></a>
</section>
</div>
</div>       
       </div>
       <img src={bannerimage[nextbannerelement]} width="100%" height="100%" className="bannerimage" ></img>
    </div>
    </ReactScrollWheelHandler>
  );
};

export default Intro;
