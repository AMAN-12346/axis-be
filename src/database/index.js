const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI.endsWith('/') 
      ? process.env.MONGODB_URI.slice(0, -1) 
      : process.env.MONGODB_URI;
      
    const connectionInstance = await mongoose.connect(
      `${uri}/${process.env.DB_NAME}`
    );
    console.log(
      `\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
