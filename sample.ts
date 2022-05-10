// Static type checking
const message = "Hello";
message.toLowerCase();
message(); // This expression is not callable. Type 'String' has no call signatures

const object = {
    name: 'Sowmiah',
    age: 25
}
object.job='Front-end developer'; //Property 'job' does not exist on type '{ name: string; age: number; }'.ts(2339)

// Explicit Typing
/* boolean */
let booleanVar: boolean = true;
booleanVar="Hello"; //Type 'string' is not assignable to type 'boolean'

/* string */
let stringVar: string = "hello";
stringVar=true //Type 'boolean' is not assignable to type 'string'

/* Array */
let arr: number[]= [1, 2,3,4];
arr.push("hello"); //Argument of type 'string' is not assignable to parameter of type 'number'

/* Parameter type annotation */
function greet(name: string, age: number) {
    return `Hi, I am ${name} and I am ${age} years old`
}
greet("Sowmiah", "25"); // Argument of type 'string' is not assignable to parameter of type 'number'.

/* Return type annotation */
function printHelloWorld(): string {
    return 1; // Type 'number' is not assignable to type 'string'.
}

//Object types - to specify type of the object ?: denotes optional parameter
function printCoordinates(coordinates: {x: number, y?: number}): string {
    return `Coordinates are ${coordinates.x}, ${coordinates.y}`;
};
printCoordinates({ x: 2 });
printCoordinates({ x: 2, y: 10 });
printCoordinates({ x: 2, y: "hello"}); //Type 'string' is not assignable to type 'number' // The expected type comes from property 'y' which is declared here on type '{ x: number; y?: number | undefined; }'

//Union - combination of one or more types together 
function receiveStringOrNumber(x: string | number) {
    x.toUpperCase; //Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'.
    if(typeof x === 'string') { // Use typeof if you want to perform type specific operation
        return  x.toUpperCase;
    } else {
        return x;
    }
}
receiveStringOrNumber(1);
receiveStringOrNumber("1");
receiveStringOrNumber({ number: "1" }); //Argument of type '{ number: string; }' is not assignable to parameter of type 'string | number'.ts(2345)

// Type aliases -  Define your own type and use it anywhere for type declaration. if it's used many times it can be declared as type alias and be reused
type twoDimension = { x: number, y: number };
function printNumberCoordinates(obj: twoDimension) {
    return `The Coordinates are ${obj.x} and ${obj.y}`;
}
printNumberCoordinates({ x: 10, y: 100});
type threeDimension = twoDimension & { // Extending in type aliases
    z: number;
}
function printThreeDimension(obj: threeDimension) {
    return `The Coordinates are ${obj.x}, ${obj.y} and ${obj.z}`;
}
printThreeDimension({ x: 1, y: 2, z: 3});
printThreeDimension({ x: 1, y: 2, z: 3, g: 4}); //bject literal may only specify known properties, and 'g' does not exist in type 'threeDimension'.
printThreeDimension({ x: 1, y: 2 }); //Property 'z' is missing in type '{ x: number; y: number; }' but required in type '{ z: number; }'


type ID = string | number;
function printID(id: ID) {
    console.log("The id is ", id);
}
printID(1);
printID("1");
printID([1]);

type visitor = string[] | string;
function welcomeVisitor(visitors: visitor) {
    if(Array.isArray(visitors)) { // to check if its an array use Array.isArray
        console.log("Hello, " + visitors.join(" and ")); 
    } else {
        console.log("Hello", visitors);
    }
}
welcomeVisitor(["sowmiah", "soundarya"]);
welcomeVisitor("sowmiah");

//Interface - just another way to name an object type
interface AnimalName {
    name: string
}
interface Animal extends AnimalName {
    extinct: boolean;
}
function getAnimal(animal: Animal) {
    return `${animal.name} is extinct: ${animal.extinct}`;
}
getAnimal({ name: "bear" }); //Argument of type '{ name: string; }' is not assignable to parameter of type 'Animal'.
getAnimal({ name: "Bear", extinct: false });
getAnimal({ name: "Bear", extinct: false, is_domestic: false }); // Object literal may only specify known properties, and 'is_domestic' does not exist in type 'Animal'


// strictNullChecks to handle null/undefined handling
let arrayOfObjects = [ { name: "Sowmiah", gender: "F" }, {name: "Soundarya", gender: "F"}]; 
let chosenObject = arrayOfObjects.find((ele)=>{ return ele.name === "Meena";});
chosenObject.gender; // Object is possibly undefined. If strictNullChecks in tsconfig is false, this undefined will not be considered;