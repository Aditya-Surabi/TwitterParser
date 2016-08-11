# TwitterParser

Places for improvement:

The updateDictionary function and removeStopWords function comprise of nested for loops where the worst case time complexity is O(n^2).
Both work in a similar way where two arrays are iterated and compared to look for matches. A potential way to improve this is to store
one of the arrays (the one that is established ie. the tweet array for removeStopWords and the user's current dictionary for updateDictionary)
into a hashtable. When iterating through the second array the values a  hastable lookup is performed to determine whether that element in the
second array exists in the first. A collison in the table would indicate that the value exists and the appropriate action can be executed (remove for removeStopWords and increase frequency for updateDicitionary).
Hashtable search and insertion (in the case of updateDictionary where the word does not already exist) run in O(1). 