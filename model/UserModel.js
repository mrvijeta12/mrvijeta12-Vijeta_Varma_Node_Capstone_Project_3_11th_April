const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{type:String, require:true, },
    mobileNumber: { type: String, require: true},
    picture:{ type:String,require:true}
})

module.exports = mongoose.model("User",userSchema) 