import { unlink } from "fs";
const remove = async () => {
  // Write your code here
  unlink("src/fs/files/fileToRemove.txt", (err, res) => {
    // if (err) console.log(err);
    if (err) throw new Error("FS operation failed");
    else console.log("Deleted", res);
  });
};

await remove();
