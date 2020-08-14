import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 1500,
    marginLeft: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Финансы" href="/news" />
      <BottomNavigationAction label="Мировые рынки" href="/world" />
      <BottomNavigationAction label="Валютные рынки" href="/currency" />
      <BottomNavigationAction label="SP Club" href="/club" />
      <BottomNavigationAction label="Форум" href="/forum" />
      <BottomNavigationAction label="Пиф" href="/pif" />
      <BottomNavigationAction label="Приложения" href="/application" />
      <BottomNavigationAction label="Cтратегии" href="/strategy" />
      <BottomNavigationAction label="Кризис 2020" href="/crisis" />
      <BottomNavigationAction label="Вход" href="/entry" />
      <BottomNavigationAction label="Регистрация" href="/registration" />
    </BottomNavigation>
  );
}
