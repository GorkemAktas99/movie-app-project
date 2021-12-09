const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    mongoose.connection.on('open',()=>{
        console.log('MongoDB Connected');
    });
    mongoose.connection.on('error',err => {
        console.log(err);
    });
}