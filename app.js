const express = require('express')
const app = express()
const port = 3001
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json()); // fix the empty returned object probleme

const My = require('./models/mySchema')

var cors = require('cors'); // fix cors probleme when posting data
app.use(cors())
/*******************For Auto refresh *****************************/
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
}); 

/****************************************************************/
/*******************Connect DataBase*****************************/

const mongoose = require('mongoose');
 
mongoose.connect("Your Connection URL");
  .then( result => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      })
  })
  .catch( err => {
    console.log(err);
  }); 
/****************************************************************/

app.get('/', (req, res) => {
  res.render('index')
})


app.post("/my-path", (req, res) => {
    const article = new My(req.body);
    console.log(req.body);
})

app.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
});
