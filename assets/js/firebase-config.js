import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBF7VhKWuhdzniD4o1LGZHnzanaiOTZJd8",
  authDomain: "rmg-placements-cc918.firebaseapp.com",
  projectId: "rmg-placements-cc918",
  storageBucket: "rmg-placements-cc918.firebasestorage.app",
  messagingSenderId: "385015599760",
  appId: "1:385015599760:web:35c72ce49b68c563a27e15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
