let promise = new Promise(
  function(resolve, reject) {
    console.log('I am promise'); // 1
    resolve(45)
  }
);

console.log('After declaration Promise'); // 2

promise.then((value) => {
  setTimeout(function() {
    console.log('I am from then resolved', value)
  }, 0) // 5
}); 

setTimeout(function() {
  console.log(" Fuck you from setTimeout "); // 6
}, 0)
console.log('23'); // 3
