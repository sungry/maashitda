var express = require('express');
var app = express();
var path = require("path");
var restaurants = [
  {
    name: '15 Romolo',
    cuisine: 'Contemporary American',
    neighborhood: 'North Beach',
    price: '$$',
    keywords: ['vibrant', 'brunch', 'food', 'bar', 'cheap', 'foodie', 'cocktails', 'burger']
  },
  {
    name: '1760',
    cuisine: 'Californian',
    neighborhood: 'Nob Hill',
    price: '$$$',
    keywords: ['vibrant', 'dinner', 'small plates', 'italian', 'sophisticated', 'foodie', 'delicious', 'cocktails']
  },
  {
    name: 'Wise Sons Deli',
    cuisine: 'Delicatessen',
    neighborhood: 'Mission',
    price: '$$',
    keywords: ['vibrant', 'deli', 'food', 'kosher', 'casual','foodie', 'sandwich', 'reuben', 'jewish', 'corned beef', 'local' ]
  },
  {
    name: 'Cotogna',
    cuisine: 'Italian',
    neighborhood: 'Finance District',
    price: '$$$',
    keywords: ['vibrant', 'brunch', 'dinner', 'italian', 'food', 'bar', 'foodie', 'obama', 'wine']
  }
  ];

app.use(express.static(path.join(__dirname,'public')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/restaurants', function (req, res) {
  res.json({restaurants: restaurants})
});
var port = process.env.PORT || 3000;

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at hp://%s:%s', host, port);
});
