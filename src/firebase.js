import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCCadCdEnoaBTXkrQpAzxf37RIxXf64dOk',
  authDomain: 'linkedin-clone-ef9ab.firebaseapp.com',
  projectId: 'linkedin-clone-ef9ab',
  storageBucket: 'linkedin-clone-ef9ab.appspot.com',
  messagingSenderId: '655259646692',
  appId: '1:655259646692:web:e80453ca87768bc6fdcaf1',
  measurementId: 'G-JFWDBF8CLM',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
