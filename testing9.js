// Define the IP and port of your server
const serverIP = '195.201.121.249';
const serverPort = '8888';

// Build the URL
const serverUrl = `http://${serverIP}:${serverPort}`;

// Using the Fetch API to send a GET request
fetch(serverUrl)
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
