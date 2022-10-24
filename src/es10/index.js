{
  let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

  console.log(array.flat(2));
}
let array = [1, 2, 3, 4, 5];

console.log(array.flatMap((value) => [value, value * 2]));

let hello = "              Hello world";
console.log(hello);
console.log(hello.trimStart());

let hello1 = "hello world           ";
console.log(hello1);
console.log(hello1.trimEnd());

try {
} catch (error) {
  error;
}
let entries = [
  ["name", "oscar"],
  ["age", 32],
];
console.log(Object.fromEntries(entries));

let mySymbol = "my symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
