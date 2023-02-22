const SpotifyPlayer = ({ uri, view, theme }) => {
  return (
    <iframe
      title="Spotify"
      className="SpotifyPlayer"
      src={`https://embed.spotify.com/?uri=${uri}&view=${view}&theme=${theme}`}
      width={300}
      height={80}
      allowtransparency="true"
      allow="encrypted-media"
    />
  );
};

export default SpotifyPlayer;
