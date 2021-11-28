const express = require("express");

const app = express();

app.get("/", (req, res) => {
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      next("There was as error");
    } else {
      res.write("a");
    }
  }
  res.end();
});

app.use((req, res, next) => {
  next("Requested URL was not found");
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    next("There was a problem");
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("There was an error");
    }
  }
});

app.listen(3000, () => {
  console.log("App listening at port 3000");
});
