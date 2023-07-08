// Define the IP and port of your server
const serverIP = '195.201.121.249';
const serverPort = '8888';
// Build the URL
const serverUrl = `http://${serverIP}:${serverPort}`;

// Create a new image object
var img = new Image();
// Set the src of the image to your server
img.src = serverUrl;
