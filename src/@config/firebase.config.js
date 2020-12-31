/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import "firebase/firestore";
import { nanoid } from "nanoid";

const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGE_SENDER_ID,
  REACT_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGE_SENDER_ID,
  appId: REACT_APP_ID,
};

const _f = firebase.initializeApp(firebaseConfig);
const firestoreDb = firebase.firestore();

const fetchTodos = () => {
  return firestoreDb
    .collection("todos")
    .get()
    .then((snapshot) => {
      snapshot.forEach((data) => console.log(data.data()));
    })
    .catch((err) => console.log(err.message));
};

const storeTodo = (text) => {
  firestoreDb
    .collection("todos")
    .add({ id: nanoid(5), text: text, isCompeted: false })
    .then((response) => {
      console.log("Todo stored in firestore....");
    })
    .catch((err) => err.message);
};

export { _f, firestoreDb, fetchTodos, storeTodo };
