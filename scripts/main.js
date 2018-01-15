function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));
console.error("error");
console.warn("warn");
console.info("info");

const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

console.table(dogs);

dogs.forEach(dog => {
  // console.group(dog.name);
  console.groupCollapsed(dog.name);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(dog.name);
});
