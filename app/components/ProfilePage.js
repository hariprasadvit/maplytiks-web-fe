/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useRef } from 'react';
import Icon from '@mdi/react';
import groupBy from 'lodash/groupBy';
import { mdiPencil } from '@mdi/js';
import PropTypes from 'prop-types';
import uploadLoader from 'images/uploadLoader.gif';
import HomeHeader from 'components/homePage/HomeHeader';
import HomeFooter from 'components/homePage/HomeFooter';
import formValidator from 'utils/formValidator';
import 'react-phone-number-input/style.css';
import 'react-responsive-ui/style.css';
import PhoneInput from 'react-phone-number-input/react-responsive-ui';

import Input from './common/Input';
import Button from './common/Button';

const ProfilPage = ({
  history,
  user,
  userSignOut,
  getProfile,
  profileSubmit,
  profileImageSubmit,
  profileImageDelete,
  profile: { data = {} } = {},
  uploadID: { loading: imageLoading, id } = {},
  // ...props
}) => {
  const [form, setForm] = useState({
    name: '',
    designation: '',
    contact: '',
    email: '',
    companyName: '',
    companySite: '',
    companyContact: '',
    skypeId: '',
    companyAddress: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  const PROFILE_FORM_FIELD_CONFIG = [
    {
      field: 'name',
      method: 'isEmpty',
      validWhen: false,
      message: 'Name is required.',
      section: 'top',
      inputConfig: {
        placeholder: 'Your Full Name',
        type: 'text',
        inputLable: 'Name',
        value: form.name,
      },
    },
    {
      field: 'designation',
      method: 'isEmpty',
      validWhen: false,
      message: 'Designation is required.',
      section: 'top',
      inputConfig: {
        placeholder: 'Your Designaton',
        type: 'text',
        inputLable: 'Designation',
        value: form.designation,
      },
    },
    {
      field: 'contact',
      isMobile: true,
      method: 'isEmpty',
      validWhen: false,
      message: 'Contact Number is required.',
      section: 'top',
      inputConfig: {
        placeholder: 'Contact Number',
        type: 'text',
        inputLable: 'Mobile',
        value: form.contact,
      },
    },
    {
      field: 'email',
      method: 'isEmail',
      validWhen: true,
      message: 'That is not a valid email.',
      section: 'top',
      inputConfig: {
        placeholder: 'Your Email',
        type: 'text',
        inputLable: 'Email',
        value: form.email,
      },
    },
    {
      field: 'companyName',
      method: '',
      validWhen: true,
      message: 'That is not a valid email.',
      section: 'bottom',
      inputConfig: {
        placeholder: 'Company Name',
        type: 'text',
        inputLable: 'Company Name',
        value: form.companyName,
      },
    },
    {
      field: 'companySite',
      method: 'isURL',
      validWhen: true,
      message: 'Enter valid URL.',
      section: 'bottom',
      inputConfig: {
        placeholder: 'www.maplytiks.com',
        type: 'text',
        inputLable: 'Company Website (if any)',
        value: form.companySite,
      },
    },
    {
      field: 'companyContact',
      method: '',
      isMobile: true,
      validWhen: false,
      message: 'That is not a valid email.',
      section: 'bottom',
      inputConfig: {
        placeholder: 'Contact Number',
        type: 'text',
        inputLable: 'Company Contact Number',
        value: form.companyContact,
      },
    },
    {
      field: 'skypeId',
      method: 'isEmail',
      validWhen: false,
      message: 'That is not a valid Skype ID.',
      section: 'bottom',
      inputConfig: {
        placeholder: 'Your Skype ID',
        type: 'text',
        inputLable: 'Skype ID',
        value: form.skypeId,
      },
    },
    {
      field: 'companyAddress',
      method: '',
      validWhen: true,
      message: 'That is not a valid email.',
      section: 'bottom',
      inputConfig: {
        placeholder: 'Company Address...',
        type: 'textarea',
        inputLable: 'Company Address',
        value: form.companyAddress,
      },
    },
  ];

  const PROFILE_BY_SECTIONS = groupBy(
    PROFILE_FORM_FIELD_CONFIG,
    d => d.section,
  );

  const fileUploadRef = useRef();

  const handleScroll = () => {
    // eslint-disable-next-line no-restricted-globals
    const scrollingTop = window.scrollY < screen.height - 120;
    if (scrollingTop !== isTop) {
      setIsTop(scrollingTop);
    }
  };

  const handleImageChnage = e => {
    e.preventDefault();
    const reader = new FileReader();
    const image = e.target.files[0];
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
      const PAYLOAD = new FormData();
      PAYLOAD.append('userPhoto', image);
      profileImageSubmit(PAYLOAD);
    };
    reader.readAsDataURL(image);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    getProfile();
    return () => {
      document.removeEventListener('scroll', handleScroll);
      if (!submitted && id) {
        profileImageDelete({ payload: { uploadID: id } });
      }
    };
  }, []);

  useEffect(() => {
    const {
      name,
      skype_id,
      emailID,
      designation,
      contactNumber,
      companyWebsite,
      companyName,
      companyContactNumber,
      companyAddress,
    } = data;

    setForm({
      name,
      designation,
      contact: `+${contactNumber}`,
      email: emailID,
      companyName,
      companySite: companyWebsite,
      companyContact: `+${companyContactNumber}`,
      skypeId: skype_id,
      companyAddress,
    });
  }, [data]);

  const handleProfileSubmit = () => {
    setSubmitted(true);
    const validationResult = formValidator(
      PROFILE_FORM_FIELD_CONFIG,
      form,
      'validate',
    );

    const PROFILE_PAYLOAD = {
      payload: {
        name: form.name,
        skype_id: form.skypeId,
        emailID: form.email,
        designation: form.designation,
        contactNumber: form.contact.replace(/\+/g, ''),
        companyWebsite: form.companySite,
        companyName: form.companyName,
        companyContactNumber: form.companyContact.replace(/\+/g, ''),
        companyAddress: form.companyAddress,
        ...(id && { image: id }),
      },
    };

    if (validationResult.isValid) {
      profileSubmit(PROFILE_PAYLOAD);
    }
  };

  const validation = submitted
    ? formValidator(PROFILE_FORM_FIELD_CONFIG, form, 'validate')
    : formValidator(PROFILE_FORM_FIELD_CONFIG, form, 'valid');

  return (
    <>
      <div className="analyticsWrapper profileWrapper">
        <div className="analyticsHeader">
          <HomeHeader
            user={user}
            isTop={isTop}
            history={history}
            signout={userSignOut}
            showHomeIcon
          />
        </div>
        {/* Header ends */}
        {/* Overview Starts */}
        <div className="container">
          <div className="profile-block">
            <form>
              <div className="profile-image">
                <img src={imagePreviewUrl || data.image} alt="" />
                <div
                  className="edit"
                  onClick={() => fileUploadRef.current.click()}
                >
                  <input
                    type="file"
                    name="file"
                    ref={fileUploadRef}
                    style={{ display: 'none' }}
                    onChange={e => handleImageChnage(e)}
                    accept=".jpg,.jpeg,.png"
                  />
                  <Icon path={mdiPencil} size={0.8} />
                </div>
                {imageLoading && (
                  <div className="profile-image-overlay">
                    <div style={{ margin: '26% 24%' }}>
                      <img src={uploadLoader} alt="" />
                    </div>
                  </div>
                )}
              </div>
              <div className="input-wrapper">
                {Object.keys(PROFILE_BY_SECTIONS).map(d => (
                  <div className={`input-wrapper-${d}`}>
                    {PROFILE_BY_SECTIONS[d].map(input => (
                      <div
                        className={`col-${
                          input.field === 'companyAddress' ? '10' : '5'
                        }`}
                      >
                        {!input.isMobile && (
                          <div className="input-block">
                            <Input
                              {...input.inputConfig}
                              onChangeHandlerCallback={val =>
                                setForm({ ...form, [input.field]: val })
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
                            />
                          </div>
                        )}

                        {input.isMobile && (
                          <div className="input-block">
                            <label>{input.inputConfig.inputLable}</label>
                            <PhoneInput
                              placeholder={input.inputConfig.placeholder}
                              value={input.inputConfig.value}
                              onChange={val =>
                                setForm({ ...form, [input.field]: val })
                              }
                              style={{
                                width: '200%',
                              }}
                              error={
                                validation &&
                                validation[input.field] &&
                                validation[input.field].message
                              }
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
                <div className="input-action">
                  <div className="btn__primary">
                    <Button
                      label="Save Changes"
                      onClickHandler={handleProfileSubmit}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Overview Ends */}
      </div>
      <HomeFooter history={history} />
    </>
  );
};

ProfilPage.propTypes = {
  history: PropTypes.object,
  profile: PropTypes.object,
  uploadID: PropTypes.object,
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  getProfile: PropTypes.func,
  profileSubmit: PropTypes.func,
  profileImageSubmit: PropTypes.func,
  profileImageDelete: PropTypes.func,
  userSignOut: PropTypes.func,
};

export default ProfilPage;
