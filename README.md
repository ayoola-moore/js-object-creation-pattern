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

2. The constructor pattern. you create object by initiating a constructor and invoking new object using the new keyword

steps
a. create a constructor(s1)
b. Invoke a new object from the constructor(s2)

3. Prototype pattern essentially creates an object by assigning prototype to an empty function

It entails 2 basic steps
a. Create an empty function
b. assign the properties and method via prototype

The properties and method now created are passed from the parent to all newly created object via prototype

4. The dynamic prototype pattern essentially aims to create light weight object by creating method within the prototype object dynamically. Its very similarly to the constructor pattern

steps
1. create your constructor (s1)
2. instantiate your property (s2)
3. Set a conditional that checks and create method within the prototype property (s3)

