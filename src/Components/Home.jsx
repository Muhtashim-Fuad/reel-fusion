import React from "react";
import Card from "./Card";
import InfoPanel from "./InfoPanel";
import Panel from "./Panel";
import movieList from "./movieList";

function Home()
{
    const [filterString, setFilterString] = React.useState("");
    const [panelVisible, setPanelVisible] = React.useState(false);
    const [currentMovieData, setcurrentMovieData] = React.useState(null);

    function onSearchTextChange(event)
    {
        setFilterString(event.target.value);
    }

    function onOverlayVisibilityChanged()
    {
        setPanelVisible(!panelVisible);
    }

    function onButtonClicked(movieData)
    {
        setcurrentMovieData(movieData);
        onOverlayVisibilityChanged();
    }

    function filterTitle(movieData)
    {
        return movieData.Title.includes(filterString)
        || movieData.Director.includes(filterString)
        || movieData.Genre.includes(filterString);
    }

    function createCard(movieData)
    {
        return (
        <Card
            
            key = {movieData.Id}
            {...movieData}
            onClick = {() => onButtonClicked(movieData)}
        />
        );
    }
    
    return <div id="cardContainer">
        <Panel onSearchTextChange={onSearchTextChange}/>
        {
            panelVisible ? 
            <InfoPanel 
                {...currentMovieData}
                onClick = {onOverlayVisibilityChanged}
            /> :
            null
        }
        {movieList.filter(filterTitle).map(createCard)}
    </div>
}

export default Home;