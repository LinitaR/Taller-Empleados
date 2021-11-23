const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name: {type: String},
    status: {type: Boolean, default: false},
    document: {type: String}, 
    phone: {type: Number},
    email: {type: String},
    salary: {type: String},
    female: {type: Boolean, default: false},
    datebirth: {type: String},
})

module.exports = mongoose.model('empleados', userSchema)