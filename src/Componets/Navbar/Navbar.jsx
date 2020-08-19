import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  
  link: {
    textDecoration: 'none',
    fontFamily: [
      "Roboto", "Helvetica", "Arial", "sans-serif"
    ].join(','),
    fontSize: "1.2em",
    color: '#444444',
  },
}));

export default function SimpleBottomNavigation() {
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
   

  if (currentUser) {
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <Link to="/home" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Finance</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/world" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Global market</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/club" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Private Office</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/forum" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Forum</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/pif" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Pif</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/application" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Apps</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/strategy" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Strategies</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/crisis" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Crisis 2020</ListItemIcon>
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
            <ListItemIcon className={classes.link}>Magic</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/" className={classes.link}>
          <ListItem button onClick={() => app.auth().signOut()}>
            <ListItemIcon className={classes.link}>Log Out</ListItemIcon>
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
        className={classes.root}
      >
        <Link to="/home" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Finance</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/world" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Global market</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/currency" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Forien exchange market</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/forum" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Forum</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/pif" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Pif</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/crisis" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Crisis 2020</ListItemIcon>
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
            <ListItemIcon className={classes.link}>Magic</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/entry" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Sign In</ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/registration" className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.link}>Sign Up</ListItemIcon>
          </ListItem>
        </Link>
      </BottomNavigation>
    );
  }
}
