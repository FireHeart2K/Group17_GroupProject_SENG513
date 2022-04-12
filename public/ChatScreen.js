
/*This file was inspired the socket.io chat tutorial https://socket.io/get-started/chat and the lecture of the joint painting by the professor https://d2l.ucalgary.ca/d2l/le/content/422910/viewContent/5219346/View*/
let socket = io.connect('http://localhost:3000');
//getusername
const xhttp2 = new XMLHttpRequest();
xhttp2.open("GET", "/getUser",false);
xhttp2.send();
let thisUser = xhttp2.responseText;
document.getElementById("SendFile").addEventListener("click", function (e) {
  e.preventDefault();
  //change page req
  const xhttp2 = new XMLHttpRequest();
  xhttp2.open("GET", "/sendFile");
  //xhttp2.setRequestHeader('Login', 'one');
  xhttp2.send();
  //socket.emit('newuser', document.getElementById("email").value, document.getElementById("password").value)
  window.location.href = "http://localhost:3000/sendFile"

});
document.getElementById("sendMessage").addEventListener("click", function (e) {
  e.preventDefault();
  socket.emit('chatmessage', thisUser + ":" + document.getElementById("textBox").value)
  var item = document.createElement('li');
  item.textContent = "[" + thisUser + "] " + document.getElementById("textBox").value;
  item.style.fontWeight = "bold"
  messages.appendChild(item);
  sendMessage.value = '';

});