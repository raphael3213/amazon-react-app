import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD67OkUd_8gXf5ntXIay5uG2yQHiSJcKJQ",
    authDomain: "app-12ffc.firebaseapp.com",
    projectId: "app-12ffc",
    storageBucket: "app-12ffc.appspot.com",
    messagingSenderId: "96377413351",
    appId: "1:96377413351:web:cb540de7677a72e26ecc42",
    measurementId: "G-EHWKQ411WY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebaseApp.auth();
  export { db,auth };