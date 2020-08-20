import React, { useState, useCallback } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import '../SignIn/SignIn.css';
import { withRouter } from 'react-router';
import app from '../../firebase/firebase';
import { useSelector } from "react-redux";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://elbrusboot.camp/">
        Elbrus
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  formNight: {
   width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    "& > *": {           
      color: 'white',
     },
     
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container:{
    minHeight: '100vh',
    
  },
}));


const SignIn = ({ history }) => {
  const magic = useSelector((state) => state.action.magic);
  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');
  const classes = useStyles();
  const handleLogIn = useCallback(
    async (event) => {
      event.preventDefault();
      
      try {
        await app.auth().signInWithEmailAndPassword(email, password);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history, email, password]
  );
 
  return (
    <>
      <Container className={classes.container} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form
            className={magic !== true ? classes.form : classes.formNight}
            onSubmit={handleLogIn}
            noValidate
            method="POST"
          >
            <TextField className={magic !== true ? classes.form : classes.formNight}
              onChange={(e) => {
                getEmail(e.target.value);
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField className={magic !== true ? classes.form : classes.formNight}
              onChange={(e) => {
                getPassword(e.target.value);
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item></Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export default withRouter(SignIn);
