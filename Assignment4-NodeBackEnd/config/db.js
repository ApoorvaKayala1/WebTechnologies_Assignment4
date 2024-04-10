const mongoose = require('mongoose');

// Function to connect to MongoDB
const connect = async () => {
  try {
    // MongoDB connection string
    const mongoURI = 'mongodb+srv://apoorva_kayala:apK3012@cluster01.fd91eno.mongodb.net/a4_kidsfashionstoredb?retryWrites=true&w=majority&appName=Cluster01';

    // Connect to MongoDB
    await mongoose.connect(mongoURI);

    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    // Exit the process if unable to connect to MongoDB
    process.exit(1);
  }
};

module.exports = { connect };
