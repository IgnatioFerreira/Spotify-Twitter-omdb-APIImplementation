import express, { response, json, Router } from 'express';
const app = express()
const router = Router()

import SpotifyWebApi from 'spotify-web-api-node';

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:9000/callback'
});


// ==========
// ==========  THIS IS WHAT I USED TO GET THE TOKEN
// ==========

// router.get('/', (req, res, next) => {
//   res.redirect(spotifyApi.createAuthorizeURL([
//       "ugc-image-upload",
//       "user-modify-playback-state",
//       "user-follow-modify",
//       "user-read-recently-played",
//       "user-read-playback-position",
//       "playlist-read-collaborative",
//       "app-remote-control",
//       "user-read-playback-state",
//       "user-read-email",
//       "streaming",
//       "user-top-read",
//       "playlist-modify-public",
//       "user-library-modify",
//       "user-follow-read",
//       "user-read-currently-playing",
//       "user-library-read",
//       "playlist-read-private",
//       "user-read-private",
//       "playlist-modify-private"
//   ]))
// })
// router.get('/callback', (req,res,next) => {
//   const code = req.query.code
//   spotifyApi.authorizationCodeGrant(req.query.code).then((response) => {
//       res.send(JSON.stringify(response.body.access_token))
//   })
// })

// app.use('/', router)
// app.listen(9000, () => {
//   console.log('Running');
// })

// ==========
// ==========
// ==========

const token = process.env.SPOTIFY_TOKEN
spotifyApi.setAccessToken(token)

async function myFunction(trackName) {
  var query = 'track:' + trackName
  var retItem = spotifyApi.searchTracks(query)
    .then(function (data) {
      return data.body.tracks.items[0];
    }, function (err) {
      console.log('Something went wrong!' + err);
      return 
    });
  return retItem //This is the JSON object asked for in the assignment
}

function getSpotifyTrack(trackName) {
  return myFunction(trackName)
}

export { getSpotifyTrack }




















// ==========
// ==========  CODE GRAVEYARD
// ==========

// // var SpotifyWebApi = require('spotify-web-api-node');

// // // credentials are optional
// // var spotifyApi = new SpotifyWebApi({
// //   clientId: '',
// //   clientSecret: '',
// //   redirectUri: 'http://www.example.com/callback'
// // });

// // var code = ''

// // // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
// // //     function(data) {
// // //       console.log('Artist albums', data.body);
// // //     },
// // //     function(err) {
// // //       console.error(err);
// // //     }
// // //   );

// // spotifyApi.authorizationCodeGrant(code)



// // // curl --request GET 'https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V' --header "Authorization: Bearer "

// const express = require('express')
// const app = express()
// const router = express.Router()
// var SpotifyWebApi = require('spotify-web-api-node');

// var spotifyApi = new SpotifyWebApi({
//   clientId: '',
//   clientSecret: '',
//   redirectUri: 'http://localhost:9000/callback'
// });

// router.get('/', (req, res, next) => {
//     res.send('idk')
// })

// app.use('/', router)
// app.listen(9000, () => {
//     console.log('running');
// })
