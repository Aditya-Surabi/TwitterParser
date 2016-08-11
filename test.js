function Word(name) {
  this.name = name;
  this.frequency = 1;
  this.incfrq = function(){
    this.frequency++;
  }
}

function User(name,dictionary) {
  this.name = name;
  this.dictionary = dictionary;
  var topVector = [];

  this.getTopWords = function () {
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




var arr = [];

var test = new Word("hello");
console.log("The word is: "+test.name+ " The frequency is: "+test.frequency);
test.incfrq();
console.log("The word is: "+test.name+ " The frequency is: "+test.frequency);

var str = ["how", "today","jim","tom"];
var arr = createDictionary(str);
var user1 = new User("jim",arr);
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
var d = [w,t,x,y,z,zz,abc,q,w,e,r,t];
for (var i = 0; i < user1.dictionary.length; i++) {
  console.log(user1.dictionary[i].name);
}

// user1.updateDictionary(t);
// user1.updateDictionary(w);
user1.updateDictionary(d);

for (var i = 0; i < user1.dictionary.length; i++) {
  console.log("Word: "+user1.dictionary[i].name+ " Frequency: "+user1.dictionary[i].frequency);
}

console.log("Top words: "+user1.getTopWords());



function createDictionary(str) {
  var dictionary = [];
  for (var i = 0; i < str.length; i++) {
    var temp = new Word(str[i]);
    dictionary.push(temp);
  }
  return dictionary;
}
