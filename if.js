const apiUrl = 'https://www.google.com/'; // Replace with your API endpoint

const data = {
  name: 'John Doe',
  email: 'john@example.com'
};

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
