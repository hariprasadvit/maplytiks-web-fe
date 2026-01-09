import React from 'react';
// import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import {
  mdiMagnify,
  mdiChevronDown,
  mdiCalendar,
  mdiArrowRight,
} from '@mdi/js';
import Input from 'components/common/Input';
// import Button from 'components/common/Button';
import DateRangePicker from 'react-daterange-picker';
import programLogo1 from '../../images/formula.jpg';
import programLogo2 from '../../images/fifa.png';

import Programs from './MyPrograms';

const MyProjects = () => (
  <div className="myProjects">
    <div className="myProjects__header">
      <div className="myProjects__title">My Projects</div>
      <div className="myProjects__bottom">
        <div className="myProjects__search">
          <span className="search-icon">
            <Icon path={mdiMagnify} size={1} />
          </span>
          <div className="myProjects__input">
            <Input
              type="text"
              placeholder="Search your project ....."
              inputClass="search"
              className="myProjects__inputBox"
              // onChangeHandlerCallback={searchStringInputCallback}
              // value={searchString}
            />
            <span className="search-icon">
              <Icon
                path={mdiChevronDown}
                size={1}
                color="rgba(192,192,192,1)"
              />
            </span>
          </div>
        </div>
        <div className="myProjects__date-range">
          <span className="daterange__icon ripple">
            <Icon path={mdiCalendar} size={1} color="#fff" />
          </span>
          <div className="daterange__block">
            <div className="daterange__sec">
              <div className="daterange__label">From</div>
              <div className="daterange__input" />
            </div>
            <Icon path={mdiArrowRight} size={0.8} />
            <div className="daterange__sec">
              <div className="daterange__label">To</div>
              <div className="daterange__input" />
            </div>
          </div>
          <div className="daterange__dropdown">
            <span className="daterange__select">
              <Icon path={mdiChevronDown} size={1} />
            </span>
            <DateRangePicker
              // onSelect={da => {
              //   dateSelectionCallback(da);
              //   dateSelectionSatusCallback(true);
              //   setIsDatePickerActive(false);
              // }}
              // value={date}
              numberOfCalendars={2}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="myProjects__body">
      <Programs
        programLogo={programLogo1}
        programTitle="Formula 1 Spain 2019"
        programDesc="Formula 1 Gran Premio De Espana Emirates 2019"
        startDate="10 Aug 2019"
        endDate="15 Sep 2019"
        startMonth="Start date"
        endMonth="End date"
        sports="#sports"
        type="formula"
      />
      <Programs
        programLogo={programLogo2}
        programTitle="2018 FIFA World Cup Russia ™"
        programDesc="Formula 1 Gran Premio De Espana Emirates 2019"
        startDate="10 Aug 2019"
        endDate="15 Sep 2019"
        startMonth="Start date"
        endMonth="End date"
        entertainment="#entertainment"
        type="fifa"
      />

      <Programs
        programLogo={programLogo1}
        programTitle="NBA Finals 2019"
        programDesc="Formula 1 Gran Premio De Espana Emirates 2019"
        startDate="10 Aug 2019"
        endDate="15 Sep 2019"
        startMonth="Start date"
        endMonth="End date"
        sports="#sports"
      />
      <Programs
        programLogo={programLogo2}
        programTitle="FIH Pro League"
        programDesc="Formula 1 Gran Premio De Espana Emirates 2019"
        startDate="10 Aug 2019"
        endDate="15 Sep 2019"
        startMonth="Start date"
        endMonth="End date"
        sports="#sports"
      />
      <Programs
        programLogo={programLogo2}
        programTitle="2018 FIFA World Cup Russia ™"
        programDesc="Formula 1 Gran Premio De Espana Emirates 2019"
        startDate="10 Aug 2019"
        endDate="15 Sep 2019"
        startMonth="Start date"
        endMonth="End date"
        sports="#sports"
      />
    </div>
  </div>
);

export default MyProjects;
