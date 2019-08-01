import firebase from "firebase/app"
import "firebase/database"

const config = {
  apiKey: "AIzaSyCB3_REUJoeINY9xJnIJMjOHk-ohy3s_DQ",
  authDomain: "luis-rodriguez-resume.firebaseapp.com",
  databaseURL: "https://luis-rodriguez-resume.firebaseio.com",
  projectId: "luis-rodriguez-resume",
  storageBucket: "luis-rodriguez-resume.appspot.com",
  messagingSenderId: "702503775582",
  appId: "1:702503775582:web:e81d99fcf28f1b44",
}

firebase.initializeApp(config)
firebase.database()

export default Firebase
