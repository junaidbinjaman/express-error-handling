const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  fs.readFile("/Users/imac/Documents/Codes/classes/class-40/test.txt", (err, data) => {
    if(err) {
      
    }else {

    }
  })
})

app.listen(3000, () => {
  console.log('App listening at port 3000');
})