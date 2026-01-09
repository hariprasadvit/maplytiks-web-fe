/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BUILDING_BLOCKS_CONFIG } from 'utils/constants';
import { Container, Row, Col } from 'react-grid-system';
import { AnimateOnChange,animations } from 'react-animation';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import {BB} from 'utils/constants';
let checkstats =false;
const BuildingBlocks = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [activeSubItem, setActiveSubItem] = useState(0);
  const [technologyItem, settechnologyItem] = useState();
  const [currentItem, setcurrentItem] = useState(1);
  const [nextbuldingelement, setnextbuldingelement] = useState(0);
  const [timercount, settimercount] = useState(false);

  let technologyItems = BB.map((contect) => 
  {
    if(contect.title==="Technology"){   //Technology
      return (
      <Row className="buildingcontentheight">
                <Col sm={6} className="buildingfirstblockstyle">
                  <Row className="rowstyle">
                  <Col md={8} offset={{ md: 2 }} >
                    <div className="b_headertext">Building Blocks</div></Col>
                  </Row>
                  <Row>
                          <Col md={10} offset={{ md: 2 }}  >
                                  <Row>
                                    <Col sm={1} className="countsize">
                                      <div >
                                      01/03
                                    </div></Col>
                                  </Row>
                          </Col>
                  </Row>    
              {/* <Row >
                <Col md={8} offset={{ md: 2 }} className="buldingtitle">{contect.title}
                </Col>
              </Row>
              <Row>
                <Col md={10} offset={{ md: 2 }} className="buldingfirstcontent">  className="buldingfirstcontent"
                {contect.text}
                </Col>
              </Row> */}
              <Row>
                <Col md={10} offset={{ md: 2 }} >  
                    <div className="buldingtitle">{contect.title}</div>
                </Col>
              </Row>
              <Row>
                <Col md={10} offset={{ md: 2 }}>
                <ul className="childheader">
                                     {
                                      contect.details[0].text.map((myList) =>  
                                      <li>
                                        <Row>
                                          <Col sm={1}><span className="liicon">{`\u2022`}</span></Col>
                                          <Col className="litextblock">{myList}</Col>
                                        </Row>
                                        </li>  
                                )  
                        }
                        </ul>
                       {/* <div>{contect.details[0].text}</div> */}
                </Col>
              </Row>
                </Col>
                <Col sm={6}>
                      <img src={contect.image} alt="" className="buldingtechimage" />
                </Col>
      </Row>  )
  }
  else if(contect.title==="MethodologyD"){
    return (
    <Row className="buildingcontentheight">
              <Col sm={6} className="buildingfirstblockstyle">
                <Row className="rowstyle">
                <Col md={8} offset={{ md: 2 }} >
                  <div className="b_headertext">Building Blocks</div></Col>
                </Row>
                <Row>
                        <Col md={10} offset={{ md: 2 }}  >
                                <Row>
                                  <Col sm={1} className="countsize">
                                    <div >
                                    02/03
                                  </div></Col>
                                </Row>
                        </Col>
                </Row>    
            <Row >
              <Col md={8} offset={{ md: 2 }} className="buldingtitle">{contect.title}
              </Col>
            </Row>
            <Row>
              <Col md={10} offset={{ md: 2 }} className="buldingfirstcontent">
              {contect.text}
              </Col>
            </Row>
            <Row>
              <Col md={8} offset={{ md: 2 }}>
              <ul className="childheader">
              <BuildingBlocksTabs setActiveItem={setActiveItem} setActiveSubItem={setActiveSubItem}  activeItem={activeItem} />
                <div >
                  {BUILDING_BLOCKS_CONFIG[activeItem].sliders.map((d, i) => (
                    <div onClick={() => setActiveSubItem(i)}  key={d.key}>{
                          <Row>
                              <Col className="methodloygstyle" md={12} >
                                    <div >{d.name}</div>
                              </Col>
                          </Row>
                      }
                    </div>
                  ))}
                </div>
                      </ul>
              </Col>
            </Row>
              </Col>
              <Col sm={6}>
                    {/* <img src={contect.image} alt="" className="buldingtechimage" /> */}
                    {BUILDING_BLOCKS_CONFIG[activeItem].sliders.map((d, i) => (
                    <div onClick={() => setActiveSubItem(i)}  key={d.key}>{
                      <img src={d.image} alt="" className="buldingmethology" /> 
                      }
                    </div>
                  ))}

              </Col>
    </Row>  )
} 
else if(contect.title==="ExecutionD"){   //Technology   className="buildingcontentheight"
  return (
    <div>
    <Row >
            <Col sm={11} offset={{ md: 1 }}  className="buildingthirdblockstyle">
              <Row className="rowstyle">
              <Col>
                <div className="b_headertext">Building Blocks</div></Col>
              </Row>
              <Row>
                      <Col  >
                              <Row>
                                <Col sm={1} className="countsize">
                                  <div >
                                  03/03
                                </div></Col>
                              </Row>
                      </Col>
              </Row>    
          <Row >
            <Col className="buldingtitle">{contect.title}
            </Col>
            </Row>
            </Col>
            <Col sm={11} offset={{ md: 1 }} >
            <Row className="buldingblockexcecution">
             {
                contect.details.map((myList,i) =>  {
                  return(
                   <Col sm={4}>
                      <Row>
                      <Col sm={10} >
                        <div>
                          <div className="buldingblockimage">
                                 <img src={myList.image} alt=""   />
                                  <div className="content">
                  <h1>{myList.title}</h1>
                                 
                                </div>
                                {/* <p>{myList.text}</p> */}
                        </div>
                        <div >
                        {myList.text}
                        </div>
                        </div>
                        {/* {myList.text} */}
                  </Col>
                  <Col sm={1} className={(i === 2 || i === 5) ? 'contentdisplay' : 'contentarrow'} >>></Col>
                      </Row>
                   </Col>
                   )
                })
          }
            </Row>    
            </Col>
    </Row>
    </div> 
  )
}
} 
);


let methodologyItems = BB.map((contect) => 
  {
  if(contect.title==="Methodology"){
    return (
    <Row className="buildingcontentheight">
              <Col sm={6} className="buildingfirstblockstyle">
                <Row className="rowstyle">
                <Col md={8} offset={{ md: 2 }} >
                  <div className="b_headertext">Building Blocks</div></Col>
                </Row>
                <Row>
                        <Col md={10} offset={{ md: 2 }}  >
                                <Row>
                                  <Col sm={1} className="countsize">
                                    <div >
                                    02/03
                                  </div></Col>
                                </Row>
                        </Col>
                </Row>    
            <Row >
              <Col md={8} offset={{ md: 2 }} className="buldingtitle">{contect.title}
              </Col>
            </Row>
            <Row>
              <Col md={10} offset={{ md: 2 }} className="buldingfirstcontent">
              <p className="buldingfirstcontentstyles">{contect.text}</p> 
              </Col>
            </Row>
            <Row>
              <Col md={9} offset={{ md: 2 }}>
              <ul className="childheader">
                <div className="buldingsubheader"><span>Quality Attributes</span></div>
              
              <BuildingBlocksTabs setActiveItem={setActiveItem} setActiveSubItem={setActiveSubItem}  activeItem={activeItem} />
                <div >
                  {BUILDING_BLOCKS_CONFIG[activeItem].sliders.map((d, i) => (
                    <div onClick={() => setActiveSubItem(i)}  key={d.key}>{
                          <Row>
                              <Col className="methodloygstyle" md={12} >
                              <div>
                                     <span> {d.name} <span className="innerfontstyle">{d.name1}</span></span>
                                     </div>
                              </Col>
                          </Row>
                      }
                    </div>
                  ))}
                </div>
                      </ul>
              </Col>
            </Row>
              </Col>
              <Col sm={6}>
                    {/* <img src={contect.image} alt="" className="buldingtechimage" /> */}
                    {BUILDING_BLOCKS_CONFIG[activeItem].sliders.map((d, i) => (
                    <div onClick={() => setActiveSubItem(i)}  key={d.key}>{
                      <img src={d.image} alt="" className="buldingmethology" /> 
                      }
                    </div>
                  ))}

              </Col>
    </Row>  )
} 
} 
);

let executionItems = BB.map((contect) => 
  {
   if(contect.title==="Execution"){
  return (
    <div>
    <Row >
            <Col sm={11} offset={{ md: 1 }}  className="buildingthirdblockstyle">
              <Row className="rowstyle">
              <Col>
                <div className="b_headertext">Building Blocks</div></Col>
              </Row>
              <Row>
                      <Col  >
                              <Row>
                                <Col sm={1} className="countsize">
                                  <div >
                                  03/03
                                </div></Col>
                              </Row>
                      </Col>
              </Row>    
          <Row >
            <Col className="buldingtitle">{contect.title}
            </Col>
            </Row>
            </Col>
            <Col sm={11} offset={{ md: 1 }} >
            <Row className="buldingblockexcecution">
             {
                contect.details.map((myList,i) =>  {
                  return(
                   <Col sm={4}>
                      <Row>
                      <Col sm={10} >
                        <div>
                          <div className="buldingblockimage">
                                 <img src={myList.image} alt=""   />
                                  <div className="content">
                  <h1>{myList.title}</h1>
                                 
                                </div>
                                {/* <p>{myList.text}</p> */}
                        </div>
                        <div >
                        {myList.text}
                        </div>
                        </div>
                        {/* {myList.text} */}
                  </Col>
                  <Col sm={1} className={(i === 2 || i === 5) ? 'contentdisplay' : 'contentarrow'} >>></Col>
                      </Row>
                   </Col>
                   )
                })
          }
            </Row>    
            </Col>
    </Row>
    </div> 
  )
}
} 
);
let statelist = ["technologyItems", "methodologyItems", "executionItems"];

var timerbulding=null;
function timerbuldingFunction(){
  checkstats =false;
}
const nextIndex = () => {
  if(checkstats){
  }
  else{
    checkstats = true
    timerbulding = setTimeout(timerbuldingFunction, 1000);
    if (statelist[nextbuldingelement] == "executionItems") {
      window.location="#brands"
      return setnextbuldingelement(0)
    }
    else {
      return setnextbuldingelement(nextbuldingelement + 1 )
    }
  }
 
};

const prevIndex = () => {
  if(checkstats){
}
    else{
      checkstats = true
      timerbulding = setTimeout(timerbuldingFunction, 1000);
      if (statelist[nextbuldingelement] == "technologyItems") {
        window.location="#why-us"
        return setnextbuldingelement(0);
      }
       else{
        return setnextbuldingelement(nextbuldingelement - 1 )
       }
    }
};


function Buldingcontentchange(){
 return(
  <ReactScrollWheelHandler upHandler={prevIndex} downHandler={nextIndex}>
  <div className="bulding-block block" id="how-it-works" style={{ background: '#fff' }}>
   
  <Container className="buildingpagesize" > 
     {statelist[nextbuldingelement] == "technologyItems" ? technologyItems:statelist[nextbuldingelement] == "methodologyItems" ? methodologyItems:executionItems }
  </Container>
 </div>
 </ReactScrollWheelHandler>
 )
}
  return ( <Buldingcontentchange></Buldingcontentchange>);
};

 const BuildingBlocksTabs = ({
   setActiveItem,
   setActiveSubItem,
   activeItem,
 }) => (
   <ul className="popping-list row space-between">
     { BUILDING_BLOCKS_CONFIG.map((d, i) => (
       <li key={d.title} className={activeItem === i ? 'activemathedlogy' : ''}  onClick={() => {
           setActiveItem(i);
           setActiveSubItem(0);
         }}
       >
         <div> <button>{d.title}</button></div>
       </li>
     ))}
   </ul>
 )

 BuildingBlocksTabs.propTypes = {
   setActiveItem: PropTypes.func.isRequired,
   setActiveSubItem: PropTypes.func.isRequired,
   activeItem: PropTypes.number,
 };
export default BuildingBlocks;
