const express = require('express');
var request = require('request');
var util = require('util');

//'https://timesystem.sportradar.ag/stampinout/extcheck?stamptype=auto&identifier=xxxxxxxx&method=3'

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/log', function(req, res) {
  request('https://timesystem.sportradar.ag/stampinout/extcheck?stamptype=auto&identifier=xxxxxxxx&method=3', function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred and handle it
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      res.send({ express: body })
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
