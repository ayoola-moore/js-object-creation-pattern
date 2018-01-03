# js-object-creation-pattern
Javascript object creation patterns with examples (es6 and beyond)

_NOTE: the tags (e.g (p1), (p.a)) within the parenthesis; they are guides also used in the code comment section to help one follow along_

This are essential ways in which objects can be created in Javascript. 

Essentially we'll cover 4 patterns which are

1. Factory functions (p1)
2. Constructors (p2)
3. Prototype (p3)
4. Dynamic prototype (p4)

1. Factory function pattern essentially uses a function(s1) to return an object. 

It entails 3 basic steps
a. Initialize an EMPTY object (s2)
b. assign properties and methods to the object within the function(s3)
c. return the object (s4)

3. Prototype pattern essentially creates an object by assigning prototype to an empty function

It entails 2 basic steps
a. Create an empty function
b. assign the properties and method via prototype

The properties and method now created are passed from the parent to all newly created object via prototype