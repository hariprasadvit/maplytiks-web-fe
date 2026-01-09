/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Select from 'react-dropdown-select';
import Avatar from '@material-ui/core/Avatar';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import PropTypes from 'prop-types';

export default function SocialPlatformSelector(props) {
  const [selectedDonut, setSelectedDonut] = React.useState(
    props.socialsubplatform
  );
  React.useEffect(() => {
    setSelectedDonut(props.socialsubplatform);
  }, [props.socialsubplatform]);
  const [fb, setFb] = React.useState(true);
  const [twitter, setTwitter] = React.useState(true);
  const [insta, setInsta] = React.useState(true);
  const [contextFb, setContextFb] = React.useState(false);
  const [contextTwitter, setContextTwitter] = React.useState(false);
  const [contextInsta, setContextInsta] = React.useState(false);
  // const { mediaTypes } = props;
  const [filterNames, setFilterNames] = React.useState(props.mediaTypes);
  const [icon, setIcon] = React.useState();
  let [userCount, setUserCount] = React.useState(0);

  let platform;
  const handleChangeSelect = arr => {
    console.log('selected values \n', arr);
    let temp = [];
    if (arr.length > 0) {
      console.log('selected values2 \n', arr);
      temp = arr.map(d => d.id);
    }
    platform = contextFb
      ? 'fb'
      : contextTwitter
      ? 'twitter'
      : contextInsta
      ? 'insta'
      : null;
    props.iconClickValue(temp, platform);
  };

  React.useEffect(() => {
    // console.log('selectedPlatform', props.socialsubplatform, props.from);
    if (selectedDonut.length > 0) {
      console.log('selectedDonutSocial', selectedDonut);
      switch (selectedDonut[0]) {
        case 'Instagram':
          setFb(false);
          setTwitter(false);
          setInsta(true);
          break;
        case 'Facebook':
          setTwitter(false);
          setInsta(false);
          setFb(true);
          break;
        case 'Twitter':
          setInsta(false);
          setFb(false);
          setTwitter(true);
          break;
        default:
          break;
      }
    } else if (selectedDonut === 0) {
      // setInsta(true);
      // setFb(true);
      // setTwitter(true);
    }
  }, [selectedDonut]);

  React.useEffect(() => {
    setFilterNames(props.mediaTypes);
  }, [props.mediaTypes]);

  const customContentRenderer = ({ props, state, methods }) => (
    <div>
      {props.options.length > 0 ? (
        <div style={{ cursor: 'pointer' }}>
          {icon} {state.values.length} of {props.options.length} selected
        </div>
      ) : (
        <p style={{ fontSize: 12, color: 'black' }}>
          right click a platform to select{' '}
        </p>
      )}
    </div>
  );
  const customDropdownRenderer = ({ props, state, methods }) => {
    const regexp = new RegExp(state.search, 'i');
    return (
      <div>
        {props.options.length > 0 ? (
          <>
            <div className="social_SearchAndToggle">
              <div className="social_Buttons">
                {methods.areAllSelected() ? (
                  <div className="social_clear" onClick={methods.clearAll}>
                    <CheckBoxIcon />
                  </div>
                ) : (
                  <React.Fragment>
                    <div onClick={methods.selectAll}>
                      <CheckBoxOutlineBlankIcon />
                    </div>
                  </React.Fragment>
                )}
              </div>
              <input
                type="text"
                value={state.search}
                onChange={methods.setSearch}
                placeholder="Filter Pages/Handles"
              />
            </div>
            <div className="social_Items">
              {props.options
                .filter(item =>
                  regexp.test(item[props.searchBy] || item[props.labelField])
                )
                .map(option => {
                  if (!props.keepSelectedInList && methods.isSelected(option)) {
                    return null;
                  }

                  return (
                    <div
                      className="social_Item"
                      disabled={option.disabled}
                      key={option[props.valueField]}
                      onClick={
                        option.disabled ? null : () => methods.addItem(option)
                      }
                    >
                      <input
                        style={{ width: '1.5em', height: '1.5em' }}
                        type="checkbox"
                        onChange={() =>
                          option.disabled ? undefined : methods.addItem(option)
                        }
                        checked={state.values.indexOf(option) !== -1}
                      />
                      <div className="social_ItemLabel">
                        <Avatar
                          alt=""
                          src={option.img}
                          style={{ width: 30, height: 30, marginRight: 10 }}
                        />
                        {option[props.labelField]}
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        ) : null}
      </div>
    );
  };
  const callIconClick = React.useCallback((icon, iconState) => {
    if(userCount==2 || userCount==3){
      props.iconClick(icon, iconState);
    }
     
  });
  React.useEffect(() => {
    setUserCount(userCount++)
    if (fb) {
      callIconClick('fb', `fb${fb}`);
    } else callIconClick('fb', `fbfalse`);
  }, [fb]);
  React.useEffect(() => {
    setUserCount(userCount++)
    if (twitter) {
      callIconClick('twitter', `twitter${twitter}`);
    } else callIconClick('twitter', `twitterfalse`);
  }, [twitter]);
  React.useEffect(() => {
    setUserCount(userCount++)
    if (insta) {
      callIconClick('insta', `insta${insta}`);
    } else callIconClick('insta', `instafalse`);
  }, [insta]);

  return (
    <div className="social_main">
      <div className="social_filterSocial">
        <Typography style={{ color: 'black' }}> Filter Platforms </Typography>
        <FacebookIcon
          onClick={() => {
            setFb(!fb);
            props.iconClickMain('fb', `fb${!fb}`);
          }}
          onContextMenu={e => {
            e.preventDefault();
            if (fb) {
              setContextFb(true);
              setContextTwitter(false);
              setContextInsta(false);
              setIcon(
                <FacebookIcon className="social_filterSocialIcons social_fbIconClick" />
              );
              props.iconClick('fb', `fb${fb}`);
            }
            // setContext(!context);
          }}
          className={
            fb
              ? 'social_filterSocialIcons social_fbIconClick'
              : 'social_filterSocialIcons social_fbIcon'
          }
        />
        <TwitterIcon
          onClick={() => {
            setTwitter(!twitter);
            props.iconClickMain('twitter', `twitter${!twitter}`);
          }}
          onContextMenu={e => {
            e.preventDefault();
            if (twitter) {
              setContextFb(false);
              setContextTwitter(true);
              setContextInsta(false);
              setIcon(
                <TwitterIcon className="social_filterSocialIcons social_twitterIconClick" />
              );
              props.iconClick('twitter', `twitter${twitter}`);
            }
            // setContext(!context);
          }}
          className={
            twitter
              ? 'social_filterSocialIcons social_twitterIconClick'
              : 'social_filterSocialIcons social_twitterIcon'
          }
        />
        <InstagramIcon
          onClick={() => {
            setInsta(!insta);
            props.iconClickMain('insta', `insta${!insta}`);
          }}
          onContextMenu={e => {
            e.preventDefault();
            setIcon(
              <InstagramIcon className="social_filterSocialIcons social_instaIconClick" />
            );
            if (insta) {
              setContextFb(false);
              setContextTwitter(false);
              setContextInsta(true);
              props.iconClick('insta', `insta${insta}`);
            }
            // setContext(!context);
          }}
          className={
            insta
              ? 'social_filterSocialIcons social_instaIconClick'
              : 'social_filterSocialIcons social_instaIcon'
          }
        />
      </div>
      {(fb || twitter || insta) &&
      (contextFb || contextTwitter || contextInsta) ? (
        <div style={{ width: '95%', marginTop: 20 }}>
          <Select
            style={{ borderRadius: 10 }}
            placeholder="Search"
            multi
            contentRenderer={customContentRenderer}
            dropdownRenderer={customDropdownRenderer}
            options={filterNames}
            onChange={values => handleChangeSelect(values)}
            values={filterNames}
          />
        </div>
      ) : null}
    </div>
  );
}

SocialPlatformSelector.propTypes = {
  socialsubplatform: PropTypes.array,
  iconClickMain: PropTypes.func,
};
SocialPlatformSelector.defaultProps = {
  socialsubplatform: [],
  iconClickMain: () => {},
};
