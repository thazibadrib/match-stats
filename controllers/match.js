const Match = require("../models/match");
const User = require("../models/user");
const Validator = require("validatorjs");

//checks validation of require fields
const checkValidation = (title, imageUrl) => {
  const rules = {
    title: "required|string",
    imageUrl: "required|string",
  };
  const validation = new Validator({ title, imageUrl }, rules);

  return validation.passes();
};
// function for match creation
const createMatch = async (req, res) => {
  const { title, imageUrl, description } = req.body;
  try {
    
    if (checkValidation(title, imageUrl)) {
      const match = new Match({
        title,
        imageUrl,
        description,
      });

      await match.save();

      res.send("Match created");
    } else {
      res.send("Some of the parameter are missing or invalid");
    }
  } catch (error) {
    res.send("Math creation failed");
  }
};

// function for updating match
const updateMatch = async (req, res) => {
  const { _id, title, imageUrl, description } = req.body;
  try {
    if (checkValidation(title, imageUrl)) {
      const match = await Match.findOneAndUpdate(
        { _id },
        {
          $set: {
            title,
            imageUrl,
            description,
          },
        },
        {
          new: true,
          upsert: false,
        }
      );
      if (!match) {
        res.send("Match does not exist");
      }
      await match.save();
      res.send("Match updated");
    } else {
      res.send("Some of the parameter are missing or invalid");
    }
  } catch (error) {
    res.send("Match update failed");
  }
};
// function for getting one match
const getOneMatch = async (req, res) => {
  const { _id } = req.body;
  try {
    const match = await Match.findById(_id);
    if (!match) {
      res.send("Match doesnt exist");
    }
    res.send(match);
  } catch (error) {
    // res.send("Match finding failed");
    console.log(error);
  }
};

// function for getting all matches
const getAllMatches = async (req, res) => {
  try {
    const matches = await Match.find({});
    res.send(matches);
  } catch (error) {
    res.send("Match query failed");
  }
};

// function for deleting match
const deleteMatch = async (req, res) => {
  const { _id } = req.body;
  try {
    await Match.findByIdAndDelete(_id);
    res.send("Match deleted");
  } catch (error) {
    res.send("Match deletion failed");
  }
};

// function for commenting match

const comment = async (req, res) => {
  const { userId, matchId, comment } = req.body;

  try {
    const user = await User.findById(userId);
    const match = await Match.findById(matchId);
    if (!user) {
      res.send("User does not exist");
    }
    if (!match) {
      res.send("Match does not exist");
    }
    match.comments.push({
      userId,
      comment,
    });
    await match.save();
    res.send("Successfully commented");
  } catch (error) {
    res.send("Commenting failed");
  }
};

module.exports = {
  createMatch,
  updateMatch,
  getOneMatch,
  getAllMatches,
  deleteMatch,
  comment,
};
