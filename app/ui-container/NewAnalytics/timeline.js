import React from 'react';

import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import timelinegraph from '../../images/Timelinegraph.png';

const Timeline = () => (
  <div className="matchValuation">
    <div className="matchValuation__wrapper">
      <div className="matchValuation__top">
        <div className="matchValuation__header">
          <div>
            <h3 className="matchValuation__title">
              Timeline<span>122</span>
            </h3>
            <h5 className="matchValuation__subtitle">
              Cumulative Exposure across
            </h5>
          </div>
          <div className="matchValuation__sort">
            <div className="matchsortBy">
              <div
                className="analyticBreadCrumbs__toggle"
                style={{ marginLeft: 50 }}
              >
                <h4 className="active">Cumulative</h4>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
                <h4>pulse</h4>
              </div>
              <div className=" matchsortBy__text">
                <ul className="matchsortBy__header">
                  <li>
                    <span>Unit</span>
                    <h6>Minutes</h6>
                    <Icon path={mdiChevronDown} size={1} />
                    <ul>
                      <li className="active">Minuts</li>
                      <li className="">Seconds</li>
                      <li className="">hours</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className=" matchsortBy__text" style={{ maxWidth: 166 }}>
                <ul className="matchsortBy__header">
                  <li>
                    <span>Sort By :</span>
                    <h6>value</h6>
                    <Icon path={mdiChevronDown} size={1} />
                    <ul>
                      <li className="active">value</li>
                      <li className="">quality</li>
                      <li className="">quantity</li>
                      <li className="">Name</li>
                      <li className="">Date</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="matchValuation__graph">
          <img src={timelinegraph} alt="" />
        </div>
      </div>
      <div className="matchValuation__bottom">
        <div
          className="programs__icon"
          style={{
            marginLeft: 16,
          }}
        >
          <Icon path={mdiChevronLeft} size={1.2} />
        </div>
        <div
          className="programs__icon"
          style={{
            marginLeft: 16,
          }}
        >
          <Icon path={mdiChevronRight} size={1.2} />
        </div>
      </div>
    </div>
  </div>
);

export default Timeline;
