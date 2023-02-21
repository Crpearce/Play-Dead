import skull from "../../assets/skull.png";
import "./album.styles.css";

const Album = ({ albums }) => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 20);
  };
  console.log(albums);
  const album = albums[randomNumber()];
  console.log(album);

  return (
    <div
      className="album-container"
      style={{
        backgroundImage: `url(${skull})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100vh",
      }}
    >
      {album && <img src={album.images[0].url} alt="album-cover"  className="album-cover"/>}
    </div>
  );
};

export default Album;
