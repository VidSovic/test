// JavaScript WebSocket client
let socket = new WebSocket("ws://195.201.121.249:8765");

socket.onopen = function(e) {
  console.log("[open] Connection established");
  console.log("Sending test message to server");
  socket.send("Test message from client");
};

socket.onmessage = function(event) {
  console.log(`[message] Data received from server: ${event.data}`);
};

socket.onerror = function(error) {
  console.log(`[error] ${error.message}`);
};
