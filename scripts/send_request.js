// This Script requires the Axios NPM. to download enter `npm i axios -g` into the terminal
const axios = require('axios');
axios.defaults.headers.common["User-Agent"] = "";

const MAIN_SERVER = "http://www.boomlings.com/database/";
const DATA_SERVER = "http://www.robtopgames.net/database/accounts/";


// Private function
async function post(endpoint, params, useDataServer = false)
{
    let server = useDataServer ? DATA_SERVER : MAIN_SERVER;
    return await axios.post(`${server}/${endpoint}.php`, new URLSearchParams(params));
}

// Note: Params is an object {}
async function logRequest(endpoint, params, useDataServer = false)
{
    if(typeof endpoint === 'string' || endpoint instanceof String)
    {
    let reqData = await post(endpoint, params, useDataServer);
    return console.log(await reqData.data)
    }
}

