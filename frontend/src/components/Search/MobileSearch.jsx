import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, InputBase } from '@material-ui/core/';
import { Search, Sliders, X } from 'react-feather';
import Filters from './Filters';
import SearchResults from './SearchResults';
import ProfileImg from '../../images/jane-doe-profile-pic.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    background: 'white',
    color: '#4F4F4F', // TODO: Change to a color inside theme.js
    top: 0,
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  searchHead: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: theme.overrides.MuiFilledInput.root.backgroundColor,
    marginRight: theme.spacing(2),
    maxWidth: '100%',
  },
  input: {
    borderRadius: 4,
    width: '100%',
  },
  cancelSearchIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  slidersIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  searchButtonIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  searchOutput: {
    width: '100%',
    backgroundColor: 'white',
    opacity: 0,
    position: 'absolute',
    left: 0,
    top: 50,
    transition: theme.transitions.create(['width', 'left', 'opacity'], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  show: {
    zIndex: 1,
    opacity: 1,
    transition: theme.transitions.create(['width', 'left', 'opacity'], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

// Filler Data with Filler Image from Unsplash
const DATA_SIZE = 4;
const fakeSearchData = { people: new Array(DATA_SIZE) };
fakeSearchData.people.fill({
  imgSrc: ProfileImg,
  name: 'Jane Doe',
  jobTitle: 'Frontend Developer',
  description: 'Contributes to 3 active projects',
  location: 'New York, USA',
});

const MobileSearch = () => {
  const classes = useStyles();
  const [isSearching, setIsSearching] = useState(false);
  const [inputText, setInputText] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  // variable used to set focus to search input upon clicking on search button
  let searchInputRef;

  const onSelect = () => {
    searchInputRef.focus();
    setIsSearching(true);
  };

  const onCancel = () => {
    setInputText('');
    setShowOutput(false);
    setIsSearching(false);
  };

  const onInputChange = (e) => {
    // show search query output if user types into search bar
    if (e.target.value === '') {
      setShowOutput(false);
    } else {
      setShowOutput(true);
    }
    setInputText(e.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={clsx(classes.container, classes.show)}>
        <div className={classes.searchHead}>
          <Grid
            container
            alignItems="center"
            alignContent="center"
            justify="space-evenly"
            variant="fill"
            className={clsx(classes.inputContainer)}
          >
            <Grid item className={classes.searchIcon}>
              <Search size={18} />
            </Grid>
            <Grid item xs={9}>
              <InputBase
                className={classes.input}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'Search...' }}
                variant="fill"
                inputRef={(input) => searchInputRef = input}
                onSelect={onSelect}
                value={inputText}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item className={classes.slidersIcon}>
              <Sliders size={18} />
            </Grid>
          </Grid>
          <div className={classes.cancelSearchIcon} onClick={onCancel}>
            {isSearching && <X size={24} />}
          </div>
        </div>
        <div className={clsx(classes.searchOutput, showOutput && classes.show)}>
          <Filters />
          <SearchResults data={fakeSearchData} />
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
