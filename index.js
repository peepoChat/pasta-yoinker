const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require("fs");
let req = new XMLHttpRequest();
req.open("GET", "https://www.twitchquotes.com/", false);
req.send(null);
const data = null;
if (req.status == 200) {
  try {
    data = JSON.parse(req.responseText);
  } catch (e) {
    console.log("Error " + e.message);
  }
  fs.appendFile("pasta.txt", data, function (error) {
    if (error) console.log(error);
  });
}
