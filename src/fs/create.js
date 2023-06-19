import { writeFile } from "fs";
const create = async () => {
  // Write your code here
  writeFile(
    "./src/fs/files/fresh.txt",
    "I am fresh and young",
    { flag: "ax" },
    (err, res) => {
      if (err) throw new Error("FS operation failed");
      else console.log("Created", res);
    }
  );
};

await create();
