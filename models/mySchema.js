const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mySchema = new Schema ({
    str: String
})

const My = mongoose.model('My', mySchema);

module.exports = My;