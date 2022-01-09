const axios = require('axios');

// get key from server.
const getKey = async () => {
    try {
        const resp = await axios.get('http://localhost:8081/get-key');
        if(resp.status === 200) {
            // If there are no errors return key
            return resp.data.key;
        } else {
            throw resp;
        }
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

// Make meaning cloud API call
const getSentiment = async (key, url) => {
    url += `&key=${key}`;
    console.log(url)
    try {
        const resp = await axios.get(url);
        if(resp.status === 200) {
            // If there are no errors return data
            return resp.data;
        } else {
            throw resp;
        }
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

// Display results 
const formResult = ({ agreement, confidence, irony }) => {
    let p = document.createElement('p');
    p.innerHTML = `Agreement: ${agreement} Confidence: ${confidence} Irony: ${irony}`;
    document.getElementById('results').appendChild(p);
}

// An async function containing all async activity. Getting key and making API call.
const handleAsync = async (url) => {
    const key = await getKey();
    const resp = await getSentiment(key, url);
    formResult(resp);
}

function handleSubmit(event) {
    event.preventDefault();
    
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const url = `https://api.meaningcloud.com/sentiment-2.1?lang=en&model=general&txt=${formText}`;

    const valid = Client.validate(url);

    if(!valid) {
        alert('Invalid url');
        return;
    }

    if(formText.trim() === '') {
        alert('Input can\'t be empty')
        return;
    }

    console.log("::: Form Submitted :::")

    handleAsync(url);

    document.getElementById('name').value = '';
}

export { handleSubmit }
