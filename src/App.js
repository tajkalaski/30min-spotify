import { useEffect, useState } from "react";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { useStateValue } from "./context";

const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
    console.log(_token);
  }, [dispatch]);

  console.log(user);
  return (
    <div className="App">
      {!token && <Login />}
      {token && <Player />}
    </div>
  );
};

export default App;
