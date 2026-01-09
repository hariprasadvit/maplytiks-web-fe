import React from 'react';
import PropTypes from 'prop-types';

const Matrix = ({
  configKey,
  iterationAddOn,
  isOnlyRandomNum,
  isWhyUs,
  analyzingTextBlockIndex,
}) => {
  const BLOCK_SIZE_CONFIG = {
    whyUsOne: ['md', 'lg', 'md', 'sm', 'xs'],
    whyUsTwo: ['md', 'lg', 'md', 'sm', 'xs'],
    buildingBlocks: ['lg'],
  };
  return (
    <>
      {!isOnlyRandomNum && (
        <div
          className={`random-block random-block-text random-${analyzingTextBlockIndex}`}
        >
          analyzing...
        </div>
      )}

      {isWhyUs && (
        <div className="random-block random-block-lg random-2">
          <div className="random-sec">
            220453386475668369126874203127722456847118518118905049373063640445614984272665739406245400974402082908210402446817910019961841220966268695509083924551702897199045677643021929965748824550251725709767717047663154169322883122638800682673526663456697904317695347748041774350911325407657575706056671092101
          </div>
        </div>
      )}
      {BLOCK_SIZE_CONFIG[configKey].map((d, i) => (
        <div
          key={`Matrix_${i + iterationAddOn}`}
          className={`random-block random-block-${d} random-${i +
            iterationAddOn}`}
        >
          <div className="random-sec">
            943178237891907764804931063055397907285404663140967245691249808275432404595941480282344733914219457183702599114838537240366771868676852248551118812655246206997884238633532497817006940292075828662251551177984453536556681080348084534315649172517363893900712814825952464567444749687171469259037108266216
          </div>
        </div>
      ))}
    </>
  );
};

Matrix.defaultProps = {
  analyzingTextBlockIndex: 1,
};

Matrix.propTypes = {
  configKey: PropTypes.string,
  iterationAddOn: PropTypes.number,
  isOnlyRandomNum: PropTypes.bool,
  isWhyUs: PropTypes.bool,
  analyzingTextBlockIndex: PropTypes.number,
};

export default Matrix;
