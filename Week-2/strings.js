1. // strings are data types use to store words.

 // primitive data types used to represent data.
 //They are created by putting in double quotes ("")
 let firstName = "Joan"
 let secondName = "Adoc"
 let fullName = firstName + " " + secondName
 console.log(firstName,secondName,fullName)

 
 let sentence = "This is"
 sentence = sentence + " a sentence"
 console.log(sentence)
 // Output: John Doe
//Explanation: The + operator joins firstName, a space " ", and lastName into one string, fullName.


2. // Long literal strings

//Concept: Writing strings that span multiple lines, often using template literals or concatenation for readability.

 let longString = "This is a very long string that spans multiple lines " +
                 "and continues here for demonstration purposes.";

                 console.log(longString);
// Output: This is a very long string that spans multiple lines and continues here for demonstration purposes.

// Using template literals for multi-line strings (more common):
let multiLine = `This is a long string
that spans multiple lines
without needing concatenation.`;
console.log(multiLine);
// Output:
// This is a long string
// that spans multiple lines
// without needing concatenation.

//Explanation: Long strings can be concatenated with + or written as multi-line strings using template literals (backticks `), which preserve line breaks.


3. //Escape Sequences in Strings
//Concept: Special characters in strings prefixed with a backslash (\) to represent characters like quotes, newlines, or tabs.

let quote = "Joan said,\"Hello Hilda!\" ";

console.log(quote)

let newLine = "First line\nSecond line";
let tabbed = "Column1\tColumn2";
console.log(quote);    // Output: She said, "Hello, world!"
console.log(newLine);  // Output: 
// First line
// Second line
console.log(tabbed);   // Output: Column1    Column2
// Explanation:
// •	\" escapes a double quote to include it in the string.
// •	\n creates a new line.
// •	\t adds a tab space.


4. //Template Literals (Template Strings)

let name = "Allan";
let age = 16;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting)


 //String Methods

let text = "Hello, JavaScript!";

// Common string methods
console.log(text.toUpperCase());      // Output: HELLO, JAVASCRIPT!

console.log(text.toLowerCase());      // Output: hello, javascript!
console.log(text.slice(0, 5));        // Output: Hello
console.log(text.replace("JavaScript", "World")); // Output: Hello, World!
console.log(text.includes("Java"));    // Output: true
console.log(text.length);             // Output: 17

//Explanation: Template literals use ` instead of quotes, allow expressions inside ${}, and support multi-line strings without concatenation.


//String Data Type (Casting)

let number = 42;
let boolean = true;

// Casting to string
let str1 = String(number);       // Using String() function
let str2 = number.toString();    // Using toString() method
let str3 = boolean + "";         // Concatenation with empty string
console.log(str1);               // Output: "42"
console.log(str2);               // Output: "42"
console.log(str3);               // Output: "true"
console.log(typeof str1);        // Output: string

// Explanation:
// •	String(value): Converts any value to a string.
// •	.toString(): Method to convert numbers, booleans, etc., to strings (not available for null or undefined).
// •	Concatenation with "": Implicitly converts a value to a string._
// Practice Suggestions
// To solidify your understanding:
// 1.	String Concatenation: Write a program that combines your first name, last name, and a greeting message.
// 2.	Long Literal Strings: Create a multi-line string for a short story or poem using template literals.
// 3.	Escape Sequences: Write a string with quotes and a tabbed table-like output.
// 4.	Template Literals: Create a dynamic message using variables inside a template literal.
// 5.	String Methods: Experiment with trim(), split(), or substring() on a sample string.
// 6.	Casting: Convert a number and a boolean to strings, then combine them in a sentence.