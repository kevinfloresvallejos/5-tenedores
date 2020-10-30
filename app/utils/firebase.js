import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBPnHK0JFXJjR8AHTcRwHakoOgfBQJWtWY",
    authDomain: "tenedores-7df3b.firebaseapp.com",
    databaseURL: "https://tenedores-7df3b.firebaseio.com",
    projectId: "tenedores-7df3b",
    storageBucket: "tenedores-7df3b.appspot.com",
    messagingSenderId: "409159180384",
    appId: "1:409159180384:web:eb0bfaa62d80f70e85e305"
 };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
