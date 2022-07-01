import React from "react";
import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";

// the App component should render out the GifListContainer component

// images.original.url 
// https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=ntc6nOubCWKfO4VVYcWEEDhg7J1CMkHW&rating=g

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
}

export default App;
