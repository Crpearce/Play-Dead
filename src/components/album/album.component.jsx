import SpotifyPlayer from "../spotifyPlayer/spotifyPlayer.component";
import skull from "../../assets/skull.png";
import leather from "../../assets/leather.png";

import "./album.styles.css";

const Album = ({ albums, token }) => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 20);
  };

  const album = albums[randomNumber()];
  console.log(album)

  return (
    <section>
      <div
        className="album-container"
        style={{
          backgroundImage: `url(${skull})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100vh",
        }}
      >
        {album && (
          <a href={`${album.external_urls.spotify}`} target="_blank" rel="noreferrer">
            <img
              src={album.images[0].url}
              alt="album-cover"
              className="album-cover"
            />
          </a>
        )}
      </div>
      {album && (
        <div className="album-details">
        <SpotifyPlayer token={token} uri={album.uri} size="large" them="black" view="list"/>
          <h3 className="album-name">{album.name}</h3>
          <a className="album-tracks"         style={{
          backgroundImage: `url(${leather})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "70vh",
        }}>Tracks: {album.total_tracks}</a>
          <br />
        </div>
      )}
    </section>
  );
};

export default Album;
