import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { BottomNavigation, ListItem, ListItemIcon } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { thisAction } from '../redux/action';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth';
import app from '../../firebase/firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: '15px',
    backgroundColor: '#EEEEEE'
  },
  magicNav: {
    width: '100%',
    paddingTop: '15px',
    backgroundColor: '#414141',
    },
  
  link: {
    textDecoration: 'none',
    fontFamily: [
      "Roboto", "Helvetica", "Arial", "sans-serif"
    ].join(','),
    fontSize: "1.2em",
    color: '#444444',
  },
  linkNight: {
    textDecoration: 'none',
    fontFamily: [
      "Roboto", "Helvetica", "Arial", "sans-serif"
    ].join(','),
    fontSize: "1.2em",
    color: 'white',
  },
}));

export default function SimpleBottomNavigation() {
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const magic = useSelector((state) => state.action.magic);
  
   


  if (currentUser) {
    return (
      
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={magic !== true ? classes.root : classes.magicNav}
      >
       
        <Link to="/home" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Finance</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/world" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Global market</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/club" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Private Office</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/forum" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Forum</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/application" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Apps</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/strategy" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Strategies</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/crisis" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Crisis 2020</ListItemIcon>
          </ListItem>
        </Link>
        <Link
          to="/"
          className={classes.link}
          onClick={() => {
            dispatch(thisAction());
          }}
        >
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Magic</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/" className={classes.link}>
          <ListItem button onClick={() => app.auth().signOut()}>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Log Out</ListItemIcon>
          </ListItem>
        </Link>
      </BottomNavigation>
    );
  } else {
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={magic !== true ? classes.root : classes.magicNav}
      >
        <Link to="/home" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Finance</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/world" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Global market</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/currency" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Forien exchange market</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/forum" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Forum</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/crisis" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Crisis 2020</ListItemIcon>
          </ListItem>
        </Link>
        <Link
          to="/"
          className={classes.link}
          onClick={() => {
            dispatch(thisAction());
          }}
        >
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Magic</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/entry" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Sign In</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/registration" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={magic !== true ? classes.link : classes.linkNight}>Sign Up</ListItemIcon>
          </ListItem>
        </Link>
      </BottomNavigation>
    );
  }
}
