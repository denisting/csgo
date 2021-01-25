//jshint esversion: 8
require('dotenv').config();

const express = require('express');
const got = require('got');

const app = express();

app.use(express.static(__dirname + '/'));

app.listen(3000, function() {
  console.log("Server is up and running on port 3000");
});


app.get('/', function(req, res) {

  res.sendFile(__dirname + '/index.html');


});

app.get('/api', function(req, res) {

  const API_KEY = process.env.API_KEY;
  const query = '&page=1&per_page=3';

  const url = 'https://api.pandascore.co/csgo/matches/upcoming?token=' + API_KEY + query;

  (async () => {
    try {
      const response = await (got(url));
      const responseJSON = JSON.parse(response.body);

      console.log(responseJSON);

      res.send(responseJSON);

    } catch (error) {
      console.log(error.response.body);
      //=> 'Internal server error ...'
    }
  })();
});












//serve last. different route "/api"
//mozilla tutorials
