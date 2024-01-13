// Embedcode - giphy developers
{/* <iframe src="https://giphy.com/embed/l1gYcLBSdL7PoDsizo" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Friends-friends-tv-episode-220-l1gYcLBSdL7PoDsizo">via GIPHY</a></p> */}


import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");

  const fetchGifs = async () => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
      const { data } = await response.json();

      setGifUrl(data[0]?.images?.downsized_medium?.url);
    } catch (error) {
      setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
