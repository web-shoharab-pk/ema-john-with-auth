import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyA_W8qtqobM7iiiuXHipqBXFFQAk2ZT1Mc",
    authDomain: "emato-e9de5.firebaseapp.com",
    projectId: "emato-e9de5",
    storageBucket: "emato-e9de5.appspot.com",
    messagingSenderId: "432274765012",
    appId: "1:432274765012:web:bb80afdd10cb603b4cf741",
    measurementId: "G-GG1DEM9CHZ"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  export const auth = firebase.auth() 
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  export default firebaseConfig;