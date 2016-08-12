var arr = [];

//Testing Word object
var test = new Word("hello");
console.log("The word is: "+test.name+ " The frequency is: "+test.frequency);
test.incfrq();
console.log("The word is: "+test.name+ " The frequency is: "+test.frequency);
//

//Testing split and remove
var stopWords = ["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"];
var str = "How are you today?";
var str = splitSentence(str);
var str = removeStopWords(str,stopWords);
console.log("Str after spit and remove: "+str);
//

//Testing createDictionary
var str2 = ["how", "today","jim","tom"];
var arr = createDictionary(str2);
//

//Testing User object
var user1 = new User("jim");
user1.updateDictionary(arr);
var w = new Word("how");
var t = new Word("hey");
var x = new Word("how");
var y = new Word("how");
var z = new Word("how");
var zz = new Word("hey");
var abc = new Word("tom");
var q = new Word("rep");
var w = new Word("life");
var e = new Word("yolo");
var r = new Word("dip");
var t = new Word("dippy");
var p = new Word("hippy");
var d = [w,t,x,y,z,zz,abc,q,w,e,r,t,p];
for (var i = 0; i < user1.dictionary.length; i++) {
  console.log(user1.dictionary[i].name);
}
user1.updateDictionary(d);

for (var i = 0; i < user1.dictionary.length; i++) {
  console.log("Word: "+user1.dictionary[i].name+ " Frequency: "+user1.dictionary[i].frequency);
}
//

//Testing topWords and dictionary size
console.log("Top words: "+user1.getTopWords());
console.log("Size of dictionary: "+user1.getDictionarySize());
//

// ----------------------------- definitions -----------------------------------//

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
