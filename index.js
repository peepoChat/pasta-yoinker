const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require("fs");
console.log("Started.");
try {
  let req = new XMLHttpRequest();
  req.open(
    "GET",
    `https://www.twitchquotes.com/copypastas?page=10&popular=true`,
    false
  );
  req.send(null);
  if (req.status == 200) {
    fs.appendFile("parsedsite.txt", req.responseText, function (error) {
      if (error) console.log(error);
    });
  } else if (req.status !== 200) {
    console.log("Req error: " + req.status);
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
        lines[i].indexOf(`<span id="quote_display_content_${count}">`) !== -1
      ) {
        count++;
        sortedLines.push(lines[i]);
        if (
          count == 2 ||
          count == 6 ||
          count == 9 ||
          count == 17 ||
          count == 23
        ) {
          count++;
        }
      }
    }
    fs.writeFile("parsedsite.txt", "", function () {
      console.log("Deleted.");
    });
    console.log("sortedlines - " + sortedLines.length);
    for (let i = 0; i < sortedLines.length; i++) {
      fs.appendFile("pastas.txt", sortedLines[i] + "\r\n", function (error) {
        if (error) console.log(error);
      });
    }
    console.log("Ended.");
  }, 3000);
} catch (error) {
  console.log(error);
}
