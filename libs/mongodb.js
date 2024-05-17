import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
       await mongoose.connect(process.env.mongodb_url);
        console.log("connected to mongodb");
    } catch (error) {
        console.log("error");
    }
}

export default connectMongoDB;