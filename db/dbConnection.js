import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`mongodb://localhost:27017`);
        console.log("Mongodb Connected");
    
    }
    catch(error){
        console.log("MongoDB Connection Failed: ",error);
        process.exit(1); // node js error syntax
    }
}

export default connectDB;


