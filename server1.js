console.log("radhe radhe");
var os = require("os");
var fs = require("fs");
var _ = require("lodash");
var fnImport = require("./add.js");
console.log(os.userInfo().username);
fs.appendFile(
  "firstMessage.txt",
  "Hello " + os.userInfo().username + "!\n",
  () => console.log("file is created")
);

console.log(fnImport.add(200, 300));

const arr = [1, 1, 2, 3, 4, 3, 4, 5, "cheeku", "chehak"];

console.log(_.uniq(arr));
