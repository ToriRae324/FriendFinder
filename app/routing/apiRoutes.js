var express = require('express')
var router = express.Router()
var friends = require("../data/friends")


// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

router.get("/api/friends", function (req, res) {
  return res.json(friends);
});


// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

router.post("/api/friends", function (req, res) {
  //  retreive newFriend data
  var newFriend = req.body;
  var newFriendScores = req.body.scores
  console.log(newFriend);

  // parseInt newFriendScores
  newFriendScores.forEach(score => {
    score = parseInt(score)
  });

  // Find best match
  // Set first best match to first friend
  var bestMatchIndex = 0;
  var minDiff = 40;

  // go through friends array one at a time
  for (var i = 0; i < friends.length; i++) {
    var totalDiff = 0;
    // check each friend
    for (var j = 0; j < friends[i].scores.length; j++) {
      var diff = Math.abs(newFriendScores[j] - friends[i].scores[j]);
      totalDiff += diff;
    };

    // if there is a new minimum, update bestMatchIndex and reset min
    if (totalDiff < minDiff) {
      bestMatchIndex = i;
      minDiff = totalDiff;
    };

  }
  // return data for best match
  res.json(friends[bestMatchIndex]);

  // After match add newFriend to friends array
  friends.push(newFriend);
});


module.exports = router
