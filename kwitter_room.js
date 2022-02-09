
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBHOt6UpP9trCr-FUFQbO012pM96MdrmqA",
      authDomain: "rocketshare-baeee.firebaseapp.com",
      databaseURL: "https://rocketshare-baeee-default-rtdb.firebaseio.com",
      projectId: "rocketshare-baeee",
      storageBucket: "rocketshare-baeee.appspot.com",
      messagingSenderId: "136516183815",
      appId: "1:136516183815:web:0ebc3445cb56db629387a2",
      measurementId: "G-P4XL4FSS2Z"
    };
    
    // Initialize Firebase
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location ="kwitter_page.html";
    }
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}