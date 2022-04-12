

document.getElementById("esb").addEventListener("click", function (e) {
  e.preventDefault();
  if (document.getElementById("sname").value) {
    var jsonStuff = { "ServerName": document.getElementById("sname").value, "Password": document.getElementById("pass").value}
    var toSend = JSON.stringify(jsonStuff)
    const xhttp = new XMLHttpRequest();
    // Send a request
    xhttp.open("POST", "/joinServer");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(toSend);
    console.log(xhttp.responseText);
    window.location.href = "http://localhost:3000/chatroom"
  }
});
