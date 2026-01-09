import React from 'react';
import HomeHeader from './HomeHeader';
import HighLights from './Highlights';
import MyProjects from './MyProjects';
import HomeFooter from '../../components/homePage/HomeFooter';

const HomeExpand = () => (
  <div className="main-wrapper">
    <HomeHeader user="" isTop="" history="" signout="" />
    <div className="paddingTop100">
      <HighLights />
      <MyProjects />
    </div>
    <HomeFooter />
  </div>
);

export default HomeExpand;
