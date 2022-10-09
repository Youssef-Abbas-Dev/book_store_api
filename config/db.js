const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected To MongoDB...");
  } catch (error) {
    console.log("Connection Failed To MongoDB!", error);
  }
}

module.exports = connectToDB;

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Connected To MongoDB..."))
//   .catch((error) => console.log("Connection Failed To MongoDB!", error));
