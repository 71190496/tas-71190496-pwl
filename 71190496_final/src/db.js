// Conveniently import this file anywhere to use db

import 'firebase/firestore'
import { firestore, initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDynB7xzZS4OGjw1rbiIagrZVCfLsrkct8",
    authDomain: "pwl71190496.firebaseapp.com",
    projectId: "pwl71190496",
    storageBucket: "pwl71190496.appspot.com",
    messagingSenderId: "839033139996",
    appId: "1:839033139996:web:68379141efaeb435e480d9",
    measurementId: "G-MW1YPXY82T"
  };
  

  const app = initializeApp(firebaseConfig);
  export const db = firestore(app)
// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
