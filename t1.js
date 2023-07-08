const serverIP = '195.201.121.249';
const serverPort = '8888';

// Build the URL
const serverUrl = `http://${serverIP}:${serverPort}`;

// Send the beacon
navigator.sendBeacon(serverUrl);
