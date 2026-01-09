import React, { useState } from 'react';
// import HomeHeader from './HomeHeader';
// import HighLights from './Highlights';
// import MyProjects from './MyProjects';

import HomeHeader from '../HomeExpand/HomeHeader';
import HomeFooter from '../../components/homePage/HomeFooter';

import AnalyticHeader from '../NewAnalytics/analyticHeaderWrapper';
import AnalyticBreadCrumb from '../NewAnalytics/analyticBreadCrumb';
import PlatformSection from './platform';
import SocialSlider from './socialSlider';
const SocialPage = () => {
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
      <AnalyticBreadCrumb isStickyHeader={isStickyHeader} type="social" />
      <div className="platform__card">
        <PlatformSection type="platform" title="Platform" width="34%" />
        <PlatformSection type="hashtag" title="Heading" width="64%" />
      </div>
      <div className="platform__card">
        <PlatformSection type="timeline" title="Timeline" />
      </div>
      <div className="platform__card">
        <h2 className="platform__title">Highlights</h2>
      </div>
      <SocialSlider height="458px" />
      <div className="platform__card" style={{ marginBottom: '30px' }}>
        <PlatformSection type="ranking" title="Ranking" />
      </div>
      <HomeFooter />
    </div>
  );
};
export default SocialPage;
