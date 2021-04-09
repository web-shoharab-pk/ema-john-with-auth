import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDdoaVS09yPUMvy2Wcyb9Ee4etivhnSSGE",
  authDomain: "ema-john-react-1f4d8.firebaseapp.com",
  projectId: "ema-john-react-1f4d8",
  storageBucket: "ema-john-react-1f4d8.appspot.com",
  messagingSenderId: "579150381792",
  appId: "1:579150381792:web:8d1fe4768013f53ef04685",
  measurementId: "G-7GDP6J3XWJ"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export default firebaseConfig;