const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/myapp', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('mongodb is connected'); 
    }
    catch (error) {
 console.log('Error connecting to mongodb')
    }
}

  module.exports = connectDB;