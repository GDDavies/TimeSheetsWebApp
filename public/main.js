var data_array = [];

function TimeSheets() {
  // Initialise Firebase
  var config = {
  apiKey: "AIzaSyArrll9AylDE6ouWw9UCDqSC_tAuSLmHNA",
  authDomain: "firetest-4e790.firebaseapp.com",
  databaseURL: "https://firetest-4e790.firebaseio.com",
  projectId: "firetest-4e790",
  storageBucket: "",
  messagingSenderId: "593670302298"
  };
  firebase.initializeApp(config);
  this.newButton = document.getElementById('myBtn');
  this.newButton.addEventListener('click', writeUserData("JG", "JG", "j@g.com"));
}

function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
  });
}

function retrieveUserData() {
  var userNamesRef = firebase.database().ref('users/');
  userNamesRef.on('value', function(snapshot) {
    snapshot.forEach(function(child) {
      for(var property in child.val()) {
        //console.log(property + "=" + child.val()[property]);
          data_array.push({
            [property]: child.val()[property]
          });
          console.log(data_array)
            //return data_array
        }
    });
  });
}

window.onload = function() {
  window.TimeSheets = new TimeSheets();
  retrieveUserData();
};
