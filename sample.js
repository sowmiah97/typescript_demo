// Static type checking
var message = "Hello";
message.toLowerCase();
message(); // This expression is not callable. Type 'String' has no call signatures
var object = {
    name: 'Sowmiah',
    age: 25
};
object.job = 'Front-end developer'; //Property 'job' does not exist on type '{ name: string; age: number; }'.ts(2339)
// Explicit Typing
/* boolean */
var booleanVar = true;
booleanVar = "Hello"; //Type 'string' is not assignable to type 'boolean'
/* string */
var stringVar = "hello";
stringVar = true; //Type 'boolean' is not assignable to type 'string'
/* Array */
var arr = [1, 2, 3, 4];
arr.push("hello"); //Argument of type 'string' is not assignable to parameter of type 'number'
/* Parameter type annotation */
function greet(name, age) {
    return "Hi, I am ".concat(name, " and I am ").concat(age, " years old");
}
greet("Sowmiah", "25"); // Argument of type 'string' is not assignable to parameter of type 'number'.
/* Return type annotation */
function printHelloWorld() {
    return 1; // Type 'number' is not assignable to type 'string'.
}
//Object types - to specify type of the object ?: denotes optional parameter
function printCoordinates(coordinates) {
    return "Coordinates are ".concat(coordinates.x, ", ").concat(coordinates.y);
}
;
printCoordinates({ x: 2 });
printCoordinates({ x: 2, y: 10 });
printCoordinates({ x: 2, y: "hello" }); //Type 'string' is not assignable to type 'number' // The expected type comes from property 'y' which is declared here on type '{ x: number; y?: number | undefined; }'
//Union - combination of one or more types together 
function receiveStringOrNumber(x) {
    x.toUpperCase; //Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'.
    if (typeof x === 'string') { // Use typeof if you want to perform type specific operation
        return x.toUpperCase;
    }
    else {
        return x;
    }
}
receiveStringOrNumber(1);
receiveStringOrNumber("1");
receiveStringOrNumber({ number: "1" }); //Argument of type '{ number: string; }' is not assignable to parameter of type 'string | number'.ts(2345)
function printNumberCoordinates(obj) {
    return "The Coordinates are ".concat(obj.x, " and ").concat(obj.y);
}
printNumberCoordinates({ x: 10, y: 100 });
function printThreeDimension(obj) {
    return "The Coordinates are ".concat(obj.x, ", ").concat(obj.y, " and ").concat(obj.z);
}
printThreeDimension({ x: 1, y: 2, z: 3 });
printThreeDimension({ x: 1, y: 2, z: 3, g: 4 }); //bject literal may only specify known properties, and 'g' does not exist in type 'threeDimension'.
printThreeDimension({ x: 1, y: 2 }); //Property 'z' is missing in type '{ x: number; y: number; }' but required in type '{ z: number; }'
function printID(id) {
    console.log("The id is ", id);
}
printID(1);
printID("1");
printID([1]);
function welcomeVisitor(visitors) {
    if (Array.isArray(visitors)) { // to check if its an array use Array.isArray
        console.log("Hello, " + visitors.join(" and "));
    }
    else {
        console.log("Hello", visitors);
    }
}
welcomeVisitor(["sowmiah", "soundarya"]);
welcomeVisitor("sowmiah");
function getAnimal(animal) {
    return "".concat(animal.name, " is extinct: ").concat(animal.extinct);
}
getAnimal({ name: "bear" }); //Argument of type '{ name: string; }' is not assignable to parameter of type 'Animal'.
getAnimal({ name: "Bear", extinct: false });
getAnimal({ name: "Bear", extinct: false, is_domestic: false }); // Object literal may only specify known properties, and 'is_domestic' does not exist in type 'Animal'
// strictNullChecks to handle null/undefined handling
var arrayOfObjects = [{ name: "Sowmiah", gender: "F" }, { name: "Soundarya", gender: "F" }];
var chosenObject = arrayOfObjects.find(function (ele) { return ele.name === "Meena"; });
chosenObject.gender; // Object is possibly undefined. If strictNullChecks in tsconfig is false, this undefined will not be considered;
