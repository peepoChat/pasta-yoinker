const fs = require("fs");
let query = "";
fs.readFile("pastas.txt", "utf8", function (error, data) {
  let separator = data.split("\r\n");
  var sortedSeparator = separator.filter(function (elem, pos) {
    return separator.indexOf(elem) == pos;
  });
  for (let i = 0; i < sortedSeparator.length; i++) {
    query += "'" + sortedSeparator[i] + "',";
  }
  fs.appendFile("finalpastas.txt", query, function (error0) {
    if (error0) {
      console.log(error0);
    }
  });
});
