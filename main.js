//construct an object
function Person(firstname, lastname, dob) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.dob = new Date(dob);
}
//methods
Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}
Person.prototype.getfullname = function() {
  return `${this.firstname} ${this.lastname}`;
}

//Instantiate object
const person1 = new Person('Mary', 'Smith', '2/2/1990' );
const person2 = new Person('larry', 'page', '3/6/1980')

console.log(person1.getfullname());
console.log(person2.getBirthYear());


//ES6 standards -- constructor function
class n_Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getfullname() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//instantiate object
const person3 = new n_Person('kate', 'Smidth', '2/2/1987');
const person4 = new n_Person('krish', 'rian', '3/6/1988')

console.log(person3.getfullname());
console.log(person4.getBirthYear());
