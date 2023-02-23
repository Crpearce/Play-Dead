import { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar.component";
import Album from "./components/album/album.component";
import Footer from "./components/footer/footer.component";
import axios from "axios";
import "./App.css";

function App() {
  const CLIENT_ID = "a959c9fd78fb4067ab8a08680b4fd97e";
  // "http://localhost:3000"
  // "https://play-dead.vercel.app/"
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "album",
        limit: 35,
      },
    });
    setAlbums(data.albums.items);
  };

  return (
    <div className="App">
      <div
        className="nav-container"
      >
        <Navbar />
        <header className="app-header">
          {!token ? (
            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className='signin'
            >
              Login to Spotify
            </a>
          ) : (
            <button className='spotify-button' onClick={logout}>Logout</button>
          )}
        </header>
      </div>
      <Album albums={albums} token={token} />
      {albums.length === 0 && (
        <form onSubmit={searchArtists}>
          <button type={"submit"} onClick={(e) => setSearchKey(`Dick's Picks`)}>
            Get Album
          </button>
        </form>
      )}
      <Footer />
    </div>
  );
}

export default App;
