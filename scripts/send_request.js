// This Script requires the Axios NPM. to download enter `npm i axios -g` into the terminal
const axios = require('axios');
axios.defaults.headers.common["User-Agent"] = "";

const SECRETS = {
    common: "Wmfd2893gb7",
    account: "Wmfv3899gc9",
    level: "Wmfv2898gc9",
    mod: "Wmfp3879gc3",
    admin: "Wmfx2878gb9"
};

const KEYS = {
    save: 11,
    messages:14251,
    vault: 19283,
    challenges: 19847,
    level_password:26364,
    comment: 29481,
    account_password: 37526,
    level_leaderboard: 39673,
    level: 41274,
    load_data: 48291,
    rating: 58281,
    chests: 59182,
    stats: 85271
};

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

function xor_cycle(key, string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let input = string.charCodeAt(i);
        let xKey = key.toString().charCodeAt(i % key.toString().length)
        result += String.fromCharCode(input ^ xKey);
    }
    return result;
}

function robtop_encode(key, str)
{
    return new Buffer.from(xor_cycle(key, str), 'ASCII').toString("base64");
}

function robtop_decode(key, str)
{
    return xor_cycle(key, new Buffer.from(str, "base64").toString("ASCII"))
}