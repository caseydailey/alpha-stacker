// Create an array that contains the letters of the alphabet

var alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var stack = [];
var spaceStack = [];
//Create a stackLetters function that should console.log() rows of letters. 
//It should take an array containing the letters of the alphabet and output them in the developer console.

//   a
//   ab
//   abc
//   abcd
//   abcde
//   abcdef
//   etc...

// The stackLetter function should accept the array as the sole argument

function stackLetters (array) {
     
     // Write a `for` loop that iterates over the array argument and outputs the letters.

     for (i = 0; i < array.length; i++) {

     	stack += array[i];
     	console.log(stack);
     }
}

// Invoke the function and pass in the array
stackLetters(alphabet);
  

//Then add logic to stackLetters that places a space after every third letter. 
//This will require you to do some basic math in JavaScript, and use an if statement.
//
//Your job is to read the following English statement and write the equivalent in JavaSript code to make it work.
//
//    If the current value of the counter variable can be evenly divided by 3 
//    - using the JavaScript remainder operator - 
//    then add a single space to the output.
//
//    a
//    ab
//    abc
//    abc d
//    abc de
//    abc def
//    abc def g
//    abc def gh
//    abc def ghi
//etc...
//


function stackAndSpace(array) {
     
     // Write a `for` loop that iterates over the array argument and outputs the letters.
     
     for (i = 0; i < array.length; i++) {
     	
     	spaceStack += array[i];
     	console.log(spaceStack);

     	if ((i + 1) % 3 === 0) {
     		
     	    console.log(spaceStack += " ");
     	}
     }
};

stackAndSpace(alphabet);



