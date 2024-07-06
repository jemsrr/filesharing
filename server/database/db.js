import mongoose from "mongoose";

const DBConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/fileSharing", {
      useNewUrlParser: true,
    });
  } catch (error) {}
};

export default DBConnection;
