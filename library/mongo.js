import mongoose from "mongoose";

const connectDb = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            // in deployment add the MONGO_URI in the enviroment variables
            await mongoose.connect(process.env.MONGO_URI);
            console.log("MongoDb connected")
        }
    } catch {
        console.log(error);
    }
}

export default connectDb;