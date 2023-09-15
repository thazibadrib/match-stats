const express = require("express");
const router = express.Router();
const matchController = require("../../controllers/match");


// route for creating match , passes request and response to controller function createMatch as params
router.post("/createMatch",matchController.createMatch);

// route for updating match , passes request and response to controller function updateMatch as params
router.post("/updateMatch",matchController.updateMatch);

// route for getting one match , passes request and response to controller function getOneMatch as params
router.post("/getOneMatch",matchController.getOneMatch);

// route for getting all matches , passes request and response to controller function getAllMatches as params
router.get("/getAllMatches",matchController.getAllMatches);

// route for deleting match , passes request and response to controller function deleteMatch as params
router.delete("/deleteMatch",matchController.deleteMatch);

// route for commenting on a match , passes request and response to controller function comment as params
router.post("/comment",matchController.comment);

module.exports = router;

