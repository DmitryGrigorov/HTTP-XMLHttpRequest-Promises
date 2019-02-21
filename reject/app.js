let promise = new Promise(
  function(resolve, reject) {
    resolve("1237182")
    // throw Error("Warning")
  }
);

promise.then(
  null,
  function(err) {
    console.log('Error: ', err);

    return err;
  }
).finally((value) => {
  console.log('Value from finally: ', value);
});