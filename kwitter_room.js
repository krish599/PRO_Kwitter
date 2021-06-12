var firebaseConfig = {
    apiKey: "AIzaSyCbmz91IunpQLIUgxnhM10cXMsbAY6OhfU",
    authDomain: "kwitter-6ad28.firebaseapp.com",
    databaseURL: "https://kwitter-6ad28-default-rtdb.firebaseio.com",
    projectId: "kwitter-6ad28",
    storageBucket: "kwitter-6ad28.appspot.com",
    messagingSenderId: "152231531884",
    appId: "1:152231531884:web:6b1ad181eda1eb253f4f49"
  };

  firebase.initializeApp(config);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

  function addRoom ()
  {
    room_name = document.getElementById("room_name").value;
    
    firebase.database().rel("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name",room_name);

    window.location = "kwitter_page.html";
  }

  function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}