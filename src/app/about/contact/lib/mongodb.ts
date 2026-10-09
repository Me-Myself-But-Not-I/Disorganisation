import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;
if (!uri) {
	throw new Error("Missing MONGODB_URI environ1ment variable");
}
const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(uri);
            console.log("db connected");
        }
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
