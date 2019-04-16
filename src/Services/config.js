import Firebase, { auth } from 'firebase';
let config = {
    apiKey: "AIzaSyBj2mNDQPYizFddS4KJOJoy4lhZT0WjPaA",
    authDomain: "fir-demo-68f67.firebaseapp.com",
    databaseURL: "https://fir-demo-68f67.firebaseio.com",
    projectId: "fir-demo-68f67",
    storageBucket: "fir-demo-68f67.appspot.com",
    messagingSenderId: "1040509426716"
  };
  let app = Firebase.initializeApp(config);

  export const db = app.database();
  export const firebaseApp=app.auth();
  