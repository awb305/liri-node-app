require("dotenv").config();
require("request");

let keys = require("./keys.js");


function Spotify(obj){
    obj;
}




let command = process.argv[2];
let value = process.argv[3].toString();


let twitterBot = () => {
    
    let Twitter = require("twitter");
    var client = new Twitter(keys.twitter);
    
    debugger;
    
    let params = {
        screen_name: 'andrewt27657868',
        count: 20
    }
    client.get('statuses/user_timeline', params, function(error, tweets, response){
        if(!error){
            
            tweets.forEach(element => {
                console.log(element.text); 
            });
        }else{
            console.log(error);
        }
    });
    
}

let spotifyBot = (value) => {
    
    let Spotify = require('node-spotify-api');
    let spotify = new Spotify(keys.spotify);
    
    spotify.search({ type: 'track', query: value, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
    
      console.log("Artist: " + data.tracks.items[0].artists[0].name); 
      console.log("Song Name: " + data.tracks.items[0].name);
      console.log("Preview link: " + data.tracks.items[0].preview_url);
      console.log("Album: " + data.tracks.items[0].album.name);
      });



}





if (command === 'my-tweets') {
    debugger;
    twitterBot(value);
} else if (command === 'spotify-this-song') {
    spotifyBot(value);
} else if (command === 'movie-this') {
    imbdBot(value);
} else if (command === 'do-what-it-says'){
    random(vlaue);
}