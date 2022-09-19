Library to encrypt messages sent to the terminal

1. npm install (In root directory of project)

In add a .env file in the root directory, and add following:
ADYEN_CRYPTOVERSION=1
KEY_IDENTIFIER= --Your Key identifier from Adyen Customer area--
KEY_VERSION=1
PASSPHRASE= --Your password from Adyen Customer Area--
API_KEY= --Your API key--
TERMINAL_API_LOCAL_ENDPOINT=https:// --Your terminal IP address-- :8443/nexo--

In index.js file paste the API call variable as second argument in the terminalApi.request

in

Run the file: node index.js
