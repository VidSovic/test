var source = new EventSource("http://195.201.121.249:8888");

source.onmessage = function(event) {
  console.log(event.data);
};
