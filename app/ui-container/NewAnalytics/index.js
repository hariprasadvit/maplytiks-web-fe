import React, { useState } from 'react';
// import HomeHeader from './HomeHeader';
// import HighLights from './Highlights';
// import MyProjects from './MyProjects';
import HomeHeader from '../HomeExpand/HomeHeader';
import HomeFooter from '../../components/homePage/HomeFooter';

import AnalyticHeader from './analyticHeaderWrapper';
import AnalyticBreadCrumb from './analyticBreadCrumb';
import MatchValuation from './matchValuation';
import AnalyticSlider from './analyticSlider';
import Timeline from './timeline';
import ExposureSection from './exposure';

const NewAnalytics = () => {
  const [isStickyHeader, setIsStickyHeader] = useState(false);

  return (
    <div className="main-wrapper" style={{ backgroundColor: '#EDEEF2' }}>
      <HomeHeader user="" isTop="" history="" signout="" />
      <AnalyticHeader
        title="2018 FIFA WORLD CUP RUSSIA™"
        date="15th March - 27th March 2019"
        type="#Sports"
        scrollCallback={setIsStickyHeader}
      />
      <AnalyticBreadCrumb isStickyHeader={isStickyHeader} />
      <MatchValuation isSticky={isStickyHeader} />
      <AnalyticSlider />
      <Timeline />
      <ExposureSection />
      <HomeFooter />
    </div>
  );
};
export default NewAnalytics;
