import skull from "../../assets/skull.png";
import { Link } from "react-router-dom";
import "./album.styles.css";

const Album = ({ albums }) => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 20);
  };
  console.log(albums);
  const album = albums[randomNumber()];
  console.log(album);

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
          <a href={`${album.external_urls.spotify}`} target="_blank">
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
          <h3 className="album-name">{album.name}</h3>
          <a className="album-tracks">Tracks:{album.total_tracks}</a>
          <br />
        </div>
      )}
    </section>
  );
};

export default Album;
