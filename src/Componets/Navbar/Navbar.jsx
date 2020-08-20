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
  moon: {
    display: 'inline-block',
    width: '60px', /* ширина переключателя */
    height: '24px', /* высота переключателя */
    borderRadius: '12px', /* радиус скругления */    
    zIndex: 0,
    margin: 0,
    padding: 0,
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    transitionDuration: '300ms', /* анимация */
    background: '#434343',
    boxShadow: 'inset 0 0 10px 0 #999999', /* тень */
    
  },
  circleMoon: {
    content: "",
    height: '22px', /* высота кнопки */
    width: '22px', /* ширина кнопки */
    borderRadius: '50%', /* радиус кнопки */
    background: '#fff', /* цвет кнопки */
    top: '1px', /* положение кнопки по вертикали относительно основы */
    left: '0px', /* положение кнопки по горизонтали относительно основы */
    transitionDuration: '300ms', /* анимация */
    boxShadow: '0 0 10px 0 #999999', /* тень */
    position: 'absolute',
    zIndex: '1',
    
  },
  sun:{
    display: 'inline-block',
    width: '54px', /* ширина переключателя */
    height: '24px', /* высота переключателя */
    borderRadius: '12px', /* радиус скругления */ 
    zIndex: 0,
    margin: 0,
    padding: 0,
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    transitionDuration: '300ms', /* анимация */
    background: '#F2F2F2',
    boxShadow: 'inset 0 0 10px 0 #999999', /* тень */
    
  },
  circleSun: {
    content: "",
    height: '22px', /* высота кнопки */
    width: '22px', /* ширина кнопки */
    borderRadius: '50%', /* радиус кнопки */
    background: '#fff', /* цвет кнопки */
    top: '1px', /* положение кнопки по вертикали относительно основы */
    left: '32px', /* положение кнопки по горизонтали относительно основы */
    transitionDuration: '300ms', /* анимация */
    boxShadow: '0 0 10px 0 #999999', /* тень */
    position: 'absolute',
    zIndex: '1',

  },
  
  moonIcon:{
    position: 'absolute',
    zIndex: '2',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    boxShadow: '4px 4px 0 0 #434343',
    top: '-1px',
    left: '-1px',
    transitionDuration: '300ms',
  },
  sunIcon:{
    position: 'absolute',
    zIndex: '2',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(239,255,38,1) 0%, rgba(255,171,0,1) 100%);',
    top: '4px',
    left: '3px',
    transitionDuration: '300ms',
  }

  








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
          
          className={classes.link}
          onClick={() => {
            dispatch(thisAction());
          }}>          
            <ListItem button>
            <ListItemIcon >
              <div className={magic !== true ? classes.moon : classes.sun}>                
                <div className={magic !== true ? classes.circleMoon : classes.circleSun}>
                  <div className={magic !== true ? classes.moonIcon : classes.sunIcon}></div>
                </div>
              </div>
            </ListItemIcon>
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
          // to="/"
          className={classes.link}
          onClick={() => {
            dispatch(thisAction());
          }}>          
            <ListItem button>
            <ListItemIcon >
              <div className={magic !== true ? classes.moon : classes.sun}>                
                <div className={magic !== true ? classes.circleMoon : classes.circleSun}>
                  <div className={magic !== true ? classes.moonIcon : classes.sunIcon}></div>
                </div>
              </div>
            </ListItemIcon>
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
