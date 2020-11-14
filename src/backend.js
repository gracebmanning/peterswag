//Kaitlyn and Linda
const APIController = (function (){
    const id = '';
    const secret = '';

    const _getToken = async () => {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST', 
            headers: {
              'Content-Type':  'application/x-www-form-urlencoded',
              'Authorization' : 'Basic ' + btoa(id+':'+secret)
            },
            body: 'grant_type = client_credentials'
          });
    
          const information = await response.json();
          return information.access_token;
        }
    const getAlbumImages = async (token) => {
      const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
        method: 'GET', 
        headers: {
          'Authorization' : 'Bearer' + token
        },
        body: 'limit = 4'
      });

      const information = await response.json();
      topTracks = information.tracks;
      var images = [];
      for(i = 0; i < 4; ++i){
          images.push(topTracks.album.images);
      }
      return images;
    }

})();

