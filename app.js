import express from "express";
import cookieParser from "cookie-parser";
import {connectDB, createCollection, checkForCollection} from "./db/dbConnection.js";



const app = express();


app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true})); // server har format ka url le sake
app.use(cookieParser());



//route 
import userRouter from "./routes/patient.routes.js"

// routes declaration
app.use("/api/user", userRouter);





// database connection
connectDB()
.then(()=>{
    app.listen(3000, (req, res) => {
        console.log("App is running on port 3000")
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!! ",err);
    
})

// export default app;