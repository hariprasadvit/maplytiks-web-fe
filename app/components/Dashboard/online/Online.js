import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import Timeline from './pages/Timeline';
import PlatformReport from './pages/PlatformReport';
//import SocialHighlights from './SocialHighlights';
import Rank from './pages/Rank';
import DetailsHeader from './pages/details/DetailsHeader';

ReactGA.initialize('UA-129684001-1');
ReactGA.pageview(window.location.pathname + window.location.search);
const Online = ({
  data: {
    subPlatforms: {
      data: subPlatformData = [],
      loading: subPlatformLoading,
    } = {},
    digitalReport = {},
    socialCategory = [],
    socialTimeInterval = [],
    timeline = {},
    baseReport = {},
    socialhighlights = {},
    socialRank = {},
    intervalSelectionCallback,
  } = {},
  isSticky,
}) => (
  <>
     <PlatformReport
      subPlatforms={subPlatformData}
      subPlatformListLoading={subPlatformLoading}
      isSticky={isSticky}
      baseReport={baseReport}
      digitalReport={digitalReport}
      socialHighlights={socialhighlights}
    />
    <DetailsHeader digitalReport={digitalReport} />
    <Timeline
      data={timeline}
      viewCategory={socialCategory}
      viewDuration={socialTimeInterval}
      intervalSelectionCallback={intervalSelectionCallback}
    />
    <Rank data={socialRank} /> {/* */}
  </>
);

Online.propTypes = {
  data: PropTypes.object,
  isSticky: PropTypes.bool,
};

export default Online;
