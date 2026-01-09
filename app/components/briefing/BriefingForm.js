/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import HomeHeader from 'components/homePage/HomeHeader';
import HomeFooter from 'components/homePage/HomeFooter';
import Button from 'components/common/Button';
import Input from 'components/common/Input';
import formValidator from 'utils/formValidator';
import 'react-phone-number-input/style.css';
import 'react-responsive-ui/style.css';
import PhoneInput from 'react-phone-number-input/react-responsive-ui';
import { timezones } from 'utils/timezones';
import sigLogo from 'images/sigLogo.jpg';
import cloneDeep from 'lodash/cloneDeep';

const SIDENAV_CONFIG = [
  'Client Details',
  'Project Details',
  'Scope of Work',
  'Deliverables and Comments',
  'Audit',
  'Authorized Signatory',
];

const BriefingForm = ({ history, user, userSignOut }) => {
  const [activeSidenavItem, setActiveSidenavItem] = useState('Client Details');
  const [dropDownActive, setDropdownActive] = useState({});

  // const [submitted, setSubmitted] = useState(false);
  const [submitted] = useState(false);
  const [form, setForm] = useState({
    'Client Details': {
      name: '',
      designation: '',
      contact: '',
      email: '',
      companyName: '',
    },
    'Project Details': {
      projectName: '',
      eventName: '',
      projectIndustry: '',
      projectIndustryCategory: '',
      startDate: '',
      endDate: '',
      timezone: '',
      eventScheduleUrl: '',
      projectDetailsFiles: [],
    },
    'Authorized Signatory': {
      fullName: '',
      designation: '',
      signature: sigLogo,
      term1: false,
      term2: false,
    },
    'Deliverables and Comments': {
      option: '',
      comment: '',
    },
    Audit: {
      option: '',
      comment: '',
    },
    'Scope of Work': {
      option: '',
      comment: '',
    },
  });
  const fileUploadRef = useRef();

  const PROFILE_FORM_FIELD_CONFIG = {
    'Client Details': [
      {
        field: 'name',
        lableText: 'Your Full Name',
        inputCategory: 'text',
        method: 'isEmpty',
        validWhen: false,
        message: 'Name is required.',
        inputConfig: {
          inputKey: 'name',
          placeholder: 'Your Full Name',
          type: 'text',
          value: form[activeSidenavItem].name,
        },
      },
      {
        field: 'designation',
        lableText: 'Designation',
        inputCategory: 'text',
        method: 'isEmpty',
        validWhen: false,
        message: 'Designation is required.',
        inputConfig: {
          inputKey: 'designation',
          placeholder: 'Your Designaton',
          type: 'text',
          value: form[activeSidenavItem].designation,
        },
      },
      {
        field: 'contact',
        lableText: 'Mobile Number',
        inputCategory: 'mobile',
        method: 'isEmpty',
        validWhen: false,
        message: 'Contact Number is required.',
        inputConfig: {
          inputKey: 'contact',
          placeholder: 'Contact Number',
          type: 'text',
          value: form[activeSidenavItem].contact,
        },
      },
      {
        field: 'email',
        lableText: 'Email Address',
        method: 'isEmail',
        inputCategory: 'text',
        validWhen: true,
        message: 'That is not a valid email.',
        inputConfig: {
          inputKey: 'email',
          placeholder: 'Your Email',
          type: 'text',
          value: form[activeSidenavItem].email,
        },
      },
      {
        field: 'companyName',
        lableText: 'Oraganisation Name',
        inputCategory: 'text',
        method: '',
        validWhen: true,
        message: 'That is not a valid email.',
        inputConfig: {
          inputKey: 'companyName',
          placeholder: 'Company Name',
          type: 'text',
          value: form[activeSidenavItem].companyName,
        },
      },
    ],
    'Project Details': [
      {
        field: 'projectName',
        lableText: 'Project Name',
        method: 'isEmpty',
        inputCategory: 'text',
        validWhen: false,
        message: 'Project name is required.',
        inputConfig: {
          inputKey: 'projectName',
          placeholder: 'Enter Project Name',
          type: 'text',
          value: form[activeSidenavItem].projectName,
        },
      },
      {
        field: 'eventName',
        lableText: 'Event Name',
        method: 'isEmpty',
        inputCategory: 'text',
        validWhen: false,
        message: 'Event name is required.',
        inputConfig: {
          inputKey: 'eventName',
          placeholder: 'Enter Event Name',
          type: 'text',
          value: form[activeSidenavItem].eventName,
        },
      },
      {
        field: 'projectIndustry',
        lableText: 'Project Industry',
        method: 'isEmpty',
        inputCategory: 'text',
        validWhen: false,
        message: 'Project industry is required.',
        inputConfig: {
          inputKey: 'projectIndustry',
          placeholder: 'Industry',
          type: 'select',
          value: form[activeSidenavItem].projectIndustry,
          selectDropdownActive: dropDownActive.projectIndustry,
          selectBoxOptions: ['Footbal', 'BasketBall'],
        },
      },
      {
        field: 'projectIndustryCategory',
        lableText: 'Project Industry Category',
        method: 'isEmpty',
        inputCategory: 'text',
        validWhen: false,
        message: 'Industry Category is required.',
        inputConfig: {
          inputKey: 'projectIndustryCategory',
          placeholder: 'Industry Category',
          type: 'select',
          value: form[activeSidenavItem].projectIndustryCategory,
          selectDropdownActive: dropDownActive.projectIndustryCategory,
          selectBoxOptions: ['Sports', 'Entertainment'],
        },
      },
      {
        field: 'startDate',
        lableText: 'Start Date',
        method: 'isEmpty',
        inputCategory: 'text',
        validWhen: false,
        message: 'Start date is required.',
        inputConfig: {
          type: 'date',
          placeholder: 'Start',
          inputKey: 'startDate',
          value: form[activeSidenavItem].startDate,
          selectDropdownActive: dropDownActive.startDate,
        },
      },
      {
        field: 'endDate',
        lableText: 'End Date',
        method: 'isEmpty',
        inputCategory: 'text',
        validWhen: false,
        message: 'End date is required.',
        inputConfig: {
          type: 'date',
          placeholder: 'End',
          inputKey: 'endDate',
          value: form[activeSidenavItem].endDate,
          selectDropdownActive: dropDownActive.endDate,
        },
      },
      {
        field: 'timezone',
        lableText: 'Timezone',
        method: 'isEmpty',
        inputCategory: 'text',
        validWhen: false,
        message: 'Timezone is required.',
        inputConfig: {
          type: 'select',
          placeholder: 'Timezone',
          inputKey: 'timezone',
          value: form[activeSidenavItem].timezone,
          selectDropdownActive: dropDownActive.timezone,
          selectBoxOptions: timezones,
        },
      },
      {
        field: 'eventScheduleUrl',
        lableText: 'Event Schedule URL',
        method: 'isURL',
        inputCategory: 'text',
        validWhen: true,
        message: 'Event URL is required.',
        inputConfig: {
          type: 'text',
          placeholder: 'Event Schedule URL',
          inputKey: 'eventScheduleUrl',
          value: form[activeSidenavItem].eventScheduleUrl,
          selectDropdownActive: dropDownActive.eventScheduleUrl,
        },
      },
      {
        field: 'projectDetailsFiles',
        lableText: 'Upload Event Schedule',
        inputCategory: 'file',
      },
    ],
    'Authorized Signatory': [
      {
        field: 'fullName',
        lableText: '',
        method: 'isEmpty',
        inputCategory: 'text',
        validWhen: false,
        message: 'Full name is required.',
        inputConfig: {
          inputKey: 'fullName',
          placeholder: 'Full Name',
          type: 'text',
          value: form[activeSidenavItem].fullName,
        },
      },
      {
        field: 'designation',
        lableText: '',
        method: 'isEmpty',
        inputCategory: 'text',
        validWhen: false,
        message: 'Designation is required.',
        inputConfig: {
          inputKey: 'designation',
          placeholder: 'Designation',
          type: 'text',
          value: form[activeSidenavItem].designation,
        },
      },
      {
        field: 'signature',
        lableText: 'Upload Signature ( Supported formats .DOC and .XLS )',
        inputCategory: 'file',
      },
      {
        field: 'term1',
        lableText: '',
        method: '',
        inputCategory: 'checkbox',
        inputConfig: {
          type: 'checkbox',
          id: 'term1',
          inputLable: 'I agree to the terms and conditions of Maplytiks',
          checkboxLableId: 'term1',
          checkBoxKey: 'term1',
        },
      },
      {
        field: 'term2',
        lableText: '',
        method: '',
        inputCategory: 'checkbox',
        inputConfig: {
          type: 'checkbox',
          id: 'term2',
          inputLable:
            'I have read and approved the content on the briefing document and commission the project',
          checkboxLableId: 'term2',
          checkBoxKey: 'term2',
        },
      },
    ],
    'Deliverables and Comments': [
      {
        field: 'term2',
        method: 'isEmpty',
        validWhen: false,
        inputCategory: 'text',
        inputConfig: {
          type: 'textarea',
          placeholder: 'Enter Your Comment...',
          value: form['Deliverables and Comments'].comment,
        },
      },
    ],
    'Scope of Work': [],
    Audit: [],
  };

  const handleFileChnage = (e, key) => {
    e.preventDefault();
    const reader = new FileReader();
    const image = e.target.files[0];
    reader.onloadend = () => {
      setForm({
        ...form,
        [activeSidenavItem]: {
          ...form[activeSidenavItem],
          [key]: reader.result,
        },
      });
      // const PAYLOAD = new FormData();
      // PAYLOAD.append('userPhoto', image);
      // profileImageSubmit(PAYLOAD);
    };
    reader.readAsDataURL(image);
  };

  const handleCheckboxChnage = (val, key) => {
    const formCopy = cloneDeep(form);
    setForm({
      ...formCopy,
      [activeSidenavItem]: {
        ...formCopy[activeSidenavItem],
        [key]: val,
      },
    });
  };

  const validation = submitted
    ? formValidator(
        PROFILE_FORM_FIELD_CONFIG[activeSidenavItem],
        form[activeSidenavItem],
        'validate',
      )
    : formValidator(
        PROFILE_FORM_FIELD_CONFIG[activeSidenavItem],
        form[activeSidenavItem],
        'valid',
      );

  return (
    <div className="Brief-wrapper">
      {/* Header Starts */}
      <HomeHeader
        user={user}
        isTop={false}
        applySticky={false}
        history={history}
        signout={userSignOut}
        showHomeIcon
      />
      {/* Header ends */}

      <div className="ContentHeader">
        <div className="ContentHeaderDetails">
          <div className="briefHeader">Project Brief</div>
          {activeSidenavItem === 'Audit' && (
            <Button
              type="primary"
              customStyle={{
                boxShadow: 'none',
                position: 'relative',
                top: '-45px',
                left: '356px',
              }}
              label="Add Audit"
            />
          )}
          {/* <div className="ContentHeader__date">10th Aug 2019</div> */}
        </div>
      </div>

      <div className="briefContainer">
        <Sidenav
          activeItem={activeSidenavItem}
          callback={setActiveSidenavItem}
        />

        <div>
          <div>
            <div>
              <div className="containerForm">
                {(activeSidenavItem === 'Client Details' ||
                  activeSidenavItem === 'Project Details') && (
                  <div className="clientBriefForm">
                    {PROFILE_FORM_FIELD_CONFIG[activeSidenavItem].map(input =>
                      input.inputCategory !== 'file' ? (
                        <div className="inputForm">
                          <div className="inputForm__Header">
                            {input.lableText}
                          </div>
                          <div className="inputForm__bar">
                            {input.inputCategory === 'text' && (
                              <Input
                                {...input.inputConfig}
                                onChangeHandlerCallback={val =>
                                  setForm({
                                    ...form,
                                    [activeSidenavItem]: {
                                      ...form[activeSidenavItem],
                                      [input.field]: val,
                                    },
                                  })
                                }
                                isError={
                                  validation &&
                                  validation[input.field] &&
                                  validation[input.field].isInvalid
                                }
                                errorMsg={
                                  validation &&
                                  validation[input.field] &&
                                  validation[input.field].message
                                }
                                selectboxClickHandler={setDropdownActive}
                              />
                            )}
                            {input.inputCategory === 'mobile' && (
                              <PhoneInput
                                placeholder={input.inputConfig.placeholder}
                                value={input.inputConfig.value}
                                onChange={val =>
                                  setForm({ ...form, [input.field]: val })
                                }
                                style={{
                                  width: '103%',
                                }}
                                error={
                                  validation &&
                                  validation[input.field] &&
                                  validation[input.field].message
                                }
                              />
                            )}
                          </div>
                        </div>
                      ) : (
                        <div
                          className=""
                          style={{
                            position: 'relative',
                            width: '100%',
                          }}
                        >
                          <div className="attachLinkHeader">
                            {input.lableText}
                          </div>
                          <a
                            onClick={() => fileUploadRef.current.click()}
                            className="attachLink"
                          >
                            + Attach files only converted through Maplytiks FTP
                            Link (.mp4 or .avi formats only, Max size 2MB)
                          </a>
                          <input
                            type="file"
                            ref={fileUploadRef}
                            style={{ display: 'none' }}
                            // onChange={e => handleImageChnage(e)}
                            accept=".mp4,.avi"
                          />
                        </div>
                      ),
                    )}
                  </div>
                )}
                {activeSidenavItem === 'Authorized Signatory' && (
                  <div className="signatoryContainer">
                    <div className="signatoryContent">
                      <div className="signatoryContent__details">
                        <div className="signatoryContent__InputWrapper">
                          <h5>Enter signatory Details</h5>

                          {PROFILE_FORM_FIELD_CONFIG[activeSidenavItem]
                            .filter(
                              d =>
                                d.inputCategory !== 'file' &&
                                d.inputCategory === 'text',
                            )
                            .map(input => (
                              <Input
                                {...input.inputConfig}
                                onChangeHandlerCallback={val =>
                                  setForm({
                                    ...form,
                                    [activeSidenavItem]: {
                                      ...form[activeSidenavItem],
                                      [input.field]: val,
                                    },
                                  })
                                }
                                isError={
                                  validation &&
                                  validation[input.field] &&
                                  validation[input.field].isInvalid
                                }
                                errorMsg={
                                  validation &&
                                  validation[input.field] &&
                                  validation[input.field].message
                                }
                                selectboxClickHandler={setDropdownActive}
                              />
                            ))}
                        </div>
                        <div className="optionalWrapper">
                          <h5>Optional</h5>
                          <h5 className="SignatureHyperLink">
                            {PROFILE_FORM_FIELD_CONFIG[activeSidenavItem]
                              .filter(d => d.inputCategory === 'file')
                              .map(input => (
                                <>
                                  <a
                                    onClick={() =>
                                      fileUploadRef.current.click()
                                    }
                                    className="attachLink"
                                  >
                                    + Upload Signature ( Supported formats .DOC
                                    and .XLS )
                                  </a>
                                  <input
                                    type="file"
                                    ref={fileUploadRef}
                                    style={{ display: 'none' }}
                                    onChange={e =>
                                      handleFileChnage(e, input.field)
                                    }
                                    accept=".jpg,.jpeg,.png"
                                  />
                                </>
                              ))}
                          </h5>
                          <div className="TCWrapper">
                            {PROFILE_FORM_FIELD_CONFIG[activeSidenavItem]
                              .filter(d => d.inputCategory === 'checkbox')
                              .map(input => (
                                <div className="TCWrapper__checkbox">
                                  <Input
                                    {...input.inputConfig}
                                    onChangeHandlerCallback={val =>
                                      handleCheckboxChnage(val, input.field)
                                    }
                                  />
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div className="signatoryProfile">
                        <div className="signatoryProfileImg">
                          <img src={form[activeSidenavItem].signature} alt="" />
                        </div>

                        <h4>{form[activeSidenavItem].designation}</h4>
                        <h6>{moment().format('DD MMM YYYY')}</h6>
                      </div>
                    </div>
                  </div>
                )}
                {activeSidenavItem === 'Deliverables and Comments' && (
                  <div className="brandsContainer">
                    <div className="BrandsContent">
                      <div className="BrandsContent__Header">
                        <h3>Brands</h3>
                      </div>
                      <div className="BrandsContentOptions">
                        <div className="BrandsContent__Details">
                          <span>Select an Option</span>
                          <div className="brandOption">
                            <div className="brandOption__checkbox">
                              <Input
                                type="checkbox"
                                id="All Brands, All Assets"
                                inputLable="All Brands, All Assets"
                                checkboxLableId="All Brands, All Assets"
                                checkBoxKey="All Brands, All Assets"
                                checked={
                                  form['Deliverables and Comments'].option !==
                                  'All Brands, All Assets'
                                }
                                onChangeHandlerCallback={() =>
                                  setForm({
                                    ...form,
                                    [activeSidenavItem]: {
                                      ...form[activeSidenavItem],
                                      option: 'All Brands, All Assets',
                                    },
                                  })
                                }
                              />
                            </div>
                            <div className="brandOption__checkbox">
                              <Input
                                type="checkbox"
                                id="All Brands, Specific Assets"
                                inputLable="All Brands, Specific Assets"
                                checkboxLableId="All Brands, Specific Assets"
                                checkBoxKey="All Brands, Specific Assets"
                                checked={
                                  form['Deliverables and Comments'].option !==
                                  'All Brands, Specific Assets'
                                }
                                onChangeHandlerCallback={() =>
                                  setForm({
                                    ...form,
                                    [activeSidenavItem]: {
                                      ...form[activeSidenavItem],
                                      option: 'All Brands, Specific Assets',
                                    },
                                  })
                                }
                              />
                            </div>
                            <div className="brandOption__checkbox">
                              <Input
                                type="checkbox"
                                id="Specific Brands, SpecificAssets"
                                inputLable="Specific Brands, SpecificAssets"
                                checkboxLableId="Specific Brands, SpecificAssets"
                                checkBoxKey="Specific Brands, SpecificAssets"
                                checked={
                                  form['Deliverables and Comments'].option !==
                                  'Specific Brands, SpecificAssets'
                                }
                                onChangeHandlerCallback={() =>
                                  setForm({
                                    ...form,
                                    [activeSidenavItem]: {
                                      ...form[activeSidenavItem],
                                      option: 'Specific Brands, SpecificAssets',
                                    },
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="BrandsContent__text">
                          <h5>Enter comments if any</h5>
                          <Input
                            {...PROFILE_FORM_FIELD_CONFIG[
                              'Deliverables and Comments'
                            ][0].inputConfig}
                            onChangeHandlerCallback={val =>
                              setForm({
                                ...form,
                                [activeSidenavItem]: {
                                  ...form[activeSidenavItem],
                                  comment: val,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSidenavItem === 'Audit' && (
                  <div className="auditWrapper">
                    <ul>
                      <li className="audit">
                        <h4>1</h4>
                        <div className="audit__Content">
                          <div className="audit__Details">
                            <div className="audit__Item">
                              <h6>Manual Action Performed</h6>
                              <h5>Platform changes under scope of …</h5>
                            </div>
                            <div className="audit__Item">
                              <h6>Manual Action Performed</h6>
                              <h5>12-03-19 7:30pm</h5>
                            </div>
                            <div className="audit__Item">
                              <h6>Action Owner</h6>
                              <h5>Jon Hopkins</h5>
                            </div>
                          </div>
                          <div className="auditBtn">
                            <span>Delete</span>
                            <span>Edit</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}

                {activeSidenavItem === 'Scope of Work' && <div>Under Dev</div>}
              </div>
            </div>

            <div className="briefFormBtn">
              <Button
                type="primary"
                label="Cancel"
                customStyle={{
                  border: '1px solid #d8d9db',
                  background: '#fff',
                  color: ' #3d3d3d',
                  boxShadow: 'none',
                  marginRight: '20px',
                }}
                // onClickHandler={() => history.push('/')}
              />
              <Button
                type="primary"
                customStyle={{
                  boxShadow: 'none',
                }}
                label={
                  activeSidenavItem !== 'Authorized Signatory'
                    ? 'Proceed'
                    : 'Submit'
                }
                // onClickHandler={onSubmitHandler}
              />
            </div>
          </div>
        </div>
      </div>
      <HomeFooter history={history} />
    </div>
  );
};

BriefingForm.propTypes = {
  history: PropTypes.object,
  user: PropTypes.object,
  userSignOut: PropTypes.func,
};

export default BriefingForm;

const Sidenav = ({ activeItem, callback }) => (
  <div className="briefList">
    <ul>
      {SIDENAV_CONFIG.map(d => (
        <li
          className={activeItem === d ? 'active' : ''}
          key={d}
          onClick={() => callback(d)}
        >
          {d}
        </li>
      ))}
    </ul>
  </div>
);

Sidenav.propTypes = {
  activeItem: PropTypes.string,
  callback: PropTypes.func,
};
