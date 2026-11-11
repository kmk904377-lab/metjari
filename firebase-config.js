const firebaseConfig = {
  apiKey: "AIzaSyBzLZxIGum-QQ4vEvGsaozAqDQDyUiW54k",
  authDomain: "as12-d6210.firebaseapp.com",
  databaseURL: "https://as12-d6210-default-rtdb.firebaseio.com",
  projectId: "as12-d6210",
  storageBucket: "as12-d6210.firebasestorage.app",
  messagingSenderId: "490183773270",
  appId: "1:490183773270:web:d8a8ff4be981d20f0afff7",
  measurementId: "G-VGS5MVSTQE"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
