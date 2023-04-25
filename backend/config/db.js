require('dotenv').config();
const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');
const db = process.env.MONGO_CONNECTION;

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(db, {
        useNewUrlParser: true,
        });

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;