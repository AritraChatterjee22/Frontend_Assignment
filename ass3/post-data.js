const axios = require('axios');

const url = 'https://chimpu.xyz/api/post.php';
const phoneNumber = '1234567890'; // Replace with the actual phone number

const payload = {
  phone: phoneNumber
};

axios.post(url, payload)
  .then(response => {
    const headers = response.headers;
    console.log(headers);
  })
  .catch(error => {
    console.error('Request failed:', error);
  });

