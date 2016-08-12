# TwitterParser

#Overview of structure

##"User": 

- Name (String)
- Dictionary (Array of "Words")
- getTopWords (function) [Sorts dictionary return top 10]
- updateDictionary (function) [adds dictionary of new words to user's existing dictionary else increments the frequency of repeated words]
- getDictionarySize (function) [returns # of words in a user's dictionary]

##"Word"
- Name (String)
- frequency (Integer)
- incfrq (function) [increments frequency by 1]

##"Parsing tweets"
- Call to the Twitter API return a tweet.
- Split tweet into an array comprised of the words found in the tweet though the splitSentence() function.
- Remove "stop words" from the array using removeStopWords() function.
- Convert each element in the array into a "Word" object.
- This final array is added to the user's dictionary using the updateDictionary() function.




#Written implementations of unfinished tasks

1) fetching tweets from Twitter. twittertest.js contains a succesful implementation of using a GET request to retrieve tweets from a given user though th Twitter API.  





#Places for improvement:

The updateDictionary function and removeStopWords function comprise of nested for loops where the worst case time complexity is O(n^2).
Both work in a similar way where two arrays are iterated and compared to look for matches. A potential way to improve this is to store
one of the arrays (the one that is established ie. the tweet array for removeStopWords and the user's current dictionary for updateDictionary)
into a hashtable. When iterating through the second array a hastable search is performed to determine whether that element in the
second array exists in the first. A collison in the table would indicate that the value exists and the appropriate action can be executed (remove for removeStopWords and either increase frequency or insert word for updateDicitionary).
Hashtable search and insertion run in O(1). 
