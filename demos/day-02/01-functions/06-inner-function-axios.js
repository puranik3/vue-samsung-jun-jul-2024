// you can create a function anywhere
const axios = require('axios');

// method = 'get' | 'post' | 'put' | ...
async function makeRequest(method, url, data) {
    // axios.get | axios.post | axios.put | ...
    const response = await axios[method](url, data);
    return response.data;
}

async function getWorkshops() {
    const data = await makeRequest('get', `https://workshops-server.onrender.com/workshops`)
    console.log(data);
}

getWorkshops();