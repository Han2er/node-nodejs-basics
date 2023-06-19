import { readFile } from "fs";
const read = async () => {
  // Write your code here
  readFile("./src/fs/files/fileToRead.txt", "ascii", (err, res) => {
    if (err) console.log("Error:", err);
    else console.log("Result is:\n", res);
  });
};

await read();
