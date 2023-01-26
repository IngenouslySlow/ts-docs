// INTERFACES
// INTERFACES LETS YOU CREATE A STRUCTURE OF HOW YOUR OBJECT SHOULD LOOK LIKE
interface Car {
  name: string;
  brand: string;
  year: number;
}
// NOW USING THIS INTERFACE LETS CREATE A CAR
const modelCar: Car = {
  name: 'Skoda',
  brand: 'Superb',
  year: 2006,
};
console.log(modelCar);

// INTERFACES CAN ALSO BE USED WITH THE CLASSES
class CarModel {
  name: string;
  brand: string;
  year: number;
  constructor(name, brand, year) {
    this.name = name;
    this.brand = brand;
    this.year = year;
  }
}
const car: Car = new CarModel('Skoda', 'Superb', 2006);
console.log(car);

// INTERFACES WITH FUNCTIONS / PARAMETERS
function getCarModel(): Car {
  return {
    name: 'Skoda',
    brand: 'Superb',
    year: 2006,
  };
}

console.log(getCarModel());

const getCarYear = (car: Car) => {
  return car.year;
};

console.log(getCarYear({ name: 'Skoda', brand: 'Superb', year: 2006 }));

// <-------------------------------------- Types ------------------------------------------>
// USE INTERFACES AS MUCH AS POSSIBLE AND TYPES ONLY IN A SPECIAL CASE
// TYPES USING UNIONS "|"
type MyBool = true | false;

// USE CASES OF UNIONS
type carDoor = 'open' | 'close' | 'broken';
type carLock = 'locked' | 'unlocked';

function getCarLockState(state: carLock) {
  return state;
}
console.log(getCarLockState('locked')); // Only accepts locked or unlocked as it's parameter

// CHECKING TYPE OF
function wrapInArray(obj: string | string[]) {
  if (typeof obj === 'string') {
    return [obj];
  }
}
console.log(wrapInArray('wrapped'));

// GENERICS
// GENERICS PROVIDE VARIABLES TO TYPES. ARRAY WITHOUT GENERICS COULD CONTAIN ANYTHING BUT ARRAY WITH GENERICS
// CAN DESCRIBE THE VALUES THAT ARRAY CONTAINS
type strArray = Array<string>;
type numArray = Array<number>;
type objArray = Array<{ model: string }>;

// WE CAN ALSO DECLARE OWN TYPES USING GENERICS
interface Bike<Type> {
  getModel: (name: Type) => void;
  getType: () => Type;
}

// DECLARE IS A KEYWORD TO TELL TYPE SCRIPT NOT TO WORRY ABOUT CONST INITIALIZATION
declare const bike: Bike<string>;
// NOW AS WE DELCARED THAT IT IS A TYPE STRING, WE CAN ONLY PASS STRINGS OR ELSE WE GET TYPE ERRORS
// bike.getModel(2); // Can only pass string

// <-------------------------------------- Structural Typing ------------------------------------------>
// ONE OF TYPESCRIPT’S CORE PRINCIPLES IS THAT TYPE CHECKING FOCUSES ON THE SHAPE THAT VALUES HAVE. THIS IS SOMETIMES CALLED “DUCK TYPING” OR “STRUCTURAL TYPING”.
interface Length {
  width: number;
  height: number;
}

function logLength(val: Length) {
  console.log(`Width: ${val.width} & Height: ${val.height}`);
}

const result = { width: 21, height: 22 };

logLength(result);

// THE RESULT VARIABLE IS NEVER DECLARED TO BE A RESULT TYPE. HOWEVER, TYPESCRIPT COMPARES THE SHAPE OF RESULT TO THE SHAPE OF POINT IN THE TYPE-CHECK. THEY HAVE THE SAME SHAPE, SO THE CODE PASSES.
const result2 = { width: 21, height: 21, breadth: 22 }; // Only logs width and height and doesn't care about the additional breadth
