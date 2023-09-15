const User = require("../models/user");
const Validator = require("validatorjs");

// checks validation for required fields
const checkValidation = (firstName,lastName,email,password)=>{
    const rules = {
        firstName:"required|string",
        lastName:"required|string",
        email:"required|string",
        password:"required|string"
    };
    const validation = new Validator({
        firstName,
        lastName,
        email,password
    },rules);
    return validation.passes();
}

// function for signing up
const signUp = async (req,res)=>{
    const {firstName, lastName, email, password} = req.body;

        try {
            let user = await User.findOne({email});
            if (user) {
                res.send("User already exists")
            }
            if(checkValidation(firstName,lastName,email,password)){
                user = new User({
                    firstName, lastName, email, password
                });
                
                await user.save();
               
                res.send("Signed Up")
            }else{
                res.send("Some of the parameter are missing or invalid")
            }
            

        } catch (err) {
            res.send("Sign up failed");
        }
	}
;

// function for signing in

const signIn = async (req,res)=>{
    
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            res.send("User not found")
        }

        const isMatch = password.localeCompare(user.password);

        if (isMatch!==0) {
            res.send("Password incorrect")
        }

        user.isSignedIn = true;
        await user.save();
        res.send("Signed In");
    } catch (err) {
        res.send("Sign In failed");
    }
};

// function for signing out

const signOut = async (req,res)=>{

    try {
        const {email} = req.body;
        let user = await User.findOne({ email });

        if (!user) {
            res.send("User not found");
        }

        user.isSignedIn = false;
        await user.save();
        res.send("Signed out");
    } catch (err) {
        res.send("Sign In failed");
    }
};

// function for deleting account

const deleteAccount = async (req,res)=>{
    try {
        const {email} = req.body;
        await User.findOneAndDelete({email});
        res.send("Account deleted");
    } catch (error) {
        res.send("Account deletion failed");
        throw new Error(err);
    }
}

const getUser = async (req,res)=>{
    try {
        const {email} = req.body;
        const user = await User.findOne({ email });
        res.send(user);
    } catch (error) {
        res.send("fetching user failed");
        throw new Error(error);
    }
}

const getUserById = async (req,res)=>{
    try {
        const {_id} = req.body;
        const user = await User.findById(_id);
        res.send(user);
    } catch (error) {
        res.send("fetching user failed");
        throw new Error(error);
    }
}



module.exports = {
    signIn,
    signUp,signOut,
    deleteAccount,
    getUser,
    getUserById
}