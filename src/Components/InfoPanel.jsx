import React from "react";

function InfoPanel(movieData)
{
    const bgImage = { backgroundImage: 'url(' + movieData.Poster + ')', }
    return <div id = "info-overlay" onClick = {movieData.onClick}>
        <div>
            <div className="overlay-poster" style={bgImage}></div>
            <div className="overlay-data">
                    <div className="overlay-title">{movieData.Title} ({movieData.Year})</div>
                    <div className="overlay-synopsis">
                    <hr/>
                    <span className="overlay-content">
                            <b>Director(s): </b> {movieData.Director} <br/>
                            <b>Writer(s): </b> {movieData.Writer} <br/>
                            <b>Runtime: </b> {movieData.Runtime} <br/>
                            <b>Released: </b> {movieData.Released} <br/>
                            <b>IMDB Rating: </b> {movieData.imdbRating}/10 <br/>
                            <b>Genre: </b> {movieData.Genre} <br/>
                            <b>Actors: </b> {movieData.Actors} <br/>
                    </span>
                    <hr/>
                    <div className="overlay-attribute">Overview</div><br/>
                    <div className="overlay-content"> {movieData.Plot}
                    </div>
                    </div>
            </div>
        </div>
    </div>
}

export default InfoPanel;