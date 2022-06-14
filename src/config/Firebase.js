import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBEgGc_kC7GkGD-2ThDapxLf1DKCozLMSI",
    authDomain: "zaman-todoapp.firebaseapp.com",
    projectId: "zaman-todoapp",
    storageBucket: "zaman-todoapp.appspot.com",
    messagingSenderId: "402560142394",
    appId: "1:402560142394:web:07dddea227cb0ddf793903",
    measurementId: "G-6TJ5DR9BVV"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const auth = firebase.auth()