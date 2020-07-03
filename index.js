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
  fs.appendFile("pasta.txt", req.responseText, function (error) {
    if (error) console.log(error);
  });
}
let lines = [];
fs.readFile("pasta.txt", "utf8", (err, data) => {
  let separator = data.split("\n");
  var sortedSeparator = separator.filter(function (elem, pos) {
    return separator.indexOf(elem) == pos;
  });
  for (let i = 0; i < sortedSeparator.length; i++) {
    lines.push(sortedSeparator[i]);
  }
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    if (
      line[i].indexOf('<span id="quote_display_content_${count}">') !== -1 &&
      line[i].indexOf("</span>") !== -1
    ) {
    }
  }
});
