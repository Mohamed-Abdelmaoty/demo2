const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/" , (req, res) => {

console.log("request" , req.params , req.body);
  res.send("Hello big boss Moaty")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
