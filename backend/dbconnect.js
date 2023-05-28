const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
  const mongodbURI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(mongodbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with a failure status code
  }
};

module.exports = connectDB;
