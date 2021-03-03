const { Client, Config, TerminalLocalAPI } = require("@adyen/api-library");
const dotenv = require('dotenv')
dotenv.config();
//Terminal requests
const { 
    payment, 
    refund,
    login, 
    logout, 
    printReceipt
} = require('./requests.js')



const config = new Config();

// Local API config
config.terminalApiLocalEndpoint = process.env.TERMINAL_API_LOCAL_ENDPOINT; // Local IP of terminal
config.apiKey = process.env.API_KEY // Removed the api key, do not need for local (this is for Cloud API)
config.environment = "TEST";
config.certificatePath = "/Users/lukenorris/Desktop/adyen-terminalfleet-test.pem"; // Path to PEM file from Adyen documentation

const client = new Client({ config });
let terminalApi = new TerminalLocalAPI(client);


// Paste one of the Terminal requests as the second argument: 
const terminalAPIPaymentRequest = { saleToPOIRequest: refund };  
console.log('Request:') 
console.log(terminalAPIPaymentRequest)

const securityKey = {
    adyenCryptoVersion: 1,
    keyIdentifier: process.env.KEY_IDENTIFIER,
    keyVersion: 1,
    passphrase: process.env.PASSPHRASE
};


terminalApi.request(terminalAPIPaymentRequest, securityKey)
  .then((obj) => {
    console.log('Response:') 
    console.log("No Error: ", JSON.stringify(obj));
  })
  .catch((err) => {
    console.error(err);
  });