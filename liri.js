require("dotenv").config();

let keys = require("./keys.js");

// captures arguments
let command = process.argv[2];
let value = "";

for (let i = 3; i < process.argv.length; i++) {
  value += " " + process.argv[i];
}

function Spotify(obj) {
  obj;
}

let twitterBot = () => {
  let Twitter = require("twitter");
  var client = new Twitter(keys.twitter);

  debugger;

  let params = {
    screen_name: "andrewt27657868",
    count: 20
  };
  client.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      tweets.forEach(element => {
        console.log(element.text);
      });
    } else {
      console.log(error);
    }
  });
};

let spotifyBot = value => {
  let Spotify = require("node-spotify-api");
  let spotify = new Spotify(keys.spotify);

  spotify.search({ type: "track", query: value, limit: 1 }, function(
    err,
    data
  ) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log("Artist: " + data.tracks.items[0].artists[0].name);
    console.log("Song Name: " + data.tracks.items[0].name);
    console.log("Preview link: " + data.tracks.items[0].preview_url);
    console.log("Album: " + data.tracks.items[0].album.name);
  });
};

/* If no song is provided then your program will default to "The Sign" by Ace of Base. */

let imbdBot = value => {
  debugger;
  let request = require("request");
  request("http://www.omdbapi.com/?apikey=trilogy&t=" + value, function(
    error,
    response,
    body
  ) {
    if (!error) {
      let movie = JSON.parse(body);


      debugger;
      console.log("Title: " + movie.Title);
      console.log("Released: " + movie.Released);
      console.log("IMDB Rating: " + movie.imbdRating);

      //error handling for Rotten Tomatoes

      let exists = false;
      let y;
   /*    movie.Ratings.forEach(element => {
        if(element.Source === "Rotten Tomatoes"){
          exists = true;
        }

      }); */

      for(let i = 0; i < movie.Ratings.length; i++){
        if(movie.Ratings[i].Source === "Rotten Tomatoes"){
          exists = true;
          y = i;
          debugger;
        }
        debugger;
      }  

      if (exists) {
        console.log("Rotten Tomatoes Rating: " + movie.Ratings[y].Value);
      }else{
        console.log("Rotten Tomatoes Rating: N/A");
      }

      debugger;
      console.log("Country where movie was produced: " + movie.Country);
      console.log("language of the movie: " + movie.Language);
      console.log("Plot: " + movie.Plot);
      console.log("Actors: " + movie.Actors);
    }
  });
};

let random = () => {
  let fs = require("fs");

  fs.readFile("random.txt", "utf8", function(error, data) {
    debugger;
    if (!error) {
      // Break the string down by comma separation and store the contents into the output array.
      var input = data.split(",");

      console.log("data", data);

      command = input[0];

      // Loop Through the newly created output array
      for (var i = 1; i < input.length; i++) {
        // Print each element (item) of the array/
        value += " " + input[i];
      }

      console.log("command", command);
      console.log("value", value);
      debugger;
      runCommand();
    } else {
      console.log(error);
    }
  });
};

let runCommand = () => {
  if (command === "my-tweets") {
    debugger;
    twitterBot(value);
  } else if (command === "spotify-this-song") {
    spotifyBot(value);
  } else if (command === "movie-this") {
    debugger;
    imbdBot(value);
  } else if (command === "do-what-it-says") {
    random(value);
  }
};

runCommand();
debugger;
