//YOUR FIRE BASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyBpeyOWmwtSxuxVso7ILMLJ7iTgXwpRzG8",
    authDomain: "kwitter-3c9af.firebaseapp.com",
    databaseURL: "https://kwitter-3c9af-default-rtdb.firebaseio.com",
    projectId: "kwitter-3c9af",
    storageBucket: "kwitter-3c9af.appspot.com",
    messagingSenderId: "509595416759",
    appId: "1:509595416759:web:e45c8ae0190d92e780f532"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });

      document.getElementById("msg").value = "";
  }


  function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "index.html"; }