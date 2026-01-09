/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import cloneDeep from 'lodash/cloneDeep';
import chunk from 'lodash/chunk';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiMagnify, mdiClose, mdiChevronUp } from '@mdi/js';
import OverviewImg from 'images/Holistic.png';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import loader from 'images/loader.svg';
import qs from 'query-string';

const TABS = [
  { name: 'Matches', key: 'Matches' },
  { name: 'Sponsors', key: 'Brands' },
  { name: 'Assets', key: 'Assets' },
  { name: 'Venues', key: 'Venues' },
  { name: 'Global Market', key: 'GlobalMarket' },
];

const VIEW_CATEGORY_MAP = {
  Matches: '01',
  Brands: '02',
  Assets: '03',
  Venues: '04',
  GlobalMarket: '06',
};

const REDUCER_FILTER_KEY_MAP = {
  Matches: 'visionFilters',
  Brands: 'brandsFilters',
  Assets: 'assetsFilters',
  Venues: 'venuesFilters',
  GlobalMarket: 'marketsFilters',
};

const FILTER_KEY_MAP = {
  Matches: 'visions',
  Brands: 'brands',
  Assets: 'assets',
  Venues: 'venues',
  Models: 'models',
  GlobalMarket: 'GlobalMarket',
};

const FILTER_ID_MAP = {
  Matches: 'visionID',
  Brands: 'sponsorID',
  Assets: 'assetID',
  Venues: 'venueID',
  GlobalMarket: 'marketID',
};

const TagsBox = ({ data: { header, elements }, callback }) => {
  const [isShowMore, setShowMore] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchString, setSearchString] = useState('');

  const tagsSelectCallback = (value, label, type) => {
    const tagsArr = [...selectedTags];
    if (label) {
      if (value) {
        tagsArr.push(label);
        setSelectedTags(tagsArr);
      } else {
        tagsArr.splice(tagsArr.indexOf(label), 1);
        setSelectedTags(tagsArr);
      }
    }
  };

  useEffect(() => {
    //console.log(selectedTags);
    callback(header, selectedTags);
  }, [selectedTags]);

  return (
    <div className="global-filter-countries">
      <div className="global-filter-title">Select {header}</div>
      <div className="my-projects-search">
        <span className="search-icon">
          <Icon path={mdiMagnify} size={1} />
        </span>
        <form>
          <Input
            type="text"
            placeholder="Search"
            inputClass="input-field"
            onChangeHandlerCallback={setSearchString}
            value={searchString}
          />
          <Button type="search" />
        </form>
      </div>
      <div className="form_label">
        {(!isShowMore ? elements.slice(0, 6) : elements)
          .filter(
            d =>
              String(d.name)
                .toLowerCase()
                .search(searchString.toLowerCase()) !== -1,
          )
          .map((d, i) => (
            <div className="checkbox_label">
              <Input
                type="checkbox"
                id={`${header}${d.name}${i}`}
                inputLable={d.name}
                checkBoxKey={d.name}
                checkboxLableId="checktype"
                onChangeHandlerCallback={tagsSelectCallback}
                formType={header}
              />
            </div>
          ))}
      </div>
      {elements.length > 6 && !isShowMore && (
        <div className="global-filter-more" onClick={() => setShowMore(true)}>
          See more ({elements.length - 6})
          <Icon path={mdiChevronDown} size={0.6} />
        </div>
      )}

      {isShowMore && (
        <div className="global-filter-more" onClick={() => setShowMore(false)}>
          Show less
          <Icon path={mdiChevronUp} size={0.6} />
        </div>
      )}
    </div>
  );
};

TagsBox.propTypes = {
  data: PropTypes.object,
  callback: PropTypes.func,
};

const Filter = ({
  liveMatches,
  tags,
  visionFilterCall,
  sponsorFilterCall,
  assetFilterCall,
  venuesFilterCall,
  marketFilterCall,
  closeHandler,
  applyCallback,
  mainFilter,
  filterTagsCall,
  project,
  platform,
  filters,
  appliedFilters,
  displayNameConfig,
  isShowOnlyLive,
  marketDropdownList = [],
}) => {
  //console.log("FilterEntred",liveMatches,marketDropdownList);
  const FILTER_INITIAL_STATE = {
    visions: [],
    brands: [],
    assets: [],
    venues: [],
    models: [],
  };

  const [activeTab, setActiveTab] = useState(mainFilter);
  const [filterTags, setFilterTags] = useState({});
  const [searchString, setSearchString] = useState('');
  const [activeSponsorModel, setActiveSponsorModel] = useState('');
  const [filterOrder, setFilterOrder] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    ...(cloneDeep(appliedFilters) || FILTER_INITIAL_STATE),
  });

  useEffect(() => {
    const FILTER_PAYLOAD = {
      payload: {
        projectID: project,
        platformID: platform,
        requestcategory: VIEW_CATEGORY_MAP[mainFilter],
        tags: [],
        filter: {
          visions: [],
          brands: [],
          models: [],
          assets: [],
          venues: [],
        },
      },
    };

    // //console.log(isShowOnlyLive, JSON.parse(query.liveMatches));
    const PAYLOAD = {
      payload: {
        projectID: project,
        platformID: platform,
        viewcategory: VIEW_CATEGORY_MAP[mainFilter],
        visions: isShowOnlyLive ? JSON.parse(liveMatches) : [],
      },
    };

    filterTagsCall(PAYLOAD);

    setFilterOrder([mainFilter]);

    if (mainFilter === 'Matches') visionFilterCall(FILTER_PAYLOAD);
    if (mainFilter === 'Brands') sponsorFilterCall(FILTER_PAYLOAD);
    if (mainFilter === 'Assets') assetFilterCall(FILTER_PAYLOAD);
    if (mainFilter === 'Venues') venuesFilterCall(FILTER_PAYLOAD);
    if (mainFilter === 'GlobalMarket') marketFilterCall(FILTER_PAYLOAD);
  }, []);

  const displayNameObj = Object.keys(displayNameConfig).reduce(
    // eslint-disable-next-line no-return-assign
    (obj, key) => ((obj[displayNameConfig[key]] = key), obj),
    {},
  );

  useEffect(() => {
    const PAYLOAD = {
      payload: {
        projectID: project,
        platformID: platform,
        viewcategory: VIEW_CATEGORY_MAP[activeTab],
        liveStatus: isShowOnlyLive ? 1 : 0,
        visions: isShowOnlyLive ? JSON.parse(liveMatches) : [],
      },
    };

    filterTagsCall(PAYLOAD);
  }, [activeTab]);

  useEffect(() => {}, [tags]);

  useEffect(() => {
    const tagsObjArr = [];
    Object.keys(filterTags)
      .filter(d => filterTags[d].length > 0)
      .map(d =>
        filterTags[d].map(tag => {
          tagsObjArr.push({ [d]: tag });
          return 0;
        }),
      );

    const {
      [FILTER_KEY_MAP[activeTab]]: activeTabFilter,
      ...otherFilters
    } = selectedFilters;

//    //console.log("selectedFilters...",selectedFilters)    by palani velayutham
 //console.log("otherFilters...",otherFilters) // by palani velayutham

    let visionslist=[]                    //by palani velayutham
    if(otherFilters.visions){
       visionslist=otherFilters.visions
    }

    const FILTER_PAYLOAD = {
      payload: {
        projectID: project,
        platformID: platform,
        requestcategory: VIEW_CATEGORY_MAP[activeTab],
        tags: tagsObjArr || [],
        filter: {
          [FILTER_KEY_MAP[activeTab]]: [],
          ...otherFilters,
          ...{ models: [] },
          visions: isShowOnlyLive ? JSON.parse(liveMatches) : visionslist,   //by palani velayutham
        },
      },
    };

    if (activeTab === 'Matches') visionFilterCall(FILTER_PAYLOAD);
    if (activeTab === 'Brands') sponsorFilterCall(FILTER_PAYLOAD);
    if (activeTab === 'Assets') assetFilterCall(FILTER_PAYLOAD);
    if (activeTab === 'Venues') venuesFilterCall(FILTER_PAYLOAD);
    if (activeTab === 'GlobalMarket') marketFilterCall(FILTER_PAYLOAD);
  }, [filterTags]);

  const tagSelectCallback = (header, selectedTags) => {
    const tagsObj = {
      ...filterTags,
      [header]: selectedTags,
    };
    setFilterTags(tagsObj);
  };

  const filterSelectCallback = (value, label, type) => {
    const filtersObj = { ...selectedFilters };
    if (value) {
      filtersObj[FILTER_KEY_MAP[type]].push(label);
    } else {
      filtersObj[FILTER_KEY_MAP[type]].splice(
        filtersObj[FILTER_KEY_MAP[type]].indexOf(label),
        1,
      );
    }
    setSelectedFilters(filtersObj);
  };

  const handleApply = () => {
    closeHandler(false);
    applyCallback(selectedFilters);
  };

 // console.log("filterOrder--1",selectedFilters[FILTER_KEY_MAP[activeTab]]);
  //console.log("filterOrder.",filters,FILTER_KEY_MAP[activeTab],FILTER_KEY_MAP,activeTab,FILTER_ID_MAP)
  //useEffect(() => //console.log(filterOrder), [filterOrder]);

  return (
    <div className="global-filter">
      <div className="global-filter-overlay" />
      <div className="global-filter-modal">
        <div className="global-filter-header">
          <div className="global-filter-title">
            Filter{' '}
            {
              displayNameObj[
                Object.keys(displayNameObj).filter(d => d === mainFilter)[0]
              ]
            }
          </div>
          <div
            className="global-filter-close"
            onClick={() => closeHandler(false)}
          >
            <Icon path={mdiClose} size={0.8} />
          </div>
        </div>
        <div className="global-filter-nav">
          {TABS.sort((x, y) =>
            x.key === mainFilter ? -1 : y === mainFilter ? 1 : 0,
          ).map(d => (
            <span
              disabled
              onClick={() => {
                if (
                  selectedFilters[FILTER_KEY_MAP[activeTab]] &&
                  selectedFilters[FILTER_KEY_MAP[activeTab]].length > 0 &&
                  filterOrder.length !== 1 &&
                  filterOrder.indexOf(d.key) !== -1
                ) {
                  const retunValue = window.confirm(
                    `Filters in ${activeTab} are dependent on ${
                      d.key
                    }, confirming this action will reset all the selected filters in ${activeTab}.`,
                  );

                  if (retunValue) {
                    setSelectedFilters({
                      ...selectedFilters,
                      [FILTER_KEY_MAP[activeTab]]: [],
                    });
                    const filterKeyOrder = [...filterOrder];

                    filterOrder.length > 1 &&
                      filterKeyOrder.splice(
                        filterKeyOrder.length - 1,
                        filterKeyOrder.length,
                      );

                    filterOrder.indexOf(d.key) !== -1 &&
                      setFilterOrder(filterKeyOrder);

                    setFilterTags([]);
                    setActiveTab(d.key);
                    setSearchString('');
                    setActiveSponsorModel('');
                  }
                } else {
                  const filterKeyOrder = [...filterOrder];
                  filterOrder.length > 1 &&
                    selectedFilters[FILTER_KEY_MAP[activeTab]] &&
                    selectedFilters[FILTER_KEY_MAP[activeTab]].length === 0 &&
                    filterKeyOrder.splice(
                      filterKeyOrder.length - 1,
                      filterKeyOrder.length,
                    );
                  filterOrder.indexOf(d.key) === -1 &&
                    setFilterOrder([...filterKeyOrder, d.key]);

                  setFilterTags([]);
                  setActiveTab(d.key);
                  setSearchString('');
                  setActiveSponsorModel('');
                }
              }}
              className={activeTab === d.key ? 'active' : ''}
            >
              {displayNameObj[d.key]}
            </span>
          ))}
        </div>
        <div className="global-filter-body">
          <div className="global-filter-left">
            {tags &&
              orderBy(tags, ['orderID'], ['asc']).map(d => (
                <TagsBox data={d || []} callback={tagSelectCallback} />
              ))}
          </div>
          <div className="global-filter-right">
            <div className="alert">
              Applied Filters:{' '}
              {filterOrder.map((d, i) => (
                <span>
                  {selectedFilters[FILTER_KEY_MAP[d]] &&
                    selectedFilters[FILTER_KEY_MAP[d]].length}{' '}
                  {displayNameObj[d]}{' '}
                  {i !== filterOrder.length - 1 && <span> > </span>}
                </span>
              ))}
            </div>
            <div className="global-filter-main">
              <div className="global-filter-right-header">
                <div className="global-filter-right-result">
                  Showing{' '}
                  {filters[REDUCER_FILTER_KEY_MAP[activeTab]] &&
                    filters[REDUCER_FILTER_KEY_MAP[activeTab]].length}{' '}
                  {displayNameObj[activeTab]}
                </div>
                <div className="global-filter-right-search">
                  <div className="my-projects-search">
                    <span className="search-icon">
                      <Icon path={mdiMagnify} size={1} />
                    </span>
                    <form>
                      <Input
                        type="text"
                        placeholder="Search"
                        inputClass="input-field"
                        onChangeHandlerCallback={setSearchString}
                        value={searchString}
                      />
                      <Button type="search" />
                    </form>
                  </div>
                </div>
              </div>
              <div className="global-filter-right-header">
                <div className="global-filter-right-selected">
                  {selectedFilters[FILTER_KEY_MAP[activeTab]] &&
                    selectedFilters[FILTER_KEY_MAP[activeTab]].length}{' '}
                  Selected
                </div>
              </div>
              <div className="global-filter-right-result">
                {/* <div className="global-filter-right-alphaHeader" /> */}
                <div
                  className={`form_label row${
                    activeTab === 'Brands' ? '3' : '5'
                  }`}
                >
                  {chunk(
                    filters[REDUCER_FILTER_KEY_MAP[activeTab]] &&
                      filters[REDUCER_FILTER_KEY_MAP[activeTab]].filter(
                        d =>
                          d.displayName &&
                          d.displayName
                            .toLowerCase()
                            .search(searchString.toLowerCase()) !== -1,
                      ),
                    activeTab === 'Brands' ? 3 : 5,
                  ).map((x, m) => (
                    <div className="filter-wrap">
                      {x.map((d, i) => (
                        <div className="checkbox_label">
                          <Input
                            type="checkbox"
                            id={`${activeTab}_${d.displayName}_${i}`}
                            inputLable={d.displayName}
                            checkBoxKey={d[FILTER_ID_MAP[activeTab]]}
                            checkboxLableId="checktype"
                            onChangeHandlerCallback={filterSelectCallback}
                            formType={activeTab}
                             checked={selectedFilters[
                               [FILTER_KEY_MAP[activeTab]]
                             ].includes(d[FILTER_ID_MAP[activeTab]])}
                          />
                          {activeTab === 'Brands' &&
                            d.model &&
                            d.model.length > 0 && (
                              <div
                                className="text-link text-red text-underline m-l-5"
                                onClick={() =>
                                  setActiveSponsorModel(
                                    `${activeTab}_${d.displayName}_${i}`,
                                  )
                                }
                              >
                                {activeSponsorModel ===
                                `${activeTab}_${d.displayName}_${i}`
                                  ? ''
                                  : `${d.model.length} Models`}
                              </div>
                            )}
                          <>
                            {activeTab === 'Brands' &&
                              d.model &&
                              d.model.length > 0 &&
                              activeSponsorModel ===
                                `${activeTab}_${d.displayName}_${i}` && (
                                <div className="global-filter-customize">
                                  <div className="global-filter-customize-title">
                                    Showing {d.model.length} Models for{' '}
                                    {d.displayName}
                                    <div
                                      style={{
                                        float: 'right',
                                        cursor: 'pointer',
                                        zIndex: 1000,
                                      }}
                                      onClick={e => {
                                        e.stopPropagation();
                                        setActiveSponsorModel('');
                                      }}
                                    >
                                      <Icon path={mdiClose} size={0.8} />
                                    </div>
                                  </div>
                                  <div className="global-filter-customize-options m-t-40">
                                    <div className="form_label row3 thumbnail-options">
                                      {d.model.map((model, n) => (
                                        <div className="checkbox_label">
                                          <Input
                                            type="checkbox"
                                            id={`${activeTab}_Model_${
                                              model.displayName
                                            }_${i + n}`}
                                            inputLable={model.displayName}
                                            labelImg={model.imagePath}
                                            checkboxLableId="checktype"
                                            checkBoxKey={model.modelID}
                                            onChangeHandlerCallback={(
                                              value,
                                              label,
                                              type,
                                            ) => {
                                              //console.log(d);
                                              filterSelectCallback(
                                                value,
                                                label,
                                                type,
                                              );
                                              filterSelectCallback(
                                                value,
                                                d.sponsorID,
                                                'Brands',
                                              );
                                            }}
                                            formType="Models"
                                            checked={selectedFilters.models.includes(
                                              model.modelID,
                                            )}
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                          </>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="global-filter-footer">
              {selectedFilters[FILTER_KEY_MAP[activeTab]] &&
                selectedFilters[FILTER_KEY_MAP[activeTab]].length > 0 && (
                  <div
                    className="text-link text-red m-r-15"
                    onClick={() => {
                      setSelectedFilters({
                        ...selectedFilters,
                        [FILTER_KEY_MAP[activeTab]]: [],
                      });
                    }}
                  >
                    Reset {displayNameObj[activeTab]}
                  </div>
                )}
              <div className="button button-action-default m-r-15">
                <Button
                  label="Cancel"
                  onClickHandler={() => {
                    applyCallback(appliedFilters);
                    closeHandler(false);
                  }}
                />
              </div>
              <div className="button button-action-primary">
                <Button
                  type="primary"
                  label="Apply"
                  onClickHandler={handleApply}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  tags: PropTypes.array,
  isShowOnlyLive: PropTypes.bool,
  project: PropTypes.string,
  platform: PropTypes.string,
  visionFilterCall: PropTypes.func,
  sponsorFilterCall: PropTypes.func,
  assetFilterCall: PropTypes.func,
  venuesFilterCall: PropTypes.func,
  marketFilterCall: PropTypes.func,
  closeHandler: PropTypes.func,
  applyCallback: PropTypes.func,
  filterTagsCall: PropTypes.func,
  mainFilter: PropTypes.string,
  filters: PropTypes.object,
  appliedFilters: PropTypes.object,
  displayNameConfig: PropTypes.object,
  liveMatches: PropTypes.object,
  marketDropdownList: PropTypes.array,
};
export default Filter;
