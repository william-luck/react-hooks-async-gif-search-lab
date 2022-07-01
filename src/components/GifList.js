// Recives data from props, renders three gifs with a top level ul and each gif as a li 
import React from "react";

function GifList({ gifs }) {
    return (
        <div>
            <ul>
                <li><img src={gifs[0].images.original.url} /></li>
                <li><img src={gifs[1].images.original.url} /></li>
                <li><img src={gifs[2].images.original.url} /></li>
            </ul>
        </div>
    )
}

export default GifList;