require('dotenv').load();
var ACCOUNT_SID = process.env.ACCOUNT_SID
var AUTH_TOKEN = process.env.AUTH_TOKEN

var twilio = require('twilio');
var client = new twilio.RestClient(ACCOUNT_SID, AUTH_TOKEN);

client.messages.create({
    to:'+13605843129',

    from:'+12534656401',
    body:'I also found an API that sends texts for you - im sending this from a node.js Script'
}, function(error, message) {
    if (error) {
        console.log(error.message);
    }
});
