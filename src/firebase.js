import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDMxJuVXEH-IIptHM3SCE-bqmmvqR7nsnk",
  authDomain: "spiz-online-restaurants.firebaseapp.com",
  projectId: "spiz-online-restaurants",
  storageBucket: "spiz-online-restaurants.appspot.com",
  messagingSenderId: "601713358922",
  appId: "1:601713358922:web:d080dfa4548b19510c8eb3"
});
export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const fbProvider = new firebase.auth.FacebookAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();