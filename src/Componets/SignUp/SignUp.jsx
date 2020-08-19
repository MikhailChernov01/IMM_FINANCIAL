import React, { useCallback, useContext } from 'react';
import { AuthContext } from '../../Auth';
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
import { useInputs } from './useInputs';
import { withRouter } from 'react-router';
import app from '../../firebase/firebase';
import { firestore } from 'firebase';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const SignUp = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  const [input, getInformation] = useInputs({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const classes = useStyles();
  const { email, password, firstName, lastName } = input;
  const handleSignUp = useCallback(
    async (event) => {
      const db = firestore();
      event.preventDefault();
      try {
        await app.auth().createUserWithEmailAndPassword(email, password);
        const current = app.auth().currentUser;
        const nameInfo = `${firstName} ${lastName}`;
        current.updateProfile({
          displayName: nameInfo,
        });
        db.collection('Users').add({
          firstName: firstName,
          lastName: lastName,
          created: new Date(),
        });
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history, email, password]
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSignUp}
          noValidate
          method="POST"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={getInformation}
                value={input.firstName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={getInformation}
                value={input.lastName}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={getInformation}
                value={input.email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={getInformation}
                value={input.password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item></Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default withRouter(SignUp);
