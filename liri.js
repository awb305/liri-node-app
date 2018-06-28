require("dotenv").config();
require("request");

let keys = require("./keys.js");


function Spotify(obj){
    obj;
}


//var spotify = new Spotify(keys.spotify);


let command = process.argv[2];
let value = process.argv[3];


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