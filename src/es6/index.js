function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

//es6

function newFunction2(name = "oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("juan", 45, "CO");

let hello = "Hello";
let world = "World";

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem =
  "ñalskdjñalskd. alñskdjñalsk. alñsjdañlkdjlsa. ñalsjdñlaskjd \n" +
  "otra frase epica necesaria";
console.log(lorem);

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase épica`;
console.log(lorem2);

let person = {
  name: "oscar",
  age: "32",
  country: "MX",
};

console.log(person.name, person.age);

let { name, age, country } = person;

console.log(name, age, country);

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];

console.log(education);

var hola = "Hola";

{
  var globalVar = "Globar var";
}

{
  let globalLet = "Global var";
  console.log(globalLet);
}

console.log(globalVar);
