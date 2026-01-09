/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

const Insight = ({
  data,
  //  insightTitle
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className="matchValuation__insight">
      <h2 onClick={() => setActive(status => !status)}>
        {active ? 'Hide' : 'Show'} key insights
        <div
          className="programs__icon"
          style={{
            marginLeft: 16,
          }}
        >
          <Icon path={active ? mdiChevronUp : mdiChevronDown} size={1.2} />
        </div>
      </h2>

      <div
        className={`matchwiseQualityContent__comments ${
          active ? 'active' : ''
        }`}
      >
        <div className="SponsorsWrapperTable">
          <div className="table-container">
            <div className="table-header">
              <div className="table-data table-heading">S.No.</div>
              <div className="table-data table-heading">Date</div>
              <div className="table-data table-heading">Comment</div>
            </div>
          </div>
          {data.map(
            (d, i) =>
              d.viewStatus && (
                <div className="table-row">
                  <div className="table-data">{i + 1}</div>
                  <div className="table-data">
                    {`${new Date(d.timestamp).getDate()} ${new Date(
                      d.timestamp,
                    ).getShortMonthName()} ${new Date(
                      d.timestamp,
                    ).getFullYear()}`}
                  </div>
                  <div className="table-data">{d.comments}</div>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

Insight.propTypes = {
  data: PropTypes.array,
  // insightTitle: PropTypes.string,
};

export default Insight;
