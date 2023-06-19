import { readdir } from "fs";
const list = async () => {
  // Write your code here
  readdir("src/fs/files", (err, res) => {
    if (err) throw new Error("FS operation failed");
    else console.log("files:", res);
  });
};

await list();
