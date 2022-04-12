
/*This file was inspired the socket.io chat tutorial https://socket.io/get-started/chat and the lecture of the joint painting by the professor https://d2l.ucalgary.ca/d2l/le/content/422910/viewContent/5219346/View*/
let socket = io.connect('http://localhost:3000');

//get currently joined rooms
const xhttp2 = new XMLHttpRequest();
xhttp2.open("GET", "/inrooms",false);
xhttp2.send();
if (xhttp2.readyState === xhttp2.DONE) {
  if (xhttp2.status === 200) {
      console.log(xhttp2.response);
      console.log(xhttp2.responseText);
  }
}
var finaltext = JSON.parse(xhttp2.responseText);
for (let i = 0; i < finaltext.length; i++) {
  var item = document.createElement('li');
  var p = document.createElement('p');
  var b1 = document.createElement('button');
  var b2 = document.createElement('button');
  p.textContent = finaltext[i].room;
  b1.textContent = "Leave";
  p.id = 'room-name'
  b1.id = 'leave';
  b2.id = 'join';
  b2.textContent = "Join";
  item.appendChild(p);
  item.appendChild(b1);
  item.appendChild(b2);

  console.log(item)
  rlist.append(item)
}



document.getElementById("Join").addEventListener("click", function (e) {
  e.preventDefault();
  //change page req
  const xhttp2 = new XMLHttpRequest();
  xhttp2.open("GET", "/join");
  //xhttp2.setRequestHeader('Login', 'one');
  xhttp2.send();
  //socket.emit('newuser', document.getElementById("email").value, document.getElementById("password").value)
  window.location.href = "http://localhost:3000/join"

});
document.getElementById("Create").addEventListener("click", function (e) {
  e.preventDefault();
  //change page req
  const xhttp2 = new XMLHttpRequest();
  xhttp2.open("GET", "/create");
  //xhttp2.setRequestHeader('Login', 'one');
  xhttp2.send();
  //socket.emit('newuser', document.getElementById("email").value, document.getElementById("password").value)
  window.location.href = "http://localhost:3000/create"

});
document.getElementById("logout").addEventListener("click", function (e) {
  e.preventDefault();
  //change page req
  const xhttp2 = new XMLHttpRequest();
  xhttp2.open("GET", "/");
  //xhttp2.setRequestHeader('Login', 'one');
  xhttp2.send();
  //socket.emit('newuser', document.getElementById("email").value, document.getElementById("password").value)
  window.location.href = "http://localhost:3000"

});