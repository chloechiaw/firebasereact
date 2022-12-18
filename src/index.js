import React from "react";
import ReactDOM from "react-dom/client";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyD8uFHuAHqC6HejxO9QIUlQaoQ92q177PQ",
  authDomain: "fir-9-dojo-3d4ba.firebaseapp.com",
  projectId: "fir-9-dojo-3d4ba",
  storageBucket: "fir-9-dojo-3d4ba.appspot.com",
  messagingSenderId: "730073427799",
  appId: "1:730073427799:web:0e7c90d65d22f0e8c0d812",
};

// initialize firebase app
initializeApp(firebaseConfig);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// init services
const db = getFirestore();

// collection reference
const collectionRef = collection(db, "books");

// get data from all the documents in that collection "books"
getDocs(collectionRef)
  // adding a new object to the books array for each object, we get the data and the id of the document
  .then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
  })
  .catch((err) => {
    console.log(err.message);
  });

// adding documents
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(collectionRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  })
    // .then fires when the above function is done
    // resets the form so we can fill out a new one
    .then(() => {
      addBookForm.reset();
    });

  // you need to call colRef so it knows what collection to add to
});

//deleting documents
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
