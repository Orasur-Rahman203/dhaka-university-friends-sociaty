// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCXEqc7JhSzvSSIFHZM3yj7CwyIKjlAxT0",
//   authDomain: "dufs-9495.firebaseapp.com",
//   databaseURL: "https://dufs-9495-default-rtdb.firebaseio.com",
//   projectId: "dufs-9495",
//   storageBucket: "dufs-9495.appspot.com",
//   messagingSenderId: "377397520470",
//   appId: "1:377397520470:web:2aa61fef79a452bbc6b3f7",
//   measurementId: "G-26237ZR958"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);



// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: "AIzaSyAQ4a0eYyEvzNWPHb-zUpxECqFAdAx4d0Y",
// //   authDomain: "dufs-9495-a8fa6.firebaseapp.com",
// //   projectId: "dufs-9495-a8fa6",
// //   storageBucket: "dufs-9495-a8fa6.appspot.com",
// //   messagingSenderId: "194636361684",
// //   appId: "1:194636361684:web:88354572f12dbf4e44b041"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// export default app;








// shishir vi
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXEqc7JhSzvSSIFHZM3yj7CwyIKjlAxT0",
  authDomain: "dufs-9495.firebaseapp.com",
  databaseURL: "https://dufs-9495-default-rtdb.firebaseio.com",
  projectId: "dufs-9495",
  storageBucket: "dufs-9495.appspot.com",
  messagingSenderId: "377397520470",
  appId: "1:377397520470:web:2aa61fef79a452bbc6b3f7",
  measurementId: "G-26237ZR958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getDatabase(app)
export default app;