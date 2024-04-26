import mongoose from "mongoose";
export async function connectToMongo() {
  console.log("Connecting to MongoDB...");
  try {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });
    connection.on("error", (err) => {
      console.log("Error connecting to MongoDB", err);
      process.exit();
    });
  } catch (err) {
    console.log("DB connection error");
    console.log(err);
  }
}
