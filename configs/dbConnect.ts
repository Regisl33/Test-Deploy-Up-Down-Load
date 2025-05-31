import mongoose from "mongoose";

const DATABASE_URI = "mongodb://localhost:27017/";

const connectDB = async () => {
  try {
    if (!DATABASE_URI) throw new Error("No Database To Connect");
    await mongoose.connect(DATABASE_URI);
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
