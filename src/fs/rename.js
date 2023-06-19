import * as fs from "fs";
const rename = async () => {
  // Write your code here
  fs.rename(
    "src/fs/files/wrongFilename.txt",
    "src/fs/files/properFilename.md",
    (err, res) => {
      if (err) throw new Error("FS operation failed");
      else console.log("Reanme Done!");
    }
  );
};

await rename();
