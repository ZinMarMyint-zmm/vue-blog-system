import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDkLnTXlA9u6hg3LfwApsiYVG76bATJknk",
    authDomain: "vue-blog-system-1703c.firebaseapp.com",
    projectId: "vue-blog-system-1703c",
    storageBucket: "vue-blog-system-1703c.appspot.com",
    messagingSenderId: "965104566865",
    appId: "1:965104566865:web:c10280e1832600df0f6e70"
  };
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();

  export {db}