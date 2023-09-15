const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users");

// route for signing up user , passes request and response to controller function signUp as params 
router.post("/signUp",userController.signUp);

// route for signing in user , passes request and response to controller function signIn as params 
router.post("/signIn",userController.signIn);

// route for signing out user , passes request and response to controller function signOut as params 
router.post("/signOut",userController.signOut);

// route for deleting user account , passes request and response to controller function deleteAccount as params 
router.delete("/deleteAccount",userController.deleteAccount);

router.post("/getUser",userController.getUser);

router.post("/getUserById",userController.getUserById);

module.exports = router;
