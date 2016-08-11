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

  this.updateDictionary = function (word) {
    var notFound = true;
    //Check if the word already exists
    for (var i = 0; i < this.dictionary.length; i++) {
      if (word.name == this.dictionary[i].name){
        this.dictionary[i].incfrq();
        notFound = false;
        break;
      }
    }
    if (notFound){
      this.dictionary.push(word);
    }
  }
}


var arr = [];

var test = new Word("hello");
console.log("The word is: "+test.name+ " The frequency is: "+test.frequency);
test.incfrq();
console.log("The word is: "+test.name+ " The frequency is: "+test.frequency);

var str = ["how", "today"];
var arr = createDictionary(str);
var user1 = new User("jim",arr);
var w = new Word("how");
var t = new Word("hey");
for (var i = 0; i < user1.dictionary.length; i++) {
  console.log(user1.dictionary[i].name);
}

user1.updateDictionary(t);
user1.updateDictionary(w);

for (var i = 0; i < user1.dictionary.length; i++) {
  console.log("Word: "+user1.dictionary[i].name+ " Frequency: "+user1.dictionary[i].frequency);
}



function createDictionary(str) {
  var dictionary = [];
  for (var i = 0; i < str.length; i++) {
    var temp = new Word(str[i]);
    dictionary.push(temp);
  }
  return dictionary;
}
