const { readFile, writeFile } = require("fs");

console.log('start');

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstFile = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return err;
    }
    const secondFile = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${firstFile}, ${secondFile}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('task completed');
      }
    );
  });
});
console.log('starting next task');