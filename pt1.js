/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/


/* EXERCISE 1

/* The main datatypes in javascript are numbers, strings, booleans, undefined and null.  */ 
/* They are all like storage boxes (variable) only with different labels (datatype) */
/* A number type can hold a number value: ex. let apples = 4. No quotation marks needed, when declared only initiate a numerical value.
/* A string type can hold all sorts of characters, from letters to symbols ex. /;][>?$%^. It is moslty used for letters to store words and sentences. */
/* A boolean type can only hold 2 values: positive and negative. It can be written in a numerical format also ex. isHungry = true */
/* An undefined type a value that is assigned to any declared but not initiated variable that javascript automatically creates by default ex. let profileImage = undefined. So the profile image might be empty because the account was created but no image was assigned just yet. That's the idea of undefined and why you would encounter that.  */
/* A null type holds an explicit null value. This could be caused by someone explicitly deleting their profile image now. ex. let profileImage = null */*/

/* EXERCISE 2
  A variable is like a storage unit that can be manually configured to hold different sorts of content.
*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

console.log(12 + 20);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

// let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

// let name = "John Doe"

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let h = 12 - x;

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

// let name1 = "john"
// let name2 = "John"

// console.log(name1 === name2) 

// console.log(name1.toLowerCase === name2.toLowerCase());


/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

// let x = 3;

// if (x < 10) {
//     console.log(x + "three")
// }

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

// let pig = blue;

// let color = pig === pink ? "Normal Pig" : "Super Blue Pig"