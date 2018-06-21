const express = require('express');
var request = require('request');
var util = require('util');

//'https://timesystem.sportradar.ag/stampinout/extcheck?stamptype=auto&identifier=xxxxxxxx&method=3'

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/log/:id', function(req, res) {
  let url = 'https://timesystem.sportradar.ag/stampinout/extcheck?stamptype=auto&identifier=' + req.params.id +  '&method=3';
  console.log(url);
  request(url, function (error, response, body) {
      console.log(req.params.id);
      console.log(req.params);
      console.log('error:', error); // Print the error if one occurred and handle it
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body);
      console.log('response.body', response.body);
      if( response.body === 'User with this identifier was not found!' ) {
        console.log('USER NOT FOUND');
      }
      res.send({ express: response.body })
    });
});




app.listen(port, () => console.log(`Listening on port ${port}`));
