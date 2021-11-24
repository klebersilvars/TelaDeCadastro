import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCcOiFuPSg0CoNpQfC7cwHL-09BJSMqJsE",
    authDomain: "meuapp-262e3.firebaseapp.com",
    databaseURL: "https://meuapp-262e3-default-rtdb.firebaseio.com",
    projectId: "meuapp-262e3",
    storageBucket: "meuapp-262e3.appspot.com",
    messagingSenderId: "859928480599",
    appId: "1:859928480599:web:56bd1e3bac189e874e0c12",
    measurementId: "G-8PME77SRBD"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  export default firebase