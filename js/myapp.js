import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBHMk--RiNYJxZa-nNltXPJwmkGSvur19k",
    authDomain: "midterm2-alidrgt.firebaseapp.com",
    projectId: "midterm2-alidrgt",
    storageBucket: "midterm2-alidrgt.appspot.com",
    messagingSenderId: "13571531061",
    appId: "1:13571531061:web:1670afb34a408123db6c7c"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Google Sign-In function
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        window.location.href = "home.html"; 
      })
      .catch(function(error) {
        console.error(error);
      });
  }
  