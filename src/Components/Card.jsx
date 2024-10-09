import React from "react";


function Card(movieData)
{
    const bgStyle = 
    {
        backgroundImage: 'url(' + movieData.Poster + ')',
    }

    return <div className="movieCard" style={bgStyle}>
        <div className="movieData">
            <div className = "cardTitle">
                {movieData.Title} ({movieData.Year})
            </div>
            
            <div className="cardInfo">
            <p><b>Director:</b> {movieData.Director}<br/></p>
            <p><b>IMDB Rating: </b> {movieData.imdbRating}/10<br/></p>
            <p><b>Genre: </b>{movieData.Genre}<br/></p>
            </div>

            <div className = "cardButton" onClick = {movieData.onClick}>View</div>
        </div>
    </div>
}

export default Card;