/*This file was inspired the socket.io chat tutorial https://socket.io/get-started/chat and the lecture of the joint painting by the professor https://d2l.ucalgary.ca/d2l/le/content/422910/viewContent/5219346/View*/
let socket = io.connect('http://localhost:3000');

newsignon.addEventListener('submit', function (e) {
  e.preventDefault();
  if (un.value && pass.value) {
    socket.emit('newuser', un.value,pass.value)
    window.scrollTo(0, document.body.scrollHeight);
    un.value = '';
    pass.value = '';
  }
  newsignon.style.display = "none";
});