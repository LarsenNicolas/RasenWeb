import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDplT5Y8iO2CCrFSvyVL2QpAodScyxX8CI",
    authDomain: "rasen-computacion.firebaseapp.com",
    databaseURL: "https://rasen-computacion.firebaseio.com",
    projectId: "rasen-computacion",
    storageBucket: "rasen-computacion.appspot.com",
    messagingSenderId: "827426785485",
    appId: "1:827426785485:web:996cb618bf9a034d404184",
    measurementId: "G-3WRZPP908E"
};

firebase.initializeApp(firebaseConfig);
console.log(firebase.database());
const db = firebase.firestore();
db.settings({

});

firebase.db = db;

firebase.auth = firebase.auth();

export default firebase;

