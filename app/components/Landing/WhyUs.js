/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import { WHY_US_CONFIG } from 'utils/constants';
import { animated, useTransition, config } from 'react-spring';
import Matrix from './Matrix';
import LineAnimation from '../common/Animated/LineAnimation';
import { Container, Row, Col } from 'react-grid-system';
import {USP} from 'utils/constants';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const WhyUs = () => {
  // function contentchange(){
  //   window.location="#how-it-works"
  // }
  let nextIndex = () => {
    window.location="#how-it-works"
  }
let prevIndex = () => {
  window.location="#"
}
  const listItems = USP.map((contect) =>  
            <Col sm={4}  className="contentst">
                <div className="colmpadding">
                    <div>
                        <img src={contect.image} alt="" className="img" />
                  </div>
                    <div className="contenthedertextstyle">
                     {contect.title}
                    </div>
                    <div className="contenttextstyle">{contect.text}
                    </div>
                </div>
          </Col>
);  
  return (
    <ReactScrollWheelHandler upHandler={prevIndex} downHandler={nextIndex}>
    <div id="why-us" style={{ background: '#fff' }}  className="usp-block block">
         <Container className="pagesize">
         <Row>
         <Col sm={1}></Col>
           <Col sm={11}>
              <div className="titlestyle">
              <span >Competitive Advantage</span>
              
              
              </div>
           </Col>
         </Row>
           <Row >
           <Col md={10} offset={{ md: 1 }}>
             <Row>
             {listItems}</Row>
           </Col>
            </Row>
         </Container>
    </div>
    </ReactScrollWheelHandler>
  );
};

export default WhyUs;
