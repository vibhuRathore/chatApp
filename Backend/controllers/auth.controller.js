import User from "../Models/User.js";

export const SignUp = async (req,res) =>  {
    try {

        const { fullName , userName  , Password , confirmPassword, Gender } = req.body

        if(Password !== confirmPassword){
            return res.status(400).json({error:"Password & confirmPassword do not match"});
        }
        const alreadyExist = await User.findOne({userName});
        if(alreadyExist){
            return res.status(400).json({error:"userName already exists"});          
        }

        const newUser = new User({
            fullName,
            userName,
            Password,
            Gender
        })
        await newUser.save();

        res.status(201).json({
            _id : newUser._id,
            fullName : newUser.fullName,
            userName : newUser.userName
        });
        
    } catch (error) {
        res.status(500).json({error : "Internal Server Error"});
        console.log("Something Went Wrong While SignUp",error.message);
    }
}

 

export const login = (req,res) =>  {
    res.send("Login Routes");
}

export const logout = (req,res) =>  {
    res.send("Logout Routes");
}