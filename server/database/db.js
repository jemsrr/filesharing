import mongoose from "mongoose";

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
    });
  } catch (error) {}
};

export default DBConnection;
