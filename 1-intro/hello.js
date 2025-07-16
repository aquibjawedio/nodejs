function sayHello(name) {
  console.log("Hello, " + name);
}

sayHello("Aquib");

console.log(window); //ReferenceError: window is not defined
// window is available in browser only
