import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from  "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"


const registerUser = asyncHandler( async (req,res) =>{
    // res.status(200).json({
    //     message:"ok"
    // }) checking is done route is working fine
    
    // Steps to register user /
    // 1. get user details from frontend
    // 2. validations - if it is empty
    // 3. check if user already exists: username, email 
    // 4. check for images, check for avatar
    // 5. upload them to cloudinary, avatar
    // 6. create user object - create in db 
    // 7. remove password and refresh token field from response 
    // 8. check for user creation 
    // 9. return res
    
    // 1---you will get details from frontend body or json via 'req'==> req.body

    const {fullName, email, username, password} = req.body
    console.log(" email: ", email);
    // check if fields are not null in a single iteration
    if(
        [fullName, email, username, password].some((feild) =>
        feild?.trim() ===""  )
    ){
        throw new ApiError(400, "All fields are required")
    }
    // checking users if already exixts or not
    const existedUser = User.findOne({
        $or: [{username}, {email}]
    })
    if(existedUser){
        throw new ApiError(409, "User with email or username already exist")
    }

    // images handling
    const avatarLocalPath = req.files?.avatar[0]?.path 
    const coverImageLocalPath = req.files?.coverImage[0]?.path 

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar is required")
    }
// image upload in cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400, "Avatar is required")   
    }
    // creating  user object - creating in db (user intarct with database)

       const user  = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
     })

    //  checking if user is created or not
    const createdUser = await User.findById(user._id).select(
        "-password - refreshToken"
    )
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering th user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")

    )
})


export {registerUser}