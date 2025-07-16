// We can use require or import (es-6 module) to get anything from other files
// here will be using import because its modern => go in package.json and set type: "module"

import { add, divide, multiply, subtract } from "./math.js";

console.log("Add : ", add(2, 3));

console.log("subtract : ", subtract(2, 3));

console.log("multiply : ", multiply(2, 3));

console.log("divide : ", divide(2, 3));
