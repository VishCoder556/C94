
var firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

