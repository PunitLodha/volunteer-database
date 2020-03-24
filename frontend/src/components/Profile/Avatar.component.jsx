import React, { Fragment } from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'grid',
    gridTemplateAreas: 'avatar description break social-btn',
    gridTemplateColumns: '0.2fr 0.4fr 0.2fr 0.5fr'
  },
  avatar: {
    justifySelf: 'start',
    paddingLeft: '8rem'
  },
  avatarTitle: {
    textAlign: 'left',
    paddingLeft: '1rem'
  },
  sm: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  md: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  lg: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  xl: {
    width: theme.spacing(18),
    height: theme.spacing(18)
  }
}));

function AccountProfile({
  profileName,
  accountImg,
  role,
  description,
  state,
  country
}) {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <div className={classes.avatar}>
        <Avatar src={accountImg} className={classes.xl} />
      </div>
      <div className={classes.avatarTitle}>
        <h1>
          {profileName}{' '}
          <span
            style={{ fontSize: '1rem', color: '#C0C0C0', fontFamily: 'italic' }}
          >
            {role}
          </span>
        </h1>
        <p>
          {' '}
          <strong>{description}</strong>
        </p>

        <p>
          <PinDropIcon
            className={classes.sm}
            style={{ color: '#006772', marginLeft: '-5px' }}
          />
          {state} {country}
        </p>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
export default AccountProfile;
