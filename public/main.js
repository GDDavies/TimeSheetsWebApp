var dataArray = new Array()
//[];

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
  this.newButton.addEventListener('click', writeUserData("JG","JG","j@g.com"));
  dataArray.push(["", ""]);
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
    var arr = new Array()
    snapshot.forEach(function(child) {
      //var arr = new Array()
      i = 0
      for(var property in child.val()) {
        // console.log(i)
        // console.log(dataArray[0])
        dataArray[0][i] = [property];
        i ++

        arr.push(child.val()[property]);

        console.log(arr)

        //console.log(property + "=" + child.val()[property]);
          //dataArray.push({

            //[property]: child.val()[property]
          //});
            //return data_array
        }
    });
    dataArray.push(arr)
    console.log(dataArray);
  });
}

window.onload = function() {
  window.TimeSheets = new TimeSheets();
  retrieveUserData();
};
