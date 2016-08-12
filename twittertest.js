console.log("Testing API connection");

var Twit = require('twit');
var config = require('./config');
var tweets = [];

getTweet('maggierogers',tweets);

// getTweet('kanyewest');
// getTweet('methodman');


function getTweet(username,tweets) {
  var T = new Twit(config);
  var params = {
    screen_name: username,
    count: 3,
    include_rts: false
  }
  T.get('statuses/user_timeline', params,function gotData(err, data, response){
    for (var i = 0; i < data.length; i++) {
      tweets.push(data[i].text);
      console.log("The tweet: "+tweets[i]);
    }
  }
);


}
