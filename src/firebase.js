import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAJBHjJtxGoKNkfuWcHzq8EFXqC_LHTpgQ",
    authDomain: "linkedin-f428c.firebaseapp.com",
    projectId: "linkedin-f428c",
    storageBucket: "linkedin-f428c.appspot.com",
    messagingSenderId: "671402509029",
    appId: "1:671402509029:web:a9565c0dcbf0880a30ca0c"
};
const firebasApp = firebase.initializeApp(firebaseConfig);
const db = firebasApp.firestore();
const auth = firebase.auth();
export { db, auth };