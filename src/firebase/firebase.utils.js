import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCU52eB-blER5RGS7pK3Jj9UPWyuamqV1E",
    authDomain: "sirket-site.firebaseapp.com",
    databaseURL: "https://sirket-site.firebaseio.com",
    projectId: "sirket-site",
    storageBucket: "sirket-site.appspot.com",
    messagingSenderId: "265931665745",
    appId: "1:265931665745:web:b961f08dab8237c1016370",
    measurementId: "G-XEP3TCG2WL"
  };
    firebase.initializeApp(firebaseConfig);
    export const firestore = firebase.firestore();

    