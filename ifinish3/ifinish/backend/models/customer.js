const mongoose = require('mongoose')

const Schema = mongoose.Schema
const customerSchema = new Schema ({
    email : String,
    password : String
})
const customerModel = mongoose.model('customer',customerSchema);
module.exports = customerModel;