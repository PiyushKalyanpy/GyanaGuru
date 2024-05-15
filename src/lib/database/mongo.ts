import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || {
  conn : null, 
  promise : null
}

export const connectToMongoDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  if(MONGODB_URI){
   throw new Error("Please define the MONGODB_URI environment variable inside.env.local")
  }

  cached.promise = mongoose.connect(MONGODB_URI!, {
    dbName: "gyanaguru",
    bufferCommands: false,
  });

  cached.conn = await cached.promise;
  return cached.conn;

}



