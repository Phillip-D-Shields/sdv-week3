let green;
let yellow;
let red = true;

if (green) {
  console.log("green means go");
} else if (yellow) {
  console.log("slow down");
} else if (red) {
  console.log("stop");
} else {
  console.log("no color detected, traffic light is broken");
}

// ___________________________________________________________
let a = 25;
let b = 76;
let c = 12;

if (a > c) {
  console.log("a > c");
}
if (b < a) {
  console.log("b < a");
}

if (c === a) {
  console.log("c === a");
} else if (b != c) {
  console.log("b != c");
} else {
  console.log("nada");
}

// journal about'24'!= 24

const x = { fun: true };
const y = { fun: true };
console.log(x === y);
console.log(x == y);

const z = y;
console.log(z === y);

let apples = 1;

apples
  ? console.log("yay, you got apples!")
  : console.log("no apples for you :(");

let wspace = "";

wspace ? console.log("yes") : console.log("no :(");

// switch statement
const name = "Phill";
const greeting = `Hello ${name}`;

switch (name) {
  case "Noel":
    console.log(`${greeting}, you suck`);
    break;
  case "Phill":
    console.log(`${greeting}, you rule`);
    break;
  case "Ali":
    console.log(`${greeting}, you give the best grades`);
    break;
  default:
    console.log(`${greeting}, i dont know you`);
    break;
}

// switch with multi case
const target = "g";
const phrase = `the target is ${target}`;

switch (target) {
  case "a":
  case "b":
  case "c":
  case "d":
  case "e":
    console.log(`${phrase}, it is in the first multi-case set`);
    break;
  default:
    console.log(
      `${phrase}, it is not in any of the multi-case sets. its rogue`
    );
    break;
  case "f":
  case "g":
  case "h":
  case "i":
  case "j":
    console.log(`${phrase}, it is in the second multi-case set`);
}

function findMyAge(yob, yt) {
  return console.log(yt - yob);
}

findMyAge(1982, 2020);
