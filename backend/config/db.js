const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `${res.connection.host} DB connection established`.cyan.underline
    );
  } catch (error) {
    console.log("ERROR:", error);
  }
};
