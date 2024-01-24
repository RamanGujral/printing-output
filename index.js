//TASK 1
let a = 3;
let b = 5;
let c;
let result = `
let a = 3;
let b = 5;
let c;
--------
a + b = ${a + b}
a - b = ${a - b} 
a * b = ${a * b}
a / b = ${a / b}
a % b = ${a % b}
a += b = ${(a += b)}
a -= b = ${(a -= b)}
a *= b = ${(a *= b)}
a /= b = ${(a /= b)}
a %= b = ${(a %= b)}
a == b = ${a == b}
a != b = ${a != b}
a > b = ${a > b}
a < b = ${a < b}
!a && !c = ${!a && !c}
!a || !c = ${!a || !c}
`;
console.log(result);

//TASK 2
// Declare variables
const first_name = "Ramandeep";
const last_name = "Gujral";
const email = "gujr0002@algonquinlive.com";

// Create the concatenated expression
const output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;

// Print output in the browser's console
console.log(output);
