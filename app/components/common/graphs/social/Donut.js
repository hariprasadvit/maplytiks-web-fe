import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Sector,Cell } from 'recharts';
const COLOR_SCHEMES = ['#00acee', '#3b5998', '#87288d'];
import { _numberToHumanReadableFormatConverter } from 'utils/helpers';
function Donut({
  baseReport:{
    data:baseReportData = [],
    loading: baseReportLoading,
    title: baseReportTitle,
    socialsubplatformCallback,
  } = {},
  callbacklinearData,
  totalcallbacklinearData,
  platformName,
  resetPlatfom

}) {
  const [activeSubplatform, setActiveSubplatform] = useState();
  const [activeFinalSubplatform, setactiveFinalSubplatform] = useState();
  const [activeFinalSubplatformName, setactiveFinalSubplatformName] = useState();
  const [graphdata, setGraphdata] = useState(baseReportData);
  const [linearData, setLinearData] = useState();
  const [selectedIndexTab, setSelectedIndexTab] = useState();
  function onPieEnter(data, index){
      setactiveFinalSubplatform(index)
      setActiveSubplatform(index)
      let callbacksubplat =[]
      callbacksubplat.push(data.label)
      socialsubplatformCallback(callbacksubplat)
      setactiveFinalSubplatformName(data.label)
      platformName(data.label)
      commanFunction(data.label)
  }

 function onPieOver(data, index){
  setActiveSubplatform(index)
  commanFunction(data.label)
 } 
function onPieLeave(data, index){
  setActiveSubplatform(activeFinalSubplatform)
  if(activeFinalSubplatformName){
    commanFunction(activeFinalSubplatformName)
  }else{
    callbacklinearData(linearData) 
    setActiveSubplatform(-1)
  }
}

function commanFunction(label){
  let resultKpi = baseReportData.find((val)=>val.label==label);
  let resultdata =[]
  resultdata.push(resultKpi)
  callbacklinearData(resultdata)
  setSelectedIndexTab(label)
}
  useEffect(() => {
    let result = []
    baseReportData.map((entry, index) => {
                    result.push({ label: entry.label, value: entry.value.value })
            }
    );
    if(result.length>0){
      setGraphdata(result)
      if(!selectedIndexTab){
        setLinearData(baseReportData)
      }
    }
  }, [baseReportData,selectedIndexTab]);

  useEffect(() => {
    totalcallbacklinearData(baseReportData)
    callbacklinearData(linearData) 
  },[linearData]);

  useEffect(() => {
    callbacklinearData(linearData) 
    socialsubplatformCallback([])
    setActiveSubplatform(-1)
    platformName("")
  },[resetPlatfom]);

  return (
    <div className="donutstyle">
      <PieChart width={450} height={313}>
      <Pie
        activeIndex={activeSubplatform}
        activeShape={renderActiveShape}
        data={graphdata}
        cx={260}
        cy={145}
        innerRadius={70}
        outerRadius={90}
        paddingAngle={5}
        fill="#00acee"
        dataKey="value"
        onClick={ onPieEnter}
        onMouseOver={onPieOver}
        onMouseLeave={onPieLeave}>
        {
          	baseReportData.map((entry, index) => <Cell fill={COLOR_SCHEMES[index % COLOR_SCHEMES.length]}/>)
          }
        </Pie>
    </PieChart>
    </div>
  );
}

Donut.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,
  data: PropTypes.object,
  donutThickness: PropTypes.number,
  activeArc: PropTypes.number,
  donutRadius: PropTypes.number,
  loading: PropTypes.bool,
};

export default Donut;


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
     <text x={cx} y={cy} dy={10} textAnchor="middle" fill={fill}>{payload.label}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      {/* <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" /> */}
      {/* <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" /> */}
      {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
        {_numberToHumanReadableFormatConverter(value,true,false,"Social Donut")}
        </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text> */}
    </g>
  );
};

