var express = require('express')
var router = express.Router()
var friends = require("../data/friends")


// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

router.get("/api/friends", function(req, res) {
    return res.json(friends);
  });


// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

router.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
  
    console.log(newFriend);
  
    friends.push(newFriend);
  
    res.json(newFriend);
  });


  module.exports = router
