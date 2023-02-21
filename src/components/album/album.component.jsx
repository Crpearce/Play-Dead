import skull from "../../assets/skull.png";
import "./album.styles.css";

const Album = ({ albums }) => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 20);
  };
  console.log(albums)
  const album = albums[randomNumber()]
  console.log(album)

//   {albums.length && 
  
//       (<div key={album.id} style={{ backgroundImage: `url(${skull})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'cover' }}>
//           {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
//           {artist.name}
//       </div>
//   )
// }
};

export default Album;
