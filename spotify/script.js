let randomArtist = ["eminem", "queen", "adele"];

async function fetchSong(query) {
  console.log(query);
  query.forEach(async (e) => {
    let res = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${e}`,
      {
        " method": "GET",
        headers: {
          "X-RapidAPI-Key":
            "238dd69c82msh2043d84020f1e45p1bf534jsn5e65ef5bc199",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    let songs = await res.json();
    fetchAlbum(songs.data);
  });
}
async function fetchAlbum(songs) {
  songs.forEach((song) => {
    let albumCard = document.querySelector(".container");
    albumCard.innerHTML += `<div class="col-lg-3 col-sm-12">
        <img/ src="${song.album.cover_medium}" class="image-card">
        <p>${song.title}<p/>
        </div>`;
  });
}
fetchSong(randomArtist);
