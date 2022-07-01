// Should be a controlled compenent, receives a callback prop from GifList container (which will then query the API with the text the user has entered.)

import React from "react";

function GifSearch ({ onSubmit, searchedTerm, setSearchedTerm }) {

    function handleChange(event) {
        setSearchedTerm(event.target.value)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={searchedTerm} placeholder="Enter gif search" onChange={handleChange}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default GifSearch;