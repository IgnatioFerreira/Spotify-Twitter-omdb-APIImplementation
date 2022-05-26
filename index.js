import promptsync from 'prompt-sync';
var prompt = promptsync({ sigint: true })
import { getTweetsFromUser } from './modules/twitter.js'
import { getSpotifyTrack } from './modules/spotify.js'
import { getOMDBMovie } from './modules/omdb.js'
import { readFromFile } from './modules/readQueryFromFile.js'

async function getTweets(userName, numberOfTweets) { // Twitter
  console.log("1. Search tweets of a twitter user: " + userName);
  var tweets = await getTweetsFromUser(userName, numberOfTweets); //This is the JSON object asked for in the assignment
  for (const tweet of tweets) {
    console.log("\n\n" + tweet.text);
  }
  restart()
};

async function getTrack(trackName) { // Spotify
  console.log("2. Get details of a spotify track: " + trackName + "\n\n");
  var track = await getSpotifyTrack(trackName); //This is the JSON object asked for in the assignment
  console.log('Track name: \n' + track.name);
  console.log('\nArtist: \n' + track.album.artists[0].name);
  console.log('\nAlbum: \n' + track.album.name);
  console.log('\nURL: \n' + track.external_urls.spotify);
  restart()
};

async function getMovie(title) { // OMDB
  console.log("3. Get details of a movie om OMDB: " + title + "\n\n");
  var movie = await getOMDBMovie(title); //This is the JSON object asked for in the assignment
  console.log("Title:\n" + movie.Title);
  console.log("\nYear: \n" + movie.Year);
  console.log("\nReleased: \n" + movie.Released);
  console.log("\nReleased: \n" + movie.Released);
  console.log("\nGenre: \n" + movie.Genre);
  console.log("\nIMDB Rating: \n" + movie.imdbRating);
  console.log("\nPlot: \n" + movie.Plot);
  restart()
};

async function getQuery() { // File reading
  var line = await readFromFile;
  executeSomething(line)
};

function executeSomething(input) {
  console.clear()
  const query = input.split(',');
  if (query[0] == 'spotify') {
    getTrack(query[1])
  } else if (query[0] == 'twitter') {
    getTweets(query[1], parseInt(query[2]))
  } else if (query[0] == 'omdb') {
    getMovie(query[1])
  }
}

function specificInstructions(input) {

}

// MENU
function menu() {
  console.clear()
  console.log("Felicitations. You have arrived at Ignatio's WPR assignment.\n\n");
  console.log("What would you like to do?\n\n1. Search tweets of a twitter user\n2. Get details of a spotify track\n3. Get details of a movie om OMDB\n4. I'm feeling lucky.\n");
  var input = prompt()
  if (!(input in ["1", "2", "3", "4", "5"])) { // 5 because the "in" seems to be excludnig last element
    console.clear()
    console.log("Please only input 1, 2, 3 or 4 to answer the prompt.\n\nPress Enter to continue");
    var wait = prompt()
  } else {
    console.clear()
    if (input == '1') {
      console.log("1. Search tweets of a twitter user.\n\n");
      console.log("Please enter the username: ");
      var username = prompt()
      console.log("Please enter the number of tweets you want to view: ");
      var numberOfTweets = prompt()
      while (isNaN(parseInt(numberOfTweets))) {
        console.log("Please enter the number of tweets you want to view IN INTEGER FORMAT: ");
        numberOfTweets = prompt()
      }
      executeSomething('twitter' + ',' + username + ',' + numberOfTweets)
    } else if (input == '2') {
      console.log("2. Get details of a spotify track.\n\n");
      console.log("Please enter the track name: ");
      var trackName = prompt()
      executeSomething('spotify,' + trackName)
    } else if (input == '3') {
      console.log("3. Get details of a movie om OMDB.\n\n");
      console.log("Please enter the movie name:");
      var movie = prompt()
      executeSomething('omdb,' + movie)
    } else if (input == '4') {
      console.log("4. I'm feeling lucky.\n\n");
      getQuery()
    }
  }
};

function restart() {
  setTimeout(restartPrompt, 3000)
}

function restartPrompt() {
  console.log("\n\nWould you like to go again? (y/n):");
  var response = prompt()
  if (response == "y") {
    menu();
  }
}

menu()














// ==========
// ==========  CODE GRAVEYARD
// ==========

// var ddd = parseInt("dsfsd")
// console.log(typeof (ddd) === "NaN")

// prompt. = ""
// prompt.start();

// //
// // Get two properties from the user: username and password
// //
// prompt.get([{
//     name: 'username',
//     required: true
//   }, {
//     name: 'password',
//     hidden: true,
//     conform: function (value) {
//       return true;
//     }
//   }], function (err, result) {
//   //
//   // Log the results.
//   //
//   console.log('Command-line input received:');
//   console.log('  username: ' + result.username);
//   console.log('  password: ' + result.password);
// });





// getTrack("moonlight")