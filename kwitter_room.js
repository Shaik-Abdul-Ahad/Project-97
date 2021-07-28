//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAyWH5hsYtgoCqvlmez3XZegVEteSj7mQc",
      authDomain: "chat-app-ahad.firebaseapp.com",
      databaseURL: "https://chat-app-ahad-default-rtdb.firebaseio.com",
      projectId: "chat-app-ahad",
      storageBucket: "chat-app-ahad.appspot.com",
      messagingSenderId: "994333688656",
      appId: "1:994333688656:web:38a33e7e5796d1e084e255"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = " Welcome " + user_name  + "!"

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name" + Room_names );
       row=" <div class='room_name' id= "+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+ "</div> <hr>" ;
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name+"name of the room is ");
   localStorage.setItem("room_name" , name);
   window.location = "kwitter_page.html";
}

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding roomname"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}

function  logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}