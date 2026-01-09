import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import matchgraph from '../../images/matchgraph.png';
const MatchValuation = ({ isSticky }) => (
  <div className={`matchValuation ${isSticky && 'sticky'}`}>
    <div className="matchValuation__wrapper">
      <div className="matchValuation__top">
        <div className="matchValuation__header">
          <div>
            <h3 className="matchValuation__title">
              Matches Exposure, Quality and Valuation<span>4</span>
            </h3>
            <h5 className="matchValuation__subtitle">
              Quality (in percentage), Quantity (in secs) and Valuation (in
              currency) across matches
            </h5>
            <div className="matchwiseQuality__checkboxWrapper">
              <div>
                <input name="quantity" type="checkbox" id="Quantity_0" />
                <label htmlFor="Quantity_0">Quantity</label>
              </div>
              <div>
                <input name="quality" type="checkbox" id="Quality_0" />
                <label htmlFor="Quality_0">Quality</label>
              </div>
              <div>
                <input name="value" type="checkbox" id="val_0" />
                <label htmlFor="val_0">Valuation</label>
              </div>
            </div>
          </div>
          <div className="matchValuation__sort">
            <div className="matchsortBy">
              <div className=" matchsortBy__text">
                <ul className="matchsortBy__header">
                  <li>
                    <span>Sort :</span>
                    <h6>Descending</h6>
                    <Icon path={mdiChevronDown} size={1} />
                    <ul>
                      <li className="active">Descending</li>
                      <li className="">Ascending</li>
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
            <div className="matchValuation__average">
              <div className="avg-sec">
                Avg
                <br /> Quantity
                <div style={{ marginLeft: 10 }}>
                  <span className="unit">HH:MM:SS</span>
                  <h2>00:48:05 </h2>
                </div>
              </div>
              <div className="avg-sec">
                Avg <br />
                Quality
                <div style={{ marginLeft: 10 }}>
                  <span className="unit">
                    <br />
                  </span>
                  <h2>55%</h2>
                </div>
              </div>
              <div className="avg-sec">
                Avg <br />
                Valuation
                <div style={{ marginLeft: 10 }}>
                  <span className="unit">
                    {' '}
                    <br />
                  </span>
                  <h2>158.88 k</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="matchValuation__graph">
          <img src={matchgraph} alt="" />
        </div>
      </div>
      <div className="matchValuation__insight">
        <h2>
          Show key insights
          <div
            className="programs__icon"
            style={{
              marginLeft: 16,
            }}
          >
            <Icon path={mdiChevronDown} size={1.2} />
          </div>
        </h2>

        <div className="matchwiseQualityContent__comments">
          <div className="SponsorsWrapperTable">
            <div className="table-container">
              <div className="table-header">
                <div className="table-data table-heading">S.No.</div>
                <div className="table-data table-heading">Date</div>
                <div className="table-data table-heading">Comment</div>
              </div>
            </div>
            <div className="table-row">
              <div className="table-data">1</div>
              <div className="table-data">9 Jul 2019</div>
              <div className="table-data">F1 Vision Status 1</div>
            </div>
            <div className="table-row">
              <div className="table-data">2</div>
              <div className="table-data">9 Jul 2019</div>
              <div className="table-data">F1 Vision Status 2</div>
            </div>
            <div className="table-row">
              <div className="table-data">3</div>
              <div className="table-data">9 Jul 2019</div>
              <div className="table-data">F1 Vision Status 3</div>
            </div>
            <div className="table-row">
              <div className="table-data">4</div>
              <div className="table-data">9 Jul 2019</div>
              <div className="table-data">F1 Vision Status 4</div>
            </div>
            <div className="table-row">
              <div className="table-data">5</div>
              <div className="table-data">9 Jul 2019</div>
              <div className="table-data">F1 Vision Status 5</div>
            </div>
            <div className="table-row">
              <div className="table-data">6</div>
              <div className="table-data">9 Jul 2019</div>
              <div className="table-data">F1 Vision Status 1</div>
            </div>
            <div className="table-row">
              <div className="table-data">7</div>
              <div className="table-data">9 Jul 2019</div>
              <div className="table-data">F1 Vision Status 2</div>
            </div>
            <div className="table-row">
              <div className="table-data">8</div>
              <div className="table-data">9 Jul 2019</div>
              <div className="table-data">F1 Vision Status 3</div>
            </div>
            <div className="table-row">
              <div className="table-data">9</div>
              <div className="table-data">9 Jul 2019</div>
              <div className="table-data">F1 Vision Status 4</div>
            </div>
            <div className="table-row">
              <div className="table-data">10</div>
              <div className="table-data">9 Jul 2019</div>
              <div className="table-data">F1 Vision Status 5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
MatchValuation.propTypes = {
  isSticky: PropTypes.bool,
};
// AnalyticBreadCrumb.propTypes = {
//   title: PropTypes.string,
//   date: PropTypes.string,
//   type: PropTypes.string,
// };
export default MatchValuation;
