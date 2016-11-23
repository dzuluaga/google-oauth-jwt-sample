Generate a JSON Web Token (JWT) with Google OAuth Service Account
=================================================================

This example provides a simple generator of JSON Web Token (JWT) in Node.js.

#### Step 1: ```npm install```
#### Step 2: ```node index.js```
#### Step 3: 
```Make API calls to Google APIs```

#### Code:
This is a working example extracted from [Google API Node.js Client Repo](https://github.com/google/google-api-nodejs-client/#using-jwt-service-tokens), which I couldn't figure out the first time I tried it.
```javascript
var google = require('googleapis');

var key = require('./stackdriver-360-e4e2290e84f2.json');
var jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/cloud-platform', 'https://www.googleapis.com/auth/cloud-platform.read-only'],
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
```

#### Note:
Be aware `stackdriver-360-e4e2290e84f2.json` file was generated  using Google Cloud Console.