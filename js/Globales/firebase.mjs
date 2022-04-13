// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js'
// // Add Firebase products that you want to use
// import { auth } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'
// import { firestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js'

// const firebaseConfig = { };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCosOhMqc1uR5rIYfG_We0jftIvuEu_jPA",
    authDomain: "intranetrelevamiento.firebaseapp.com",
    projectId: "intranetrelevamiento",
    storageBucket: "intranetrelevamiento.appspot.com",
    messagingSenderId: "124071897717",
    appId: "1:124071897717:web:88442267f852f8f7b0663c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  
  console.log("El firebase esta ejecutandose")