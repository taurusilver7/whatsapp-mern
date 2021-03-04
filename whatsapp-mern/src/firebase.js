import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwcFxL2NhxU_gwzD4mJU3mboSpq-aTgJM",
  authDomain: "whatsapp-14fc6.firebaseapp.com",
  projectId: "whatsapp-14fc6",
  storageBucket: "whatsapp-14fc6.appspot.com",
  messagingSenderId: "394039563770",
  appId: "1:394039563770:web:764c5ea00d9c75c3b34043",
  measurementId: "G-35R7VPMQGD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
