const mongoose = require('mongoose')

const Schema = mongoose.Schema
const apiSchema = new Schema ({
    email : String,
    password : String
})
const apiModel = mongoose.model('api',apiSchema);
module.exports = apiModel;