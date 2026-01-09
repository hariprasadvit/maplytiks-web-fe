import { useState, useEffect } from 'react';
import orderBy from 'lodash/orderBy';
import moment from 'moment';

const useHomePageHook = ({ getProjects, getKpiStats, projects }) => {
  const availablePlatforms = [];
  const [searchString, setSearchString] = useState('');
  const [date, setDate] = useState([new Date(), new Date()]);
  const [isDateSelected, setIsDateSelected] = useState(false);

  useEffect(() => {
    const PAYLOAD = {
      payload: {
        kpiCategory: 'KPI102',
        projectID: [],
      },
    };
    getProjects();
    getKpiStats(PAYLOAD);
  }, []);

  projects.map(x => {
    x.platforms.map(d => {
      if (
        !availablePlatforms.includes(d.platformName) &&
        d.platformName !== 'Overview'
      ) {
        availablePlatforms.push(d.platformName);
      }
      return 0;
    });
    return 0;
  });

  return {
    projects:
      projects &&
      orderBy(projects, ['orderID'], ['asc'])
        .filter(
          d =>
            d.projectName.toLowerCase().search(searchString.toLowerCase()) !==
              -1 ||
            d.industry.toLowerCase().search(searchString.toLowerCase()) !==
              -1 ||
            d.platforms
              .map(
                x =>
                  x.platformName
                    .toLowerCase()
                    .search(searchString.toLowerCase()) !== -1,
              )
              .includes(true),
        )
        .filter(d => {
          if (isDateSelected) {
            return moment()
              .range(date.start, date.end)
              .contains(moment(d.projectFromDate));
          }
          return true;
        }),
    availablePlatforms,
    searchString,
    date,
    isDateSelected,
    dateSelectionSatusCallback: status => setIsDateSelected(status),
    searchStringInputCallback: srchString => setSearchString(srchString),
    dateSelectionCallback: dateObj => setDate(dateObj),
  };
};

export default useHomePageHook;
