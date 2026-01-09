import React from 'react';
import PropTypes from 'prop-types';

import projectBrief from 'images/project-brief.png';
import acquire from 'images/process-acquire.png';
import train from 'images/process-train.png';
import report from 'images/process-report.png';
import validate from 'images/process-validate.png';
import inference from 'images/process-inference.png';

import { animated, useTrail, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';

const PROCESS_FIRST_ROW_DATA = [
  {
    title: '01 Project Brief',
    img: projectBrief,
    content:
      'Collaborate with Client to determine the precise brief for each project',
    key: 'projectBrief',
  },
  {
    title: '02 Acquire',
    img: acquire,
    content:
      'Procure requisite broadcast content to analyze brand presence on-screen',
    key: 'acquire',
  },
  {
    title: '03 Train',
    img: train,
    content:
      'Deploy Deep Learning and train each brand model on the cloud and customized data center',
    key: 'train',
  },
];

const PROCESS_SECOND_ROW_DATA = [
  {
    title: '06 Report',
    img: report,
    content:
      'Decision making tools for Clients to make proactive & optimal sponsorship decisions',
    key: 'report',
  },
  {
    title: '05 Validate',
    img: validate,
    content:
      'Execute Quality Control protocol across all execution steps for authenticity',
    key: 'validate',
  },
  {
    title: '04 Inference',
    img: inference,
    content:
      'Analyze quality of brand exposure for each frame through Deep Learning Convolution Neural Network',
    key: 'inference',
  },
];

const Process = () => {
  const viewPortWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0,
  );

  const [processTransitionR1, setR1] = useTrail(
    PROCESS_FIRST_ROW_DATA.length,
    () => ({
      config: config.molasses,
      opacity: 0,
    }),
  );

  const [processTransitionR2, setR2] = useTrail(
    PROCESS_SECOND_ROW_DATA.length,
    () => ({
      config: config.wobbly,
      opacity: 0,
    }),
  );

  const processSecondRowData =
    viewPortWidth >= 768
      ? PROCESS_SECOND_ROW_DATA
      : PROCESS_SECOND_ROW_DATA.reverse();

  return (
    <Waypoint
      onEnter={() => {
        setR1({ opacity: 1 });
        setTimeout(() => {
          setR2({ opacity: 1 });
        }, 1000);
      }}
    >
      <div className="" id="works">
        <div className="container">
          <div className="third-block-title">
            Streamlined process with focus on accuracy, efficiency and customer
            experience
          </div>
          <div className="process-block">
            <div className="process-row">
              {processTransitionR1.map((styleProps, index) => {
                const d = PROCESS_FIRST_ROW_DATA[index];
                return (
                  <ProcessCard
                    key={d.key}
                    styles={styleProps}
                    title={d.title}
                    img={d.img}
                    content={d.content}
                  />
                );
              })}
            </div>
            <div className="process-row">
              {processTransitionR2.map((styleProps, index) => {
                const d = processSecondRowData[index];
                return (
                  <ProcessCard
                    key={d.key}
                    styles={styleProps}
                    title={d.title}
                    img={d.img}
                    content={d.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Waypoint>
  );
};

export default Process;

const ProcessCard = ({ title, styles, img, content }) => (
  <animated.div style={styles} className="process-grid">
    <div className="process-title">{title}</div>
    <div className="process-icon">
      <img src={img} alt="" />
    </div>
    <div className="process-content">{content}</div>
  </animated.div>
);

ProcessCard.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.object,
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
