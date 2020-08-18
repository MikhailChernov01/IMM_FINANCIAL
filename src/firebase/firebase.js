import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

let firebaseConfig = {
  apiKey: 'AIzaSyBt2r2Ip_Iixnp85uFIMqPPaLw-EABkKik',
  authDomain: 'holodos-31865.firebaseapp.com',
  databaseURL: 'https://holodos-31865.firebaseio.com',
  projectId: 'holodos-31865',
  storageBucket: 'holodos-31865.appspot.com',
  messagingSenderId: '439325871245',
  appId: '1:439325871245:web:61e752b54ed35b8e88e6c4',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
