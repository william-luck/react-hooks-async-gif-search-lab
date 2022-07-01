// Does the data fetching, renders Gif List
// Storing the first three gifs in state, pass down to gifLift as a prop
// WIll redner gifsearch compoenets, should pass down submit handler function as a prop 

import {React, useState} from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {

    const [searchedTerm, setSearchedTerm] = useState('')
    const [gifs, setGifs] = useState(null) // need to 

    function handleSubmit(event) {
        event.preventDefault();
        console.log("I've been submitted")

        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchedTerm}&api_key=ntc6nOubCWKfO4VVYcWEEDhg7J1CMkHW&rating=g`)
            .then(response => response.json())
            .then(src => setGifs(src.data.slice(0, 3)))
    }


    return (
        <div>
            <GifSearch onSubmit={handleSubmit} searchedTerm={searchedTerm} setSearchedTerm={setSearchedTerm}  />
            {gifs ? <GifList gifs={gifs}/> : null }
        </div>
    )
}

export default GifListContainer;