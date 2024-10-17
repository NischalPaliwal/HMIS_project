
import { Patient } from  '../models/patient.models.js';

const signUp =  async (req,res) => {

   // get user details
   const { email, name,  password, phone} = req.body // destructing of data
   
   // validaion - not empty
    if(
        [email, name,  password, phone].some((field)=>
        field?.trim() === "")
     ){
        res.status(400).json({message: "All fields are compulsory or required"});
    }
   
    // if user registered or not
    const existedPatient = Patient.findOne({
        $or: [{phone},{email}] //operator
    })
    if(existedPatient) {
        res.status(409).json({message: "User with email or username already exist" });
    }
   
    // create user object -creation entry in db
   // remove password and refresh token field from token
   // check for user creation
   // return res
   
   
   
    const patient = await Patient.create({
        name,
        email,
        password,
        phone
    })
    
    const createdPatient = await User.findById(User._id).select(
        "-password"
    ) // bydefault mongodb create a id with each entry


    patient.save();
    if(!createdPatient){
        res.status(500).json({message:"Something went wrong while registering a user"});
    }
    
    return res.status(201).json({ 
        message: "User registered Successfully"
    })
}

// const loginUser =  async (req,res)=>{
//     // req.body -> data
//     // username or email
//     // find the user
//     // password check
//     // access & refresh token 
//     // send in cookie

//     const {email,phone,password} = req.body;
//     if(!phone || !email){
//         res.status(400).json({message: "phone or email is required"});

//     }

//     const user = await Patient.findOne({$or: [{phone},{email}]}) // {$or} or operator
    
//     if(!user) res.status(400).json({message: "username or email is required"})
    
//     const isPasswordValid = await user.isPasswordCorrect(password);
    
//     if(!isPasswordValid) res.status(401).json({message:"Password invalid"});

//     // const {accessToken,refreshToken} =await generateRefreshandAccessToken(user._id)

//     const loggedInUser = await Patient.findById(user._id).select("-password -refreshToken")

//     const options = {
//         httpOnly: true, //after this cookie will only modify by server
//         secure: true
//     }

//     return res.status(200).json({
//         message: "User logged in"
//     })

// }

// const logoutUser = asyncHandler( async (req,res) => {
//     await User.findByIdAndUpdate(
//         req.user._id,
//         {
//             $set: { refreshToken: undefined}
//         },
//         {
//             new: true
//         }
//     )

//     const options = {
//         httpOnly: true, //after this cookie will only modify by server
//         secure: true
//     }

//     return res
//     .status(200)
//     .clearCookie("accessToken",options)
//     .clearCookie("refreshToken",options)
//     .json(new ApiResponse(200,"User Logged out"))
// })

export  {signUp}  //export the function to be used in other files.