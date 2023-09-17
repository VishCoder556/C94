function addUser(){
    var user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}


const firebaseConfig = {
    apiKey: "AIzaSyD-sbThq_vutKyCdidj5DvLZ1BC6p-ymZ0",
    authDomain: "vishnu-kwitter.firebaseapp.com",
    databaseURL: "https://vishnu-kwitter-default-rtdb.firebaseio.com",
    projectId: "vishnu-kwitter",
    storageBucket: "vishnu-kwitter.appspot.com",
    messagingSenderId: "503475883309",
    appId: "1:503475883309:web:ee4f002bdd4719c52fd7a4",
    measurementId: "G-3E7QJVT658"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);