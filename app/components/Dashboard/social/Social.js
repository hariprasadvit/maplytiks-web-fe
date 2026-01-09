import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import Timeline from './Timeline';
import PlatformReport from './PlatformReport';
import SocialHighlights from './SocialHighlights';
import Rank from './Rank';
import DetailsHeader from './details/DetailsHeader';

ReactGA.initialize('UA-129684001-1');
ReactGA.pageview(window.location.pathname + window.location.search);
const Social = ({
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
   { baseReport  && ( <PlatformReport
      subPlatforms={subPlatformData}
      subPlatformListLoading={subPlatformLoading}
      isSticky={isSticky}
      baseReport={baseReport}
      digitalReport={digitalReport}
      socialHighlights={socialhighlights}
    />)}
   { digitalReport  && (  <DetailsHeader digitalReport={digitalReport} />)}
    { timeline  && ( <Timeline
      data={timeline}
      viewCategory={socialCategory}
      viewDuration={socialTimeInterval}
      intervalSelectionCallback={intervalSelectionCallback}
    />)}
   { socialRank && (<Rank data={socialRank} />)}
  </>
);

Social.propTypes = {
  data: PropTypes.object,
  isSticky: PropTypes.bool,
};

export default Social;
