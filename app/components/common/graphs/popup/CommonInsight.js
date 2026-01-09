/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

const CommonInsight = ({
  data,
  //  insightTitle
}) => {

    console.log("CommonInsight",data['audit']['data'])   //['details']['comment'] 
    const [active, setActive] = useState(true);
    const [details, setdetails] = useState();
     data['audit']['data'].map((details, i) =>{
         
         if( !Array.isArray(details['details']))
         {
            console.log("details",details['details'])
     }
    })  
    
// let tableDetails = data['audit']['data'].map((details, i) =>{
//     return(
//             if(Array.isArray(details['details']['comment']))
//             {
                
//                 details['details']['comment'].map(
//                     (d, i) =>{
//                         console.log("d.key",d.key,"d.value",d.value)
                        
//                             <div className="table-row">
//                                    <div className="table-data">{d.key}</div>
//                                    <div className="table-data">{d.value}</div>
//                            </div>
                          
//                     }
//                   )
//             }
// )})  



  return (
    <div className="matchValuation__insight">
      <div
        className={`matchwiseQualityContent__comments ${
          active ? 'active' : ''
        }`}
      >
        <div className="SponsorsWrapperTable">
          <div className="table-container">
            <div className="table-header">
              <div className="table-data table-heading headerpopup">
                  { data['audit']!="undefined"?<HeaderFunction val={data['audit']['data']}/>:""}
                  
                  </div>
              <div className="table-data table-heading"></div>
            </div>
          </div>
          <div className="spacebetween"></div>
{data['audit']['data'].map(
            (d, i) =>
            Array.isArray(d['details']['comment']) && (
                d['details']['comment'].map((detsil,j) =>
                (detsil.type =="link")&&(
                        <div className="table-popuprow">
                            <div className="table-data popupstyles"> <ul>
                             <li></li></ul></div>
                            <div className="table-data">
                                <SpliteValue val={detsil}/>
                            {/* <a href={detsil.value} target="_blank">{detsil.key.split("~")}</a> */}
                            </div></div>),
                )
              )
          )}
 {data['audit']['data'].map(
            (d, i) =>
            Array.isArray(d['details']['comment']) && (
                d['details']['comment'].map((detsil,j) =>
                (detsil.type =="data")&&(
                        <div className="table-popuprow">
                            <div className="table-data popupstyles"> <ul>
                             <li></li></ul></div>
                            <div className="table-data">{detsil.key}: {detsil.value}</div>
                        </div>),
                )
              )
          )}
        </div>
      </div>
    </div>
  );
};

function SpliteValue(details) {
    let pieces = details.val.key.split("~");
    return( <div>
       <div>{pieces[0]}: <a href={details.val.value} target="_blank" className="sociallinkcss">{pieces[1]}</a></div> 
    </div>);
  }

  function HeaderFunction(details) {
    //   console.log("HeaderFunction",details.val[0]['details'].title)
    return( <div>
       {details.val[0]['details'].title}
    </div>);
  }




CommonInsight.propTypes = {
  data: PropTypes.array
};

export default CommonInsight;
