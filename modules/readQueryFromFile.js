import fs from 'fs/promises';

async function myFunction() {
  const data = await fs.readFile('./modules/random.txt', { encoding: 'utf8' });
  return data;
}

let readFromFile = myFunction()

export { readFromFile }










// ==========
// ==========  CODE GRAVEYARD
// ==========

// async function myFunction(trackName) {
//   var retItem = spotifyApi.searchTracks(query)
//     .then(function (data) {
//       return data.body.tracks.items[0];
//     }, function (err) {
//       return 'Something went wrong!' + err;
//     });
//   return retItem
// }

// function getSpotifyTrack(trackName) {
//   return myFunction(trackName)
// }

// export { getSpotifyTrack }


// function readFromFile() {
//   var queries
//   fs.readFile('./modules/queries.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     queries = data;
//   });
//   console.log(queries);
//   return queries
// }


// readFromFile.then(function(result){
//   console.log(result);
// })
