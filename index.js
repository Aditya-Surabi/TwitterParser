console.log("Hello World");
var str = "How are you today?";
var stopWords = ["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"];
console.log(str);
str = splitSentence(str);
console.log(str);
str = removeStopWords(str, stopWords);


console.log(str);

function splitSentence(str) {
    str = str.split(" ");
    return str;
}

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

function Word(name) {
  this.name = name;
  this.frequency = 1;
  this.incfrq = function(){
    this.frequency++;
  }
}
