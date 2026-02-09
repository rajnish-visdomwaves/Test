let a = 10;
let b = 20;
var myName = "Rithika";

let c = a + b;
console.log(c);
console.log(`The sum of ${a} and ${b} is ${c}`);
console.log(typeof(a));
console.log(typeof(name));




function sayHello(myName) {
    console.log(`Hello, ${myName}`)
}

sayHello(myName);


num1 = 10;
num2 = 40;
sum = num1 + num2;
console.log(`the sum of the two numbers is ${sum}`);

// Problem: Print "Hello JavaScript"
function printMessage() {
  console.log(`Hello JavaScript`)
}

printMessage();

// Problem: Return sum of two numbers
function add(a, b) {
  number1 = 3;
  number2 = 5;
  sum = number1 + number2;
  return sum;
}

console.log(add(3, 5)); // expected output: 8


// Problem: Print "Even" if number is even, else "Odd"
function checkEvenOdd(num) {
  // write code here
  if (num % 2 == 0) {
     console.log("Even") 
    }

     else{
        console.log("odd")
     }
}

checkEvenOdd(4); // Even
checkEvenOdd(7); // Odd

// Problem: Return the greater number
function findGreater(a, b) {
  // write code here
  if ( a> b) {
    console.log(a);
  }
  else{
    console.log(b);
  }
}
console.log(findGreater(10, 20)); // expected output: 20


