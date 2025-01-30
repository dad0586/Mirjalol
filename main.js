
const person = {
  firstname : "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};
delete person.lastname;

person.nationality = "English";
  console.log(person.firstname + " is " + person.lastname + person.nationality);