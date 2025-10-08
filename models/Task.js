const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    complete: {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model("Task", newSchema);