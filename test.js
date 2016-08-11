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
}


var arr = [];

var test = new Word("hello");
console.log("The word is: "+test.name+ " The frequency is: "+test.frequency);
test.incfrq();
console.log("The word is: "+test.name+ " The frequency is: "+test.frequency);

var str = ["how", "today"];
var arr = createDictionary(str);
var user1 = new User("jim",arr);

for (var i = 0; i < user1.dictionary.length; i++) {
  console.log(user1.dictionary[i].name);
}



function createDictionary(str) {
  var dictionary = [];
  for (var i = 0; i < str.length; i++) {
    var temp = new Word(str[i]);
    dictionary.push(temp);
  }
  return dictionary;
}
