 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDSLb64M1M34fG28JlhoBOskrepbb8FISQ",
    authDomain: "fir-project-87a77.firebaseapp.com",
    databaseURL: "https://fir-project-87a77.firebaseio.com",
    projectId: "fir-project-87a77",
    storageBucket: "",
    messagingSenderId: "159629267750",
    appId: "1:159629267750:web:815856b84a553f69"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var messagesRef = firebase.database().ref('firebase');

  function submitForm(e){
      event.preventDefault();
      var name = document.getElementById('name').value;
      var track = document.getElementById('track').value;
      var email = document.getElementById('email').value;
      var number = document.getElementById('number').value;
      var submitButton = document.getElementById('submitButton').value;
      saveMessage(name,track,email,number,submitButton);
  }

  document.getElementById('contactForm').addEventListener('submit',submitForm);

  function saveMessage(name,track,email,number,submitButton){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          name : name,
          track : track,
          email : email,
          number : number,
          submitButton :submitButton
 });
  }