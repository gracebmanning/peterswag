//Kaitlyn and Linda

const CLIENT_ID='a37d3777dba94386a078b4fd5e2dfc4f';
const URI_REDIRECT = 'http://localhost:3000';
const CLIENT_SECRET='6b64ea91dcc247199fdc3ff3c0389700';

export function getToken() {
  var access_token = new URL(document.location);
  const params = new URLSearchParams(window.location.search).get('code');

  return params;

}
export function getLoginURL() {
  return 'https://accounts.spotify.com/authorize?response_type=code&client_id='+ CLIENT_ID + '&scope=user-library-read&state=34fFs29kd09&redirect_uri=' + URI_REDIRECT;

}
export async function getAlbumImages(token) {
  console.log(token);
  let response = await fetch('https://api.spotify.com/v1/me/albums?limit=4', {
    method: 'GET', 
    headers: {
      'Authorization' : 'Bearer ' + token
    }
  });
  let information = await response.json();
  console.log(information);
  const imagesArray = information.items.map((item) => item.album.images[0].url);
  console.log(imagesArray);
  return imagesArray;
}


