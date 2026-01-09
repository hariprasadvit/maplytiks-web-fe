/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import spinner from 'images/spinner.gif';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import orderBy from 'lodash/orderBy';
import { mdiArrowUp, mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Slider from 'react-slick';
import {
  secToString,
  _numberToHumanReadableFormatConverter,
} from 'utils/helpers';

const settings = {
  accessibility: true,
  // dots: true,
  infinite: false,
  // centerMode: true,
  speed: 1000,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
};

const Highlights = ({ data: { data = [], loading } = {},projectDetails }) => {
  // const [isHighLightsVisible, setIsHighLightsVisible] = useState(true);
  const temp = [...orderBy(data, ['orderID'], ['asc'])];
  let slider = useRef();

  return (
    <div className="highlights">
      <div className="highlights__header">
        <div className="highlights__header-left">Project Highlights</div>
        <div className="highlights__header-right">
          <div className="rippleLight" onClick={() => slider.slickPrev()}>
            <Icon path={mdiChevronLeft} size={0.9} color="#fff" />
          </div>
          <div className="rippleLight" onClick={() => slider.slickNext()}>
            <Icon path={mdiChevronRight} size={0.9} color="#fff" />
          </div>
        </div>
      </div>
      {!loading && (
        <div className="highlights__body">
          {/* eslint-disable-next-line no-return-assign */}
          <Slider ref={c => (slider = c)} {...settings}>
            {temp.map(item => (
              <div className="highlights__grid">
                <div className="highlights__gridContent">
                  <div className="highlights__title">
                    {item.heading.split(' ')[0]}
                    <br />
                    {item.heading.split(/ (.+)/)[1]}
                  </div>
                  <div className="highlights__details">
                    <span className="highlights__status is-high">
                      <Icon path={mdiArrowUp} size={0.8} />
                    </span>
                    <div className="highlights__value">
                      {Number(item.value) &&
                      String(Math.floor(Number(item.value))).length > 3 &&
                      (item.displayUnit || item.unit) !== 'HH:MM:SS' ? (
                        <>
                          <span>
                            {
                              _numberToHumanReadableFormatConverter(
                                item.value,
                                true,
                                true,
                                {displayUnit:item.displayUnit}
                              )[0]
                            }
                          </span>
                          <span
                            style={{
                              fontSize: 17,
                            }}
                          >
                            {
                              _numberToHumanReadableFormatConverter(
                                item.value,
                                false,
                                true,
                                {displayUnit:item.displayUnit}
                              )[1]
                            }
                          </span>
                        </>
                      ) : Number(item.value) &&
                        (item.displayUnit || item.unit) === 'HH:MM:SS' ? (
                        secToString(item.value)
                      ) : (
                        item.value
                      )}
                      {(item.displayUnit || item.unit) === '%' ? (
                        // eslint-disable-next-line react/no-unescaped-entities
                        <span style={{ fontSize: 17 }}>
                          {item.displayUnit || item.unit}
                        </span>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>

                  <div className="highlights__count">
                    {(item.displayUnit || item.unit) !== '%' &&
                    (item.displayUnit || item.unit) !== '#'
                      ? item.displayUnit || item.unit
                      : ''}
                  </div>
                  {(item.heading.split(/ (.+)/)[1].length > 15 ||
                    item.value.length > 11) && (
                    <div className="highlights__tooltipWrapper">
                      <span className="highlights__tooltipWrapper__content">
                        <span className="highlightHeading">
                          {item.heading}:
                        </span>
                        <span className="highlightTitle">
                          {Number(item.value) &&
                          String(Math.floor(Number(item.value))).length > 3 &&
                          (item.displayUnit || item.unit) !== 'HH:MM:SS' ? (
                            <>
                              <span>
                                {
                                  _numberToHumanReadableFormatConverter(
                                    item.value,
                                    true,
                                    true,
                                    {displayUnit:item.displayUnit}
                                  )[0]
                                }
                              </span>{' '}
                              <span>
                                {
                                  _numberToHumanReadableFormatConverter(
                                    item.value,
                                    false,
                                    true,
                                    {displayUnit:item.displayUnit}
                                  )[1]
                                }
                              </span>
                            </>
                          ) : Number(item.value) &&
                            (item.displayUnit || item.unit) === 'HH:MM:SS' ? (
                            secToString(item.value)
                          ) : (
                            item.value
                          )}
                          {(item.displayUnit || item.unit) === '%' ? (
                            // eslint-disable-next-line react/no-unescaped-entities
                            <span>{item.displayUnit || item.unit}</span>
                          ) : (
                            ''
                          )}
                        </span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
      {loading && (
        <div
          style={{
            width: '100%',
            height: '179px',
            textAlign: 'center',
            paddingTop: '3%',
          }}
        >
          <img src={spinner} alt="" width={100} />
        </div>
      )}
    </div>
    // <div className="project-highlights container">
    //   <div
    //     className={`project-highlights-header ${
    //       isHighLightsVisible ? 'show' : ''
    //     }`}
    //   >
    //     <div className="project-highlights-header-left">Project Highlights</div>
    //     <div
    //       className="project-highlights-header-right"
    //       onClick={() => setIsHighLightsVisible(!isHighLightsVisible)}
    //     />
    //   </div>
    //   {isHighLightsVisible && (
    //     <div className="project-highlights-body">
    //       {!loading && (
    //         <Slider {...settings}>
    //           {content.map((d, i) => (
    //             <div key={`Highlights_KPI_${String(i)}`} className="">
    //               <div className="row">
    //                 {d.slice(0, 5).map(item => (
    //                   <div
    //                     key={`Highlights_KPI_${item.heading ||
    //                       item.label}_${String(i)}`}
    //                     className="col-2"
    //                   >
    //                     <div className="project-highlights-grid">
    //                       <span className="project-highlights-status is-high">
    //                         <Icon path={mdiArrowUp} size={0.8} />
    //                       </span>
    //                       <div className="project-highlights-grid-details">
    //                         <div className="project-highlights-grid-details-title">
    //                           {item.heading}
    //                         </div>
    //                         <div className="project-highlights-grid-details-count text-blue text-ms text-m">
    //                           {Number(item.value) &&
    //                           String(Math.floor(Number(item.value))).length >
    //                             3 &&
    //                           (item.displayUnit || item.unit) !== 'HH:MM:SS' ? (
    //                             <>
    //                               <span>
    //                                 {
    //                                   _numberToHumanReadableFormatConverter(
    //                                     item.value,
    //                                     true,
    //                                     true,
    //                                   )[0]
    //                                 }
    //                               </span>
    //                               <span
    //                                 style={{
    //                                   fontSize: 17,
    //                                 }}
    //                               >
    //                                 {
    //                                   _numberToHumanReadableFormatConverter(
    //                                     item.value,
    //                                     false,
    //                                     true,
    //                                   )[1]
    //                                 }
    //                               </span>
    //                             </>
    //                           ) : Number(item.value) &&
    //                             (item.displayUnit || item.unit) ===
    //                               'HH:MM:SS' ? (
    //                             secToString(item.value)
    //                           ) : (
    //                             item.value
    //                           )}
    //                           {(item.displayUnit || item.unit) === '%' ? (
    //                             // eslint-disable-next-line react/no-unescaped-entities
    //                             <span style={{ fontSize: 17 }}>
    //                               {item.displayUnit || item.unit}
    //                             </span>
    //                           ) : (
    //                             ''
    //                           )}
    //                         </div>
    //                         <div className="project-highlights-grid-details-bottom">
    //                           {(item.displayUnit || item.unit) !== '%' &&
    //                           (item.displayUnit || item.unit) !== '#'
    //                             ? item.displayUnit || item.unit
    //                             : ''}
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 ))}
    //               </div>
    //               <div className="row">
    //                 {d.slice(5, 10).map(item => (
    //                   <div
    //                     key={`Highlights_KPI_${item.heading ||
    //                       item.label}_${String(i)}`}
    //                     className="col-2"
    //                   >
    //                     <div className="project-highlights-grid">
    //                       <span className="project-highlights-status is-high">
    //                         <Icon path={mdiArrowUp} size={0.8} />
    //                       </span>
    //                       <div className="project-highlights-grid-details">
    //                         <div className="project-highlights-grid-details-title">
    //                           {item.heading}
    //                         </div>
    //                         <div className="project-highlights-grid-details-count text-m">
    //                           {Number(item.value) &&
    //                           String(Math.floor(Number(item.value))).length >
    //                             3 &&
    //                           (item.displayUnit || item.unit) !== 'HH:MM:SS' ? (
    //                             <>
    //                               <span>
    //                                 {
    //                                   _numberToHumanReadableFormatConverter(
    //                                     item.value,
    //                                     true,
    //                                     true,
    //                                   )[0]
    //                                 }
    //                               </span>
    //                               <span
    //                                 style={{
    //                                   fontSize: 17,
    //                                 }}
    //                               >
    //                                 {
    //                                   _numberToHumanReadableFormatConverter(
    //                                     item.value,
    //                                     false,
    //                                     true,
    //                                   )[1]
    //                                 }
    //                               </span>
    //                             </>
    //                           ) : Number(item.value) &&
    //                             (item.displayUnit || item.unit) ===
    //                               'HH:MM:SS' ? (
    //                             secToString(item.value)
    //                           ) : (
    //                             item.value
    //                           )}
    //                           {(item.displayUnit || item.unit) === '%' ? (
    //                             // eslint-disable-next-line react/no-unescaped-entities
    //                             <span style={{ fontSize: 17 }}>
    //                               {item.displayUnit || item.unit}
    //                             </span>
    //                           ) : (
    //                             ''
    //                           )}
    //                         </div>
    //                         <div className="project-highlights-grid-details-bottom">
    //                           {(item.displayUnit || item.unit) !== '%' &&
    //                           (item.displayUnit || item.unit) !== '#'
    //                             ? item.displayUnit || item.unit
    //                             : ''}
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           ))}
    //         </Slider>
    //       )}
    //       {loading && (
    //         <div
    //           style={{
    //             width: '100%',
    //             height: '296px',
    //             textAlign: 'center',
    //             paddingTop: '5%',
    //           }}
    //         >
    //           <img src={spinner} alt="" width={100} />
    //         </div>
    //       )}
    //     </div>
    //   )}
    // </div>
  );
};

Highlights.propTypes = {
  data: PropTypes.array,
};

export default Highlights;
