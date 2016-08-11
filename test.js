function Word(word) {
  this.word = word;
  this.frequency = 1;
  this.incfrq = function(){
    this.frequency++;
  }
}


var arr = [];

var test = new Word("hello");
console.log("The word is: "+test.word+ " The frequency is: "+test.frequency);
test.incfrq();
console.log("The word is: "+test.word+ " The frequency is: "+test.frequency);

//console.log(test.word);
arr.push(test);
console.log(arr[0].frequency);
