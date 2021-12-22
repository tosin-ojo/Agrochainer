import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZgAUPI4H3uebSvG4eXa0aSGHMGwwceaw",
  authDomain: "agrochainer.firebaseapp.com",
  projectId: "agrochainer",
  storageBucket: "agrochainer.appspot.com",
  messagingSenderId: "888786767084",
  appId: "1:888786767084:web:8bc8500c8d061724c1e9c9",
  measurementId: "G-NNN80M6PG9"
};

const firebaseAPP = firebase.initializeApp(firebaseConfig)

const db = firebaseAPP.firestore()
const auth = firebase.auth()
const functions = firebase.functions()
const storage = firebase.storage()
db.settings({ timestampsInSnapshots: true })

export { storage, db, auth, functions }