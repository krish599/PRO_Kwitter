const config = {
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
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value;


}

