import Movie from "./movie";
import React from "react";

const MoviesList= ({movies}) => {

    const movieNodes = movies.map( movie => {
        return(
            <Movie title={movie.name} key={movie.id} url={movie.url}></Movie>
        )
    })

    return (
        <div className = "movie-list">
            
            {movieNodes}
            
        </div>
    )
}

export default MoviesList;