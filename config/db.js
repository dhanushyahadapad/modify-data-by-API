const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/tasks");
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error("Error in Connection");
    }
}
module.exports = connectDB;