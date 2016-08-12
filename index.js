var stopWords = ["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"];
var users = [];
var usernames = ["kanyewest", "methodman", "therealredman", "FlatbushZombies", "gorillazband", "kendricklamar", "SylvanEsso","flo_tweet", "ActionBronson", "lorenbouchard"];
//Instantiate Twit object and establish connection to Twitter API.
var Twit = require('twit');
var config = require('./config');


//Code for interacting with the twitter API. (Does not work correctly)
// for (var i = 0; i < usernames.length; i++) {
//   var T = new Twit(config);
//   var u = new User(usernames[i]);
//   console.log("User created: "+u.name);
//   var params = {
//     screen_name: usernames[i],
//     count: 3,
//     include_rts: false,
//     trim_user: true
//   }
//   T.get('statuses/user_timeline', params,gotData);
//   function gotData(err, data,response){
//
//     for (var j = 0; j < data.length; j++) {
//       console.log("The user: "+u.name+" The tweet is: "+data[j].text);
//       var str = splitSentence(data[j].text);
//       str = removeStopWords(str,stopWords);
//       var dictionary = createDictionary(str);
//       u.updateDictionary(dictionary);
//     }
//     users.push(u);
//   }
//
// }



// console.log(str);
// str = splitSentence(str);
// console.log(str);
// str = removeStopWords(str, stopWords);
// var dictionary = createDictionary(str);
// console.log(str);




//Function that returns an array of words in a given sentence.
function splitSentence(str) {
    str = str.split(" ");
    return str;
}

//Function that searches through a given array of words for specific  "stop words"
//and removes them. Returns the original array with "stop words" removed.
function removeStopWords(str,stopWords) {
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < stopWords.length; j++) {
        if (str[i] == stopWords[j]) {
          str.splice(i,1);
        }
    }
  }
  return str;
}
//Function that takes in an array of strings and converts it into a dictionary.
//A dictionary is a collection of "Word" objects so each string is instantiated as a "Word"
//object before being added to the dictionary.
function createDictionary(str) {
  var dictionary = [];
  for (var i = 0; i < str.length; i++) {
    var temp = new Word(str[i]);
    dictionary.push(temp);
  }
  return dictionary;
}

//Word class definition.
//A "word" object has a name and frequency property and increase frequency function .
//  name -> name of the word
// frequency -> number of times that word is found in a dictionary.
// incfrq -> method that increments the frequency property by 1.
function Word(name) {
  this.name = name;
  this.frequency = 1;
  this.incfrq = function(){
    this.frequency++;
  }
}
//User class definition
// name -> name of user (twitter handle)
// dictionary -> array of "Word" objects
//getTopWords -> function that sorts the user's dictionary by word frequency and returns the top 10 most used words.
//updateDictionary -> Takes a dictionary as a parameter and adds it to the user's existing dictionary if the words don't
//already exist. If the word does exist then that words frequency is incremented.
function User(name) {
  this.name = name;
  this.dictionary = [];

  this.getTopWords = function () {
    var topVector = [];
    var topWords = this.dictionary.sort(function(a,b){return b.frequency - a.frequency});
    for (var i = 0; i < 10; i++) {
       topVector[i] = topWords[i].name;
    }
    return topVector;
  }

  this.updateDictionary = function (newDictionary) {
    for (var i = 0; i < newDictionary.length; i++) {
      var notFound = true;
      for (var j = 0; j < this.dictionary.length; j++) {
        if(newDictionary[i].name == this.dictionary[j].name){
          this.dictionary[j].incfrq();
          notFound = false;
          break;
        }
      }
      if (notFound){
        this.dictionary.push(newDictionary[i]);
      }
    }
  }

  this.getDictionarySize = function () {
    return this.dictionary.length;
  }
}
