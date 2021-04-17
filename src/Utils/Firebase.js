import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAMuXwuecUpOkv-vAQQ2p-oOjXxndTba_E",
    authDomain: "ebvdb-96641.firebaseapp.com",
    projectId: "ebvdb-96641",
    storageBucket: "ebvdb-96641.appspot.com",
    messagingSenderId: "485624604179",
    appId: "1:485624604179:web:390a83788cd4a8051181e6"
  };

export const firebaseapp =   firebase.initializeApp(firebaseConfig);


