const grades = [5, 7, 8, 10, 6];

function getAverage(arr) {
  let sum = 0;
  for (const grade of arr) {
    if (typeof grade === "number") sum += grade;
  }
  return (sum /= arr.length);
}

console.log(getAverage(grades));

const person = {
  name: "Alice",
  age: 29,
  grades: [10, 9, 9, 10, 10],
  isStudent: true,
  greeting: function () {
    console.log("Hello" + this.name + "!");
  },
  birthday: function () {
    this.age += 1;
    console.log("happy " + this.age + "birthday" + this.name);
  },
};

console.log(person.name);
person.greeting();
person.birthday();
