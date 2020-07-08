const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require("fs");
let req = new XMLHttpRequest();
req.open(
  "GET",
  "https://www.twitchquotes.com/copypastas/labels/classic",
  false
);
req.send(null);
if (req.status == 200) {
  fs.appendFile("parsedsite.txt", req.responseText, function (error) {
    if (error) console.log(error);
  });
}
let lines = [];
let sortedLines = [];
fs.readFile("parsedsite.txt", "utf8", (err, data) => {
  let separator = data.split("\n");
  var sortedSeparator = separator.filter(function (elem, pos) {
    return separator.indexOf(elem) == pos;
  });
  for (let i = 0; i < sortedSeparator.length; i++) {
    lines.push(sortedSeparator[i]);
  }
});
setTimeout(() => {
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    if (
      lines[i].indexOf(`<span id="quote_display_content_${count}">`) !==
      -1 /* &&
      lines[i].indexOf("</span>") !== -1 //2 6 9 17 23 doesnt work will do +2 on 1 5 8 16 22 */
    ) {
      if (
        count == 1 ||
        count == 5 ||
        count == 8 ||
        count == 16 ||
        count == 22
      ) {
        count + 2;
        sortedLines.push(lines[i]);
      } else {
        count++;
        sortedLines.push(lines[i]);
      }
      console.log(count);
    }
    //doesnt work well
  }
  console.log("sordetlines - " + sortedLines.length);
  for (let i = 0; i < sortedLines.length; i++) {
    fs.appendFile("pastas.txt", sortedLines[i] + "\r\n", function (error) {
      if (error) console.log(error);
    });
  }
}, 3000);
