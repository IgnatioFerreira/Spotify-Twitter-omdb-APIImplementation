import 'dotenv/config'
import { TwitterApi } from 'twitter-api-v2';

const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);

async function myfunction(name, numberOfTweets) {
  try {
    const users = await client.v2.usersByUsernames([name]);
    const tweets = await client.v2.userTimeline(users.data[0].id, { exclude: 'replies', max_results: numberOfTweets >= 5 ? numberOfTweets : 5 });
    return tweets //This is the JSON object asked for in the assignment
  } catch (error) {
    console.log('Something went wrong!' + error);
    return
  }
}

function getTweetsFromUser(name, numberOfTweets) {
  return myfunction(name, numberOfTweets);
}

export { getTweetsFromUser };











// ==========
// ==========  CODE GRAVEYARD
// ==========

// (async () => {
//   console.log('before start');

//   var tweets = await start();
//   for (const tweet of tweets) {
//     console.log(tweet);
//   }


//   console.log('after start');
// })();

// var Twitter = require('twitter');

// // var client = new Twitter({
// //   consumer_key: process.env.TWITTER_CONSUMER_KEY,
// //   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,

// //   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
// //   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// // });

// var client = new Twitter({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   bearer_token: process.env.TWITTER_BEARER_TOKEN
// });

// // // var params = { screen_name:'twitterapi', count:2 };
// // // client.get('statuses/user_timeline ', params, function (error, tweets, response) {
// // //     console.log(error);
// // //     if (!error) {
// // //         console.log(tweets);
// // //     }
// // // });

// // // client.post('users/2244994945/tweets', {max_results: 10, 'user.fields': "elonmusk"},  function(error, tweet, response) {
// // //     if(error) throw error;
// // //     console.log(tweet);  // Tweet body.
// // //     console.log(response);  // Raw response object.
// // //   });
// // // client.get('TwitterDev/status', {ids:'1527733001584623618'}, function(error, tweets, response) {
// // //     if(error) throw error;
// // //     console.log(tweets);  // The favorites.
// // //     console.log(response);  // Raw response object.
// // //   });
// // client.get('users/by/username/TwitterDev', function(error, tweets, response) {
// //     console.log(response);
// //  });

// // module.exports = {
// //     hello: function () {
// //         return 'params';
// //     }
// // }



// // var params = {screen_name: 'nodejs'};
// // client.get('statuses/user_timeline', params, function(error, tweets, response) {
// //   if (!error) {
// //     console.log(tweets);
// //   }
// // });


// var params = { 'username': 'jordanbpeterson' };
// client.get('users/by/username/jordanbpeterson/', function (error, tweets, response) {
//   console.log(error);
//   if (!error) {
//     console.log(tweets);
//   }
// });
