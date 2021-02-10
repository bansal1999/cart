import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app"
import 'firebase/firestore';


  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeyKQgIDOcli9e1lWzIJAIaDvqhID8T5Q",
    authDomain: "cart-3a846.firebaseapp.com",
    projectId: "cart-3a846",
    storageBucket: "cart-3a846.appspot.com",
    messagingSenderId: "564379963206",
    appId: "1:564379963206:web:c8aa02bda829fc0e85df47"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
