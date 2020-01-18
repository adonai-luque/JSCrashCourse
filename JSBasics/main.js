//Comment
/*Multi
Line
Comment*/

//console.log('Hello World');
//console.error('This is an error');
//console.warn('This is a warn');

// var, let, const - var deprecated
const age = 30;
//age = 31;
// Error - Assignment to constant
console.log(age);

let ageOfFather = 70;
ageOfFather = 71;
console.log(ageOfFather);

let score;
score = 10;
score++;
console.log(score);
++score;
console.log(score);

// String, Numbers, Boolean, null, undefined, Symbol

const name = 'John';
//const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
// typeof null will return object when it should return null
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// Concatenation
//console.log('My name is ' + name + 'and I am ' + age) old way
console.log(`My name is ${name} and I am ${age}`);
//Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

//
const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));

const t = 'technology, computers, it, code';
console.log(t.split(', '));

//Arrays

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 'peaches'];
console.log(fruits);
console.log(fruits[1]);
fruits[4] = 'grapes';
console.log(fruits);
fruits.push('mangos');
console.log(fruits);
fruits.unshift('strawberries');
console.log(fruits);
fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'));

//Object literals
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}

console.log(person);
console.log(person.hobbies, person.lastName);

console.log(person.hobbies[1]);

const { firstName, lastName, address: { city }} = person;
console.log(firstName);
console.log(lastName);
console.log(city);

person.email = 'john@gmail.com';

console.log(person);

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appointment',
    isCompleted: false
  }
]

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For
for(let i = 1; i <= 10; i++) {
  console.log(`For Loop Number ${i}`);
}

for(let i = 0; i < todos.length; i++) {
  console.log(`To do ${i+1}: ${todos[i].text}`);
}

for(let todo of todos){
  console.log(todo.text);
}

//forEach, map, filter
console.log('forEach:');
todos.forEach(function(todo) {
  console.log(todo.text);
});

console.log('map:');
const todoText = todos.map(function(todo) {
  return todo.text
});
console.log(todoText);

console.log('filter:');
const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
});
console.log(todoCompleted);

console.log('filter and map:');
const todoCompletedMapped = todos.filter(function(todo) {
  return todo.isCompleted === true;
}).map(function(todo) {
  return todo.text
})
console.log(todoCompletedMapped);

//While
let i = 0;
while (i < 10) {
  console.log(`While Loop Number ${i}`);
  i++;
}

//Conditionals
const xx = 11;

if (xx === 10) {
  console.log('xx is 10');
}
else if (xx > 10) {
  console.log('xx is greater than 10');
}
else {
  console.log('xx is less than 10');
}

const xxx = 6;
const yyy = 11;

if (xxx > 5 || yyy > 10) {
  console.log('xxx is more than 5 or yyy is more than 10')
}

if (xxx > 5 && yyy > 10) {
  console.log('xxx is more than 5 and yyy is more than 10')
}

//Ternary operator
const xxxx = 10;

const color = xxxx > 10 ? 'red' : 'blue';
console.log(color);

//Switch
switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is NOT red NOR blue');
    break;
}

//Functions
function addNums(num1 = 1, num2 = 2) {
  console.log(num1 + num2);
}

addNums(4, 5);
addNums();

function addNumss(num1 = 1, num2 = 2) {
  return (num1 + num2);
}

console.log(addNumss(6, 7));
console.log(addNumss());

// Arrow function
const addNumsss = (num1 = 1, num2 = 2) => (num1 + num2);

console.log(addNumsss(6, 7));
console.log(addNumsss());

const addNumssss = (num1 = 1) => (num1 + 5);

console.log(addNumssss(6));
console.log(addNumssss());

todos.forEach((todo) => console.log(todo));

//Object Oriented Programming
/*function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  /this.getbirthYear = function() {
    return this.dob.getFullYear();
  }
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }/
}

//Prototypes
Person.prototype.getbirthYear = function() {
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}*/

//ES6 with Classes
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getbirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//Instantiate object

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2);

console.log(person2.dob);
console.log(person2.dob.getFullYear());

console.log(person1.getbirthYear());
console.log(person2.getFullName());

