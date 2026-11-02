function isEven(num) {
  return num % 2 === 0;
}
// checks if the number divides equally by 2 - if so that number is returned

if (isEven(2)) {
  console.log("2 is an even number");
}

function greet(name) {
  console.log("Hello " + name);
}

greet("Melissa");

function birthday() {
  let age = 0;
  console.log("Happy Birthday!");
  age += 1;
  console.log(age);
  return age;
}

birthday();

birthday();

Math.max(2, 3, 4); // finds the maximum number of the params it was given

console.log(Math); // will display in the console all the functions you can use from Math

function max(a, b) {
  if (a >= b) {
    return a;
  }
  return b;
}
