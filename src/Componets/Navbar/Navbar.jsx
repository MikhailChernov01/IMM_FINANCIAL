import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, ListItem, ListItemIcon } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { thisAction } from "../redux/action";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1500,
  },
  link: {
    textDecoration: "none",
    fontFamily: "serif",
    color: "#457b9d",
  },
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link to="/news" className={classes.link}>
        <ListItem button>
          <ListItemIcon className={classes.link}>Финансы</ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/world" className={classes.link}>
        <ListItem button>
          <ListItemIcon className={classes.link}>Мировые рынки</ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/currency" className={classes.link}>
        <ListItem button>
          <ListItemIcon className={classes.link}>Валютные рынки</ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/club" className={classes.link}>
        <ListItem button>
          <ListItemIcon className={classes.link}>SP Club</ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/forum" className={classes.link}>
        <ListItem button>
          <ListItemIcon className={classes.link}>Форум</ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/pif" className={classes.link}>
        <ListItem button>
          <ListItemIcon className={classes.link}>Пиф</ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/application" className={classes.link}>
        <ListItem button>
          <ListItemIcon className={classes.link}>Приложения</ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/strategy" className={classes.link}>
        <ListItem button>
          <ListItemIcon className={classes.link}>Cтратегии</ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/crisis" className={classes.link}>
        <ListItem button>
          <ListItemIcon className={classes.link}>Кризис 2020</ListItemIcon>
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
          <ListItemIcon className={classes.link}>Магия</ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/entry" className={classes.link}>
        <ListItem button>
          <ListItemIcon className={classes.link}>Вход</ListItemIcon>
        </ListItem>
      </Link>
      <Link to="/registration" className={classes.link}>
        <ListItem button>
          <ListItemIcon className={classes.link}>Регистрация</ListItemIcon>
        </ListItem>
      </Link>
    </BottomNavigation>
  );
}