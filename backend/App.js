const express = require("express");
const cors = require('cors');
const Quote = require('inspirational-quotes');
const app = express();



// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

app.use(cors());

app.get("/", function(req, res) {
  res.send(Quote.getQuote());
});
let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}
app.listen(port, function() {
 console.log("Server started successfully");
});