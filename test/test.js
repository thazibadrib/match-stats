let assert = require("assert");
let axios = require("axios").default;

describe("Testing the API", async function () {
  describe("Testing user operations", function () {
    it("Fail 1 - Sign up with missing parameter", async function () {
      // new user object
      const newUser = {
        firstName: "Bruce",
        lastName: "Wayne",
        password: "123456",
      };
      // request to sign up route
      axios.post("/user/signUp", newUser).then((res) => {
        assert.strictEqual(
          res.data,
          "Some of the parameter are missing or invalid"
        );
      });
    });
    it("Fail 2 -  Sign In with wrong password", async function () {
      // new user object
      const newUser = {
        firstName: "Bruce",
        lastName: "Wayne",
        password: "123456",
        email: "bruce@gmail.com",
      };
      axios.post("/user/signUp", newUser).then((res) => {
        assert.strictEqual(res.data, "Signed Up");
      });
      // request to sign in route
      axios
        .post("/user/signIn", {
          email: newUser.email,
          password: newUser.password + 1,
        })
        .then((res) => {
          assert.strictEqual(res.data, "Password incorrect");
        });
    });
    it("Fail 3 - Sign up with invalid email", async function () {
      // new user object
      const newUser = {
        firstName: "Tim",
        lastName: "Drake",
        password: "123456",
        email: 12344,
      };
      // request to sign up route
      axios.post("/user/signUp", newUser).then((res) => {
        assert.strictEqual(
          res.data,
          "Some of the parameter are missing or invalid"
        );
      });
    });
    it("Fail 4 - Sign up with existing email", async function () {
      // new user object
      const newUser = {
        firstName: "Bruce",
        lastName: "Wayne",
        password: "123456",
        email: "bruce@gmail.com",
      };
      // request to sign up route
      axios.post("/user/signUp", newUser).then((res) => {
        assert.strictEqual(res.data, "User already exists");
      });
    });
  });
  describe("Testing match operations - Simple Cases", function () {
    it("Success 1 - Creating match", async function () {
      // new match object
      const newMatch = {
        title: "match 1",
        imageUrl: "imageUrl 1",
        description: "description 1",
      };
      // request to create match route
      axios.post("/match/createMatch", newMatch).then((res) => {
        assert.strictEqual(res.data, "Match created");
      });
    });
    it("Success 2 - Updating match", async function () {
      // new match object
      const match = {
        title: "match 1",
        imageUrl: "imageUrl 1",
        description: "description 1",
      };
      // another match object but slightly updated
      const updatedMatch = {
        _id: "603d18db5fe2430650678755",
        ...match,
        imageUrl: "updated imageUrl 1",
      };
      // request to update match route
      axios.post("/match/updateMatch", updatedMatch).then((res) => {
        assert.strictEqual(res.data, "Match updated");
      });
    });
    it("Success 3 - Get one match", async function () {
      // new match object
      const match = {
        title: "match 1",
        imageUrl: "updated imageUrl 1",
        description: "description 1",
      };

      // request to get one match , id has been retrieved manually from mongodb database (online)
      axios
        .post("/match/getOneMatch", {
          _id: "603d18db5fe2430650678755",
        })
        .then((res) => {
          assert.strictEqual(res.data.title, match.title);
          assert.strictEqual(res.data.imageUrl, match.imageUrl);
          assert.strictEqual(res.data.description, match.description);
        });
    });
    it("Success 4 - Get all matches", async function () {
      // request to get all matches route
      axios.get("/match/getAllMatches").then((res) => {
        assert.strictEqual(res.data.length >= 0, true);
      });
    });
    it("Success 5 - Delete match", async function () {
      axios
        .delete("/match/deleteMatch", {
          _id: "603d18db5fe2430650678755",
        })
        .then((res) => {
          assert.strictEqual(res.data, "Match deleted");
        });
    });
  });
  describe("Testing match operation - Complex cases", function () {
    it("Success 1 - Create match ->Get all matches -> Delete match", async function () {
      // new match object
      const newMatch = {
        title: "match 1",
        imageUrl: "imageUrl 1",
        description: "description 1",
      };
      // request to create match route
      axios.post("/match/createMatch", newMatch).then((res) => {
        assert.strictEqual(res.data, "Match created");
        axios.get("/match/getAllMatches").then((res) => {
          assert.strictEqual(res.data.length >= 0, true);
          let match = getAllRes.data.find(
            (m) => m.title.localeCompare(newMatch.title) === 0
          );
          axios
            .delete("/match/deleteMatch", {
              _id: match._id,
            })
            .then((res) => {
              assert.strictEqual(res.data, "Match deleted");
            });
        });
      });
    });
    it("Success 2 - Create match -> Get all matches -> Update match -> Get one match -> delete match", async function () {
      // new match object
      const newMatch = {
        title: "match 1",
        imageUrl: "imageUrl 1",
        description: "description 1",
      };
      // request to create match route
      axios.post("/match/createMatch", newMatch).then((res) => {
        assert.strictEqual(res.data, "Match created");
        axios.get("/match/getAllMatches").then((res) => {
          assert.strictEqual(res.data.length >= 0, true);
          let match = getAllRes.data.find(
            (m) => m.title.localeCompare(newMatch.title) === 0
          );
          const updatedMatch = {
            ...match,
            imageUrl: "updated imageUrl 1",
          };
          axios.post("/match/updateMatch", updatedMatch).then((res) => {
            assert.strictEqual(res.data, "Match updated");
            axios
              .post("/match/getOneMatch", {
                _id: updatedMatch._id,
              })
              .then((res) => {
                assert.strictEqual(res.data.title, updatedMatch.title);
                assert.strictEqual(res.data.imageUrl, updatedMatch.imageUrl);
                assert.strictEqual(
                  res.data.description,
                  updatedMatch.description
                );
              });
            axios
              .delete("/match/deleteMatch", {
                _id: getOneRes.data._id,
              })
              .then((res) => {
                assert.strictEqual(res.data, "Match deleted");
              });
          });
        });
      });
    });
  });
});
