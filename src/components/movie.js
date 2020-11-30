import React from "react";

const Movie = ({title, url}) => {
    
    return (
        <div className="movie">
            <ul>
                <li>
                    <a href={url}>{title}</a>
                </li>
            </ul>
        </div>
    )
}

export default Movie;