function greet() {              // deklarimi i nje funksioni
    console.log("Hello world!");
}
greet();   // thirrja e funksionit


// funksion me parametra
// deklarimi i nje funksioni
function person(name) {
    console.log("Hello " + name + ":)");
}
// deklarimi i nje variable te cfaredoshme
let name = prompt("Enter a name: ");
// thirrja e funksionit
person(name);


// shuma e dy numrave
// deklarimi i nje funksioni
function add(a, b) {
    console.log(a + b);
}
// thirrja e funksionit
add(3,4);
add(-2,9);

// katrori i nje numri
// funksioni eshte deklaruar brenda variables
let x = function (num) {
  return num * num 
};
console.log(x(4));


// mund te perdoret si vlere variable per nje variabel tjeter
let y = x(3);
console.log(y)

