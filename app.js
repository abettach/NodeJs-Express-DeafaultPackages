const express = require('express')
const app = express()
const port = 3001
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

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
/*******************Connect DataBase using mongoose*****************************/

const mongoose = require('mongoose');
 
mongoose
  .connect("connection link")
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
  res.send('Welome')
})

app.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
});
