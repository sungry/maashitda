var express = require('express');
var app = express();
var path = require("path");
var restaurants = [
  {
    name: '15 Romolo',
    cuisine: 'Contemporary American',
    neighborhood: 'North Beach',
    price: '$$',
    keywords: ['vibrant', 'brunch', 'food', 'bar', 'cheap', 'foodie', 'cocktails', 'burger', 'north beach'],
    address: '15 Romolo Pl, San Francisco, CA 94133'
  },
  {
    name: '1760',
    cuisine: 'Californian',
    neighborhood: 'Nob Hill',
    price: '$$$',
    keywords: ['vibrant', 'dinner', 'small plates', 'italian', 'sophisticated', 'foodie', 'delicious', 'cocktails', 'nob hill', 'acquello'],
    address: '1760 Polk St, San Francisco, CA 94109'
  },
  {
    name: 'Wise Sons Jewish Delicatessen',
    cuisine: 'Delicatessen',
    neighborhood: 'Mission',
    price: '$$',
    keywords: ['vibrant', 'deli', 'food', 'kosher', 'casual','foodie', 'sandwich', 'reuben', 'jewish', 'corned beef', 'local', 'wise sons deli' ],
    address: '3150 24th St, San Francisco, CA 94110'
  },
  {
    name: 'Cotogna',
    cuisine: 'Italian',
    neighborhood: 'Finance District',
    price: '$$$',
    keywords: ['vibrant', 'brunch', 'dinner', 'italian', 'food', 'bar', 'foodie', 'obama', 'wine', 'finance district'],
    address: '490 Pacific Ave, San Francisco, CA 94133'
  },
  {
    name: 'Lord Stanley',
    cuisine: 'Californian',
    neighborhood: 'Nob Hill',
    price: '$$$',
    keywords: ['vibrant', 'modern', 'dinner', 'californian', 'food', 'romantic', 'foodie', 'chic', 'wine', 'nob hill'],
    address: '2065 Polk St, San Francisco, CA 94109'
  },
  {
    name: 'Octavia',
    cuisine: 'Italian',
    neighborhood: 'Pac Heights',
    price: '$$$',
    keywords: ['vibrant', 'late night', 'dinner', 'neighborhood', 'bistro', 'wine', 'foodie', 'frances', 'small plates', 'pac heights'],
    address: '1701 Octavia St, San Francisco, CA 94109'
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

var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at hp://%s:%s', host, port);
});
