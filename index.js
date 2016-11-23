var google = require('googleapis');

var key = require('./stackdriver-360-e4e2290e84f2.json');
var jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/cloud-platform', 'https://www.googleapis.com/auth/cloud-platform.read-only', 'https://www.googleapis.com/auth/cloud-platform.read-only', 'https://www.googleapis.com/auth/cloud-platform.read-only', 'https://www.googleapis.com/auth/cloud-platform.read-only'],
  null
);

jwtClient.authorize(function (err, tokens) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(tokens);

  // Make an authorized request to list Drive files.
/*  drive.files.list({
    auth: jwtClient
  }, function (err, resp) {
    // handle err and response
  });*/
});