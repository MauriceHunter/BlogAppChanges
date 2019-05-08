import * as firebase from 'firebase';
const settings = {timestampsInSnapshots: true};

var firebaseConfig = {
  apiKey: "AIzaSyAi_F8psAMEKkSksOac_Mb99zpljDvFBY8",
  authDomain: "blog-5b1ec.firebaseapp.com",
  databaseURL: "https://blog-5b1ec.firebaseio.com",
  projectId: "blog-5b1ec",
  storageBucket: "blog-5b1ec.appspot.com",
  messagingSenderId: "690643341652"
  };
  
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings)

export default fire;