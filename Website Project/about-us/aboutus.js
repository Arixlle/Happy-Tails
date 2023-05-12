// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Aij0U46N7KR1MmV1emnCg5w8ZqfGycU",
  authDomain: "donation-page-4a2a2.firebaseapp.com",
  projectId: "donation-page-4a2a2",
  storageBucket: "donation-page-4a2a2.appspot.com",
  messagingSenderId: "353412881237",
  appId: "1:353412881237:web:7f23a866a0e2af06d82ddc",
  measurementId: "G-F53PCL4E67"
};

const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('news-updates');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
});
  
  function send(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
  
    detailsRef.push().set({
      firstname: firstname,
      lastname: lastname,
      email: email,
    });

}