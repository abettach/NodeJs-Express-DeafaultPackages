const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const nameSchema = new Schema({
    title: String,
    summary: String,
    body: String,
    //you add the variables you need
});


// Create a model based on that schema
const Name = mongoose.model("Article", nameSchema);

// export the model
module.exports = Name;