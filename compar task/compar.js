let obj1 = { name: "person", age: 5 };
let obj2 = { age: 5, name: "person1" };

const areEqual = JSON.stringify(obj1) === JSON.stringify(obj2);

if (areEqual) {
  console.log("The objects are equal.");
} else {
  console.log("The objects are not equal.");
}
