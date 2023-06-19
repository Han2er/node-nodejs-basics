import { copyFile, cp } from "fs";
const copy = async () => {
  // Write your code here
  cp(
    "src/fs/files",
    "src/fs/files_copy",
    { recursive: true, errorOnExist: true, force: false },
    (err, res) => {
      if (err) throw new Error("FS operation failed");
      else console.log("Copy Done!");
    }
  );
};

await copy();
