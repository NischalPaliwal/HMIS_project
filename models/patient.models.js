import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    diagnoseWith:{
        type: String,
        // required: true,
    },
    address:{
        type: String,
        // required: true,
    },
    bloodGroup:{
        type: String,
        // required: true,
    },
    gender:{
        type: String,
        enum: ["M","F","O"],
        // required: true,
    },
    admittedIn:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true
    }

    
},{timestamps:true});

export const Patient = mongoose.model('Patient',patientSchema)